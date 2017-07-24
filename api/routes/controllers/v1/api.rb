require 'json'

class ShortenerApi < Sinatra::Base
  get '/' do
    @links = Shortener::Models::Link.all
  end

  get '/:code' do
    @link = Shortener::Services::LinkResolver.call(code: params[:code])

    return 404 unless @link

    redirect @link.url, 301
  end

  post '/' do
    @payload = parse_json_body

    @link = Shortener::Services::LinkGenerator.call(url: @payload[:url], code: @payload[:code])

    return error 400, @link.errors.full_messages.first unless @link.valid?

    { url: @payload[:url], short_url: @link.code }.to_json
  end

  delete '/:code' do
    @link = Shortener::Services::LinkDestroyer.call(code: params[:code])

    return 404 unless @link

    200
  end

  private

  def parse_json_body
    body = request.body.read.to_s

    return if body.empty?

    payload = JSON.parse(body)

    # Symbolize body parameters
    Hash[payload.map { |(k,v)| [k.to_sym, v] }]
  end
end

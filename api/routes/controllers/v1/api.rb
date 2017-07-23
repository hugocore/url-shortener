class ShortenerApi < Sinatra::Base
  get '/' do
    json hello: 'World'
  end
end

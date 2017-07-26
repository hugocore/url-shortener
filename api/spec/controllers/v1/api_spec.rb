require 'spec_helper'

describe 'ShortenerApi' do
  describe 'GET /' do
    let!(:link1) { create(:link) }
    let!(:link2) { create(:link) }

    it 'serializes all links' do
      get '/'

      expected = [
        {
          'code' => link1.code,
          'short_url' => "#{ENV['BASE_URL']}#{link1.code}",
          'url' => link1.url,
          'clicks' => 0,
        },
        {
          'code' => link2.code,
          'short_url' => "#{ENV['BASE_URL']}#{link2.code}",
          'url' => link2.url,
          'clicks' => 0,
        },
      ]

      response = JSON.parse(last_response.body)

      expect(last_response.status).to eq(200)

      expect(response).to eq(expected)
    end
  end

  describe 'GET /:code' do
    subject { create(:link) }

    before :each do
      subject.update(clicks: 0)
    end

    it 'redirects to link url' do
      get "/#{subject.code}"

      expect(last_response.status).to eq(301)
      expect(last_response).to be_redirect
      follow_redirect!
      expect(last_request.url).to include(subject.url)
    end

    it 'increses the number of clicks' do
      get "/#{subject.code}"

      expect(subject.reload.clicks).to eq(1)
    end

    context 'with invalid code' do
      it 'returns 404 when code does not exist' do
        get '/invalid'

        expect(last_response.status).to eq(404)
      end
    end
  end

  describe 'POST' do
    context 'with valid url' do
      it 'creates short link' do
        expect do
           post '/', { url: 'http://www.farmdrop.com' }.to_json
        end.to change(Shortener::Models::Link.all, :count).by(1)
      end

      it 'returns short link code' do
        post '/', { url: 'http://www.farmdrop.com' }.to_json

        response = JSON.parse(last_response.body)

        expect(response['short_url']).not_to be_empty
        expect(response['url']).to eq('http://www.farmdrop.com')
      end

      it 'supports other protocols than just HTTP' do
        post '/', { url: 'ftp://farmdrop.com' }.to_json

        response = JSON.parse(last_response.body)

        expect(response['url']).to eq('ftp://farmdrop.com')
      end

      it 'adds http protocol by default when no protocol is provided' do
        post '/', { url: 'www.farmdrop.com' }.to_json

        response = JSON.parse(last_response.body)

        expect(response['url']).to eq('http://www.farmdrop.com')
      end
    end

    context 'with valid url and custom code' do
      it 'creates short link' do
        expect do
           post '/', { url: 'http://www.farmdrop.com', code: 'abc123' }.to_json
        end.to change(Shortener::Models::Link.all, :count).by(1)
      end

      it 'returns short link code' do
        post '/', { url: 'http://www.farmdrop.com', code: 'abc123' }.to_json

        response = JSON.parse(last_response.body)

        expect(response['short_url']).to eq('abc123')
        expect(response['url']).to eq('http://www.farmdrop.com')
      end
    end

    context 'with existing url' do
      before do
        create(:link, url: 'http://www.farmdrop.com', code: 'abc123')
      end

      it 'returns previously generated code' do
        post '/', { url: 'http://www.farmdrop.com' }.to_json

        response = JSON.parse(last_response.body)

        expect(response['short_url']).to eq('abc123')
        expect(response['url']).to eq('http://www.farmdrop.com')
      end

      it 'returns previously generated code even when http:// is not present' do
        post '/', { url: 'www.farmdrop.com' }.to_json

        response = JSON.parse(last_response.body)

        expect(response['short_url']).to eq('abc123')
        expect(response['url']).to eq('http://www.farmdrop.com')
      end
    end

    context 'with valid url and invalid code' do
      it 'creates short link' do
        expect do
           post '/', { url: 'http://www.farmdrop.com', code: 'robots' }.to_json
        end.to change(Shortener::Models::Link.all, :count).by(0)
      end

      it 'returns short link code' do
        post '/', { url: 'http://www.farmdrop.com', code: 'robots' }.to_json

        expect(last_response.status).to eq(400)
      end
    end
  end
end

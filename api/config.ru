require 'rack'
require 'rack/contrib'

require './config/boot'
require './config/application'

# https://github.com/cyu/rack-cors
use Rack::Cors do
  allow do
    origins ENV.fetch('ALLOWED_CORS_ORIGINS').split(',')
    resource '/*',
             headers: :any,
             methods: [:get, :post, :put, :patch, :delete]
  end
end

use Rack::PostBodyContentTypeParser

run ShortenerApi

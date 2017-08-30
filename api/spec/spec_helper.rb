require 'factory_girl'
require 'simplecov'
SimpleCov.start

ENV['RACK_ENV'] = 'test'

current_dir = File.expand_path('../../spec', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(current_dir)

require_relative '../config/boot'
require_relative '../config/application'

Dir[File.expand_path('../**/support/**/*.rb', __FILE__)].each do |file|
  require file
end

module RspecMixin
  include Rack::Test::Methods

  def app
    ShortenerApi
  end

  def parsed_response
    JSON.parse(last_response.body)
  end
end

RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods

  config.order = 'random'

  config.include RspecMixin

  config.before(:suite) do
    DatabaseCleaner.strategy = :truncation
    FactoryGirl.find_definitions
  end

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end
end

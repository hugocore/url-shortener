require 'sinatra/base'
require 'sinatra/activerecord'
require 'sinatra/contrib'
require 'rack-timeout'

require_relative './logging'

class ShortenerApi < Sinatra::Base
  include Logging

  register Sinatra::Namespace
  register Sinatra::ActiveRecordExtension
  register Sinatra::Contrib

  # Disable logging by default for all enviroments
  disable :logging

  configure :production, :development do
    before do
      env['rack.logger'] = Logging.logger # Where we save logs
      env['rack.errors'] = Logging.log_file # Where we save errors
    end

    # Log each API access to detect error codes and others
    use ::Rack::CommonLogger, Logging.access_logger

    # Enable logging for debugging and production tasks
    enable :logging

    # Configure Rack::Timeout with a default timeout of 15 seconds
    use Rack::Timeout, service_timeout: ENV.fetch('REQUEST_TIMEOUT', 15).to_i
    Rack::Timeout::Logger.disable
  end

  configure :development do
    register Sinatra::Reloader

    # The lowest level to enable logging
    set :logging, Logger::DEBUG
  end

  configure :production do
    disable :show_exceptions
    disable :dump_errors

    # The lowest level to enable logging
    set :logging, Logger::INFO
  end

  set :root, File.expand_path('./routes')
end

Dir[File.expand_path('routes/controllers/**/*.rb'), __FILE__].each do |f|
  require f
end

require 'rubygems'
require 'bundler/setup'

$PROJECT_ROOT = File.expand_path('../', File.dirname(__FILE__))

lib = File.join($PROJECT_ROOT, 'lib')

$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

ENV['ENV'] ||= ENV['RACK_ENV'] || 'development'
ENV['RACK_ENV'] ||= ENV['ENV']

Bundler.require(:default, ENV['RACK_ENV'].to_sym)

Dotenv.overload(
  File.expand_path('./.env', File.dirname(__FILE__)),
  File.expand_path("./.env_#{ENV['ENV']}", File.dirname(__FILE__))
)

Dir[File.expand_path('../initializers/**{,/*/**}/*.rb', __FILE__)].each do |f|
  require f
end

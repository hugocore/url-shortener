require 'sinatra/activerecord'

Dir[File.expand_path('app/**{,/*/**}/*.rb'), __FILE__].each do |f|
  require f
end

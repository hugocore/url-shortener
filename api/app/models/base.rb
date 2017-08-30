module Shortener
  module Models
    class Base < ActiveRecord::Base
      self.abstract_class = true
      self.default_timezone = :utc
    end
  end
end

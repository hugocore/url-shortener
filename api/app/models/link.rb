module Shortener
  module Models
    class Link < ActiveRecord::Base
      RESERVED_CODES = %w(
        robots sex badwords
      ).freeze

      validates :code, presence: true
      validates :code, uniqueness: { message: 'already exists' }
      validates :code, exclusion: { in: RESERVED_CODES, message: '"%{value}" is not allowed.' }

      validates :url, presence: true
      validates :url, uniqueness: { message: 'already exists' }
    end
  end
end

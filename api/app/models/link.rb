require_relative '../concerns/unique_codes'

module Shortener
  module Models
    class Link < ActiveRecord::Base
      include UniqueCodes

      RESERVED_CODES = %w(
        robots sex badwords
      ).freeze

      validates :code, uniqueness: { message: 'already exists' }
      validates :code, exclusion: { in: RESERVED_CODES, message: '"%{value}" is not allowed.' }

      validates :url, presence: true
      validates :url, uniqueness: { message: 'already exists' }

      before_validation :generate_code, on: :create, unless: :code?
      before_validation :add_http_prefix_if_necessary, on: :create, if: :url?

      def generate_code
        self.code = generate_small_code(:code)
      end

      def add_http_prefix_if_necessary
        self.url = "http://#{url}" unless (/:\/\//).match?(url)
      end
    end
  end
end

require_relative 'service'

module Shortener
  module Services
    class LinkGenerator
      extend Service

      def initialize(url:, code:)
        @url = sanitize(url)
        @code = code
      end

      def call()
        @link = Shortener::Models::Link.find_by_url(@url)

        @link || Shortener::Models::Link.create(url: @url, code: @code)
      end

      private

      def sanitize(url)
        (/:\/\//).match?(url) ? url : "http://#{url}"
      end
    end
  end
end

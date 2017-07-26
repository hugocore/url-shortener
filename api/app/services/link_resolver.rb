require_relative 'service'

module Shortener
  module Services
    class LinkResolver
      extend Service

      def initialize(code:)
        @code = code
      end

      def call()
        @link = Shortener::Models::Link.find_by_code(@code)

        return unless @link

        @link.increment!(:clicks)

        @link
      end
    end
  end
end




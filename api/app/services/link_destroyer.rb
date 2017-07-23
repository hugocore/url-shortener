require_relative 'service'

module Shortener
  module Services
    class LinkDestroyer
      extend Service

      def initialize(code:)
        @code = code
      end

      def call()
        @link = Shortener::Services::LinkResolver.call(@code)

        return unless @link

        @link.delete

        @link
      end
    end
  end
end

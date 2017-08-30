require_relative 'service'

module Shortener
  module Services
    class LinkDestroyer
      extend Service

      def initialize(code:)
        @code = code
      end

      def call()
        @link = Shortener::Models::Link.find_by(code: @code)

        return unless @link

        @link.delete

        @link
      end
    end
  end
end

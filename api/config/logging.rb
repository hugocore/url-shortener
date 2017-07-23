module Logging
  def self.included(_)
    # Std library doesn't support .write but it does support << so we just alias
    # these two together and we are able to use Logger
    ::Logger.class_eval { alias_method :write, '<<' }
  end

  class << self
    # Logger for API accesses
    def access_logger
      @_access_logger ||= ::Logger.new(access_log_path)
    end

    # Custom main logger to the Api
    def logger
      @_logger ||= ::Logger.new(log_file)
    end

    # File of the main log to be used by Sinatra in its Logger
    def log_file
      @_log_file ||= begin
        log_file = ::File.new(log_path, 'a+')
        log_file.sync = true # Dumps the logs to disk immediately

        log_file
      end
    end

    private

    # Path to the main log file which includes the current enviroment by default
    def log_path
      @_log ||= ::File.join('log', "#{ENV.fetch('RACK_ENV')}.log")

      ENV.fetch('LOG_FILE', @_log)
    end

    # Path to the access log file
    def access_log_path
      @_access_log ||= ::File.join('log', "#{ENV.fetch('RACK_ENV')}_access.log")

      ENV.fetch('ACCESS_LOG_FILE', @_access_log)
    end
  end
end

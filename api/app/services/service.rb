module Service
  def call(*args)
    new(*args).call
  end
end

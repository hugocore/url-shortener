class LinkSerializer < ActiveModel::Serializer
  self.root = false

  attributes :code, :short_url, :url, :clicks

  def short_url
    "#{ENV['BASE_URL']}#{object.code}"
  end
end

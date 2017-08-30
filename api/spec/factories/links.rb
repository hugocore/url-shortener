FactoryGirl.define do
  factory :link, class: Shortener::Models::Link do
    code { FFaker::Guid.guid }
    url { FFaker::Internet.http_url }
  end
end

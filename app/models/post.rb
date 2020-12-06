class Post < ApplicationRecord
  validates :title, :body, presence: true
  validates_uniqueness_of :title, case_sensitive: false
end

class User < ApplicationRecord
  has_secure_password
  validates_uniqueness_of :username

  has_many :appointments
  has_many :friends, through: :appointments

end

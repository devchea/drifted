class Friend < ApplicationRecord  
    has_one :user
    has_many :appointments
end
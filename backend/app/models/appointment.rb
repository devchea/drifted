class Appointment < ApplicationRecord  
    has_one :user
    has_one :friend
end
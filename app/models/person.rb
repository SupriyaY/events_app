class Person < ApplicationRecord
    has_many :assistances
    has_many :events, :through => :assistances
end

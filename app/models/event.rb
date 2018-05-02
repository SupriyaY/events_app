class Event < ApplicationRecord
    has_many :assistances
    has_many :people, :through => :assistances
end

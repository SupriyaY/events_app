class Event < ApplicationRecord
    has_many :people, through: :assistances
end

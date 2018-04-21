class Event < ApplicationRecord
    has_many :people, through: :assisstances
end

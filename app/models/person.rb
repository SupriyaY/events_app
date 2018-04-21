class Person < ApplicationRecord
    has_many: events, through: :assistances
end

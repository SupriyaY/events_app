class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price, :date, :people
  # belongs_to :person
end

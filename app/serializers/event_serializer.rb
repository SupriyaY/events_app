class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price, :date
  belongs_to :person
end

class Api::PeopleController < ApplicationController
def index
    @event = Event.find(params[:event_id])
if (params[:event_id] == nil)
    @people = @event.people
    render json: @people
end

def show
    @person = Person.find(params[:id])
    render json: @person
end

end
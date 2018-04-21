class Api::PeopleController < ApplicationController
def index
    @event = Event.find(params[:event_id])
if (params[:event_id] == nil)
    @people = @event.people
    render json: @people
end

def show
    @event = Event.find(params[:id])
    render json: @event
end

end
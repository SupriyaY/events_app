class Api::EventsController < ApplicationController
    
    def index
        @events = Event.all
        render json: @events
end



def show
    @event = Event.find(params[:event_id])
     @people = @event.people
        @data = {event: @event, people: @people}
        render json: @data
end

end
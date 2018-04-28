class Api::EventsController < ApplicationController
    
    def index
        @events = Event.all
        render json: @events
end


def show
    @event = Event.find(params[:id]).people
    render json: @event
end

end
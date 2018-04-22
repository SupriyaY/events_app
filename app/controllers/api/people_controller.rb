class Api::PeopleController < ApplicationController

    def index
@people = Person.all
render json: @people
    end


end

def show
    @person = Person.find(params[:id])
    render json: @person
end

end
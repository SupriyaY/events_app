class Api::AssistancesController < ApplicationController

  def index
    # @assistances = Event.find(params[:event_id])
    @assistances = Assistance.all
    render json: @assistances
  end

  def show
    @assistance = Assistance.find(params[:id])
    render json: @assistance
  end


end

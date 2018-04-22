class Api::AssistancesController < ApplicationController

  def index
    # @assistances = Language.find(params[:language_id]).lessons
    @assistances = Assistance.all
    render json: @assistances
  end

  def show
    @assistance = Assistance.find(params[:id])
    render json: @assistances
  end


end

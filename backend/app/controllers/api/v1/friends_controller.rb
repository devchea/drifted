class Api::V1::FriendsController < ApplicationController

    def index
      @friends = Friend.all
      render json: @friends
    end

    def create
      @friend = Friend.create(friend_params)
      # byebug
      render json: @friend
    end

    private
    def friend_params
        params.require(:friend).permit!
    end
  end
class FriendsController < ApplicationController

    before_action :current_friend, only: [:show]

    def show
    
    end

    def new
        @friend = Friend.new
    end

    def create
        @friend = Friend.new(friend_params)

        if @friend.valid?
            @friend.save
            redirect_to @friend
        else
            redirect_to "/friends/new"
        end
    end

    def edit
      end
    
      def update
          if @friend.update(friends_params)
            redirect_to @friend
          else
            redirect_to edit_friend_path
          end
      end
    
      def destroy
        @friend.destroy
        render :home
      end

    def current_friend
        @friend = friend.find(params[:id])
    end

    private
    def friend_params
        params.require(:friend).permit!
    end
end

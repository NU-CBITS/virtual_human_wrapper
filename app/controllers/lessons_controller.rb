class LessonsController < ApplicationController

    def index
        @lessons = Lesson.all
    end

    def show
        @lesson = Lesson.where(:id => params[:id]).first
        @lesson_contents = @lesson.lesson_contents.order("page").page(params[:page]).per(1)
    end
    
    def update
        @user = current_user
        @lesson = Lesson.where(:id => params[:id]).first
        LessonsUsers.where(:user_id => @user.id, :lesson_id => @lesson.id, :completed => true).first_or_create
        redirect_to root_path
    end

    def list
        @user = current_user
        @list = LessonsUsers.where(:user_id => @user.id)
        render json: @list
    end

end

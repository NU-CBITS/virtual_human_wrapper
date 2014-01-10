class HomeController < ApplicationController
    before_filter :authenticate_user!

    def index
        @lessons = Lesson.all
    end
end

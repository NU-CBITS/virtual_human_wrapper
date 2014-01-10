module LessonsHelper
    def completed?(user, lesson)
        lesson_user = LessonsUsers.where("user_id = ? AND lesson_id =?", user.id, lesson.id).first || false
        if lesson_user
            return lesson_user.completed 
        else
            return false
        end
    end
end

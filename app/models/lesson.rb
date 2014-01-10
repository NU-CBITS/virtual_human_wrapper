class Lesson < ActiveRecord::Base
    
    has_many :lesson_contents
    has_and_belongs_to_many :users

end

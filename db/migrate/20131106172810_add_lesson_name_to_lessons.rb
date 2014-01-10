class AddLessonNameToLessons < ActiveRecord::Migration
  def change
    add_column :lessons, :lesson_name, :string
  end
end

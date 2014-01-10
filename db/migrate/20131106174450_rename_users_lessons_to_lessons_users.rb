class RenameUsersLessonsToLessonsUsers < ActiveRecord::Migration
  def change
      rename_table :users_lessons, :lessons_users
  end
end

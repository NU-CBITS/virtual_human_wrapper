class CreateUsersLessons < ActiveRecord::Migration
  def change
    create_table :users_lessons do |t|
      t.integer :user_id
      t.integer :lesson_id
      t.boolean :completed

      t.timestamps
    end
  end
end

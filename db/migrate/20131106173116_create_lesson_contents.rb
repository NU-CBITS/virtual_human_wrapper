class CreateLessonContents < ActiveRecord::Migration
  def change
    create_table :lesson_contents do |t|
      t.integer :lesson_id
      t.text :content
      t.integer :page

      t.timestamps
    end
  end
end

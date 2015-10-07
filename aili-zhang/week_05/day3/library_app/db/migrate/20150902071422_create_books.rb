class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
    	t.text :title
    	t.date :date_of_publish
    	t.text :genre
    	t.text :cover
    	t.timestamps
    end
  end
end

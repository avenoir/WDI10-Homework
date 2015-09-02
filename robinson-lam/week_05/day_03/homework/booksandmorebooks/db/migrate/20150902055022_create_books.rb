class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
    	t.text :title
    	t.text :genre
    	t.integer :pages
    	t.integer :series_id
    	t.integer :author_id
    	t.timestamps
    end
  end
end

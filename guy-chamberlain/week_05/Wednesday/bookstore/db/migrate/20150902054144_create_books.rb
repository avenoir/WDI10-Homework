class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
    	t.text :title
    	t.date :publication_date
    	t.text :image
    	t.integer :author_id
    	t.timestamps
    end
  end
end

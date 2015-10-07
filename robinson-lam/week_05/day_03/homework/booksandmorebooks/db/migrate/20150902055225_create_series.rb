class CreateSeries < ActiveRecord::Migration
  def change
    create_table :series do |t|
    	t.text :name
    	t.integer :author_id
    	t.timestamps
    end
  end
end

class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :name, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end
    add_index :categories, :name
  end
end

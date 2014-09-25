class CreateRestaurantCategories < ActiveRecord::Migration
  def change
    create_table :restaurant_categories do |t|
      t.integer :restaurant_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
  end
end

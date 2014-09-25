class RemoveRestaurantId < ActiveRecord::Migration
  def change
    remove_column :categories, :restaurant_id
  end
end

class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :category, null: false

      t.timestamps
    end
    add_index :restaurants, :name, unique: true
    add_index :restaurants, :address, unique: true 
  end
end

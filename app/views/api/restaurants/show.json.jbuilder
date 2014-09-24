json.extract! @restaurant, :id, :name, :address, :created_at, :updated_at
json.reviews @restaurant.reviews
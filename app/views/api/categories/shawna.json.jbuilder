json.extract! @category, :id, :name, :updated_at, :created_at

json.restaurants @category.restaurants do |restaurant|
	json.extract! restaurant, :id, :name, :address, :latitude, :longitude, :updated_at, :created_at
	
	json.reviews restaurant.reviews do |review|
		json.extract! review, :body, :rating, :user_id, :restaurant_id, :updated_at, :created_at
	end
end
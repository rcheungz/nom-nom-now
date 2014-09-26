# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#Users
#Guest Login Account
User.create(username: "jeckchen@dinosaurs.me", password: "password")

#Restaurants in San Francisco
Restaurant.create(name: "Ike's Place", address: "3489 16th St San Francisco, CA 94114") #Category: Sandwiches
Restaurant.create(name: "Brenda's French Soul Food", address: "652 Polk St San Francisco, CA 94102") #Category Cajun French Soul Food
Restaurant.create(name: "Burmese Superstar", address: "309 Clement St San Francisco, CA 94118") #Category Burmese
Restaurant.create(name: "San Tung Chinese Restaurant", address: "1031 Irving St San Francisco, CA 94122") #Chinese
Restaurant.create(name: "Gary Danko", address: "800 N Point St San Francisco, CA 94109") #American
Restaurant.create(name: "NOPA", address: "560 Divisadero St San Francisco, CA 94117") #American Modern European Breakfast Brunch Breakfast & Brunch
Restaurant.create(name: "The House", address: "1230 Grant Ave San Francisco, CA 94133") #Asian Fusion
Restaurant.create(name: "El Farolito", address: "2779 Mission St San Francisco, CA 94110") #Mexican Tacos Burritos
Restaurant.create(name: "Kokkari Estiatorio", address: "200 Jackson St San Francisco, CA 94111") #Greek Mediterranean
Restaurant.create(name: "Hog Island Oyster Co", address: "1 Ferry Bldg Shop 11 San Francisco, CA 94111") #Seafood
Restaurant.create(name: "Saigon Sandwich", address: "560 Larkin St San Francisco, CA 94102") #Vietnamese Sandwiches
Restaurant.create(name: "Little Star Pizza", address: "846 Divisadero St San Francisco, CA 94117") #Italian Pizza
Restaurant.create(name: "Tonys Pizza Napoletana", address: "1570 Stockton St San Francisco, CA 94133") # Italian Pizza
Restaurant.create(name: "The Monk's Kettle", address: "3141 16th St San Francisco, CA 94103") #Bars Gastropubs
Restaurant.create(name: "Umami Burger", address: "2184 Union St San Francisco, CA 94123") #Burgers
Restaurant.create(name: "", address: "")
Restaurant.create(name: "", address: "")
Restaurant.create(name: "", address: "")
Restaurant.create(name: "", address: "")


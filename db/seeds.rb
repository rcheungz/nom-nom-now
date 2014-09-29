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
Restaurant.create(name: "Ike's Place", address: "3489 16th Street, San Francisco, CA 94114, USA") #Category: Sandwiches _______________________________________________ 1
Restaurant.create(name: "Brenda's French Soul Food", address: "652 Polk Street, San Francisco, CA 94102, USA") #Category Cajun French Soul Food _______________________ 2
Restaurant.create(name: "Burmese Superstar", address: "309 Clement Street, San Francisco, CA 94118, USA") #Category Burmese ___________________________________________ 3                                            
Restaurant.create(name: "San Tung Chinese Restaurant", address: "1031 Irving Street, San Francisco, CA 94122, USA") #Chinese __________________________________________ 4                                           
Restaurant.create(name: "Gary Danko", address: "800 North Point Street, San Francisco, CA 94109, USA") #American __________________________________________________________ 5                                                 
Restaurant.create(name: "NOPA", address: "560 Divisadero Street, San Francisco, CA 94117, USA") #American Modern European Breakfast Brunch Breakfast & Brunch _________ 6          
Restaurant.create(name: "The House", address: "1230 Grant Avenue, San Francisco, CA 94133, USA") #Asian Fusion _______________________________________________________ 7                                      
Restaurant.create(name: "El Farolito", address: "2779 Mission Street, San Francisco, CA 94110, USA") #Mexican Tacos Burritos __________________________________________ 8                                     
Restaurant.create(name: "Kokkari Estiatorio", address: "200 Jackson Street, San Francisco, CA 94111, USA") #Greek Mediterranean _______________________________________ 9                                     
Restaurant.create(name: "Roy's Restaurant", address: "575 Mission Street, San Francisco, CA 94105, USA") #Seafood ___________________________________________ 10                                     
Restaurant.create(name: "Saigon Sandwich", address: "560 Larkin Street, San Francisco, CA 94102, USA") #Vietnamese Sandwiches _________________________________________ 11                                          
Restaurant.create(name: "Little Star Pizza", address: "846 Divisadero Street, San Francisco, CA 94117, USA") #Italian Pizza ___________________________________________ 12                                        
Restaurant.create(name: "Tonys Pizza Napoletana", address: "1570 Streetockton Street, San Francisco, CA 94133, USA") # Italian Pizza ______________________________________ 13                                   
Restaurant.create(name: "The Monk's Kettle", address: "3141 16th Street, San Francisco, CA 94103, USA") #Bars Gastropubs ______________________________________________ 14                                            
Restaurant.create(name: "Umami Burger", address: "2184 Union Street, San Francisco, CA 94123, USA") #Burgers __________________________________________________________ 15                                                 
Restaurant.create(name: "Swan Oyster Depot", address: "1517 Polk Street, San Francisco, CA 94109, USA") #Seafood ______________________________________________________ 16                                             
Restaurant.create(name: "Taqueria Cancún", address: "2288 Mission Street, San Francisco, CA 94110, USA") #Mexican Tacos Burritos ______________________________________ 17                                  
Restaurant.create(name: "Sotto Mare", address: "552 Green Street, San Francisco, CA 94133, USA") #Italian Seafood _____________________________________________________ 18                                             
Restaurant.create(name: "Sushirrito", address: "59 New Montgomery Street, San Francisco, CA 94105, USA") #Japanese Sushi Burritos _____________________________________ 19                              
Restaurant.create(name: "Kare-Ken", address: "552 Jones Street, San Francisco, CA 94102, USA") #Japanese Curry ________________________________________________________ 20                                                   

#Categories
Category.create(name: "sandwiches")         #1
Category.create(name: "cajun")              #2
Category.create(name: "french")             #3
Category.create(name: "soul food")          #4
Category.create(name: "urmese")            #5  
Category.create(name: "chinese")            #6
Category.create(name: "american")           #7
Category.create(name: "modern")             #8
Category.create(name: "european")           #9
Category.create(name: "breakfast")          #10
Category.create(name: "brunch")             #11
Category.create(name: "breakfast & brunch") #12
Category.create(name: "asian fusion")       #13
Category.create(name: "mexican")            #14
Category.create(name: "tacos")              #15 
Category.create(name: "burritos")           #16
Category.create(name: "greek")              #17
Category.create(name: "mediterranean")      #18
Category.create(name: "seafood")            #19
Category.create(name: "vietnamese")         #20
Category.create(name: "italian")            #21
Category.create(name: "pizza")              #22
Category.create(name: "bars")               #23
Category.create(name: "gastropubs")         #24
Category.create(name: "burgers")            #25
Category.create(name: "japanese")           #26
Category.create(name: "sushi")              #27
Category.create(name: "curry")              #28
Category.create(name: "korean")             #29
Category.create(name: "french")             #30
Category.create(name: "indian")             #31
Category.create(name: "restaurants")        #32

#Restaurant Categories (Join Table)

RestaurantCategory.create(restaurant_id: 1, category_id: 1) #Ike's Place - Sandwiches
RestaurantCategory.create(restaurant_id: 2, category_id: 2) #Brenda's French Soul Food - Cajun
RestaurantCategory.create(restaurant_id: 2, category_id: 3) #Brenda's French Soul Food - French
RestaurantCategory.create(restaurant_id: 2, category_id: 4) #Brenda's French Soul Food - Soul Food
RestaurantCategory.create(restaurant_id: 3, category_id: 5) #Burmese Superstar - Burmese
RestaurantCategory.create(restaurant_id: 4, category_id: 6) #San Tung Chinese Restaurant - Chinese
RestaurantCategory.create(restaurant_id: 5, category_id: 7) #Gary Danko - American
RestaurantCategory.create(restaurant_id: 6, category_id: 7) #NOPA - American Modern European Breakfast Brunch Breakfast & Brunch 
RestaurantCategory.create(restaurant_id: 6, category_id: 8) #NOPA - Modern
RestaurantCategory.create(restaurant_id: 6, category_id: 9) #NOPA - European
RestaurantCategory.create(restaurant_id: 6, category_id: 10) #NOPA - Breakfast
RestaurantCategory.create(restaurant_id: 6, category_id: 11) #NOPA - Brunch
RestaurantCategory.create(restaurant_id: 6, category_id: 12) #NOPA - Breakfast & Brunch
RestaurantCategory.create(restaurant_id: 7, category_id: 13) #The House - Asian Fusion
RestaurantCategory.create(restaurant_id: 8, category_id: 14) #El Farolito - Mexican
RestaurantCategory.create(restaurant_id: 8, category_id: 15) #El Farolito - Tacos
RestaurantCategory.create(restaurant_id: 8, category_id: 16) #El Farolito - Burritos
RestaurantCategory.create(restaurant_id: 9, category_id: 17) #Kokkari Estiatorio - Greek
RestaurantCategory.create(restaurant_id: 9, category_id: 18) #Kokkari Estiatorio - Mediterranean
RestaurantCategory.create(restaurant_id: 10, category_id: 19) #Roy's Restaurant - Seafood
RestaurantCategory.create(restaurant_id: 11, category_id: 1) #Saigon Sandwich - Sandwich
RestaurantCategory.create(restaurant_id: 11, category_id: 20) #Saigon Sandwich - Vietnamese
RestaurantCategory.create(restaurant_id: 12, category_id: 21) #Little Star Pizza - Italian
RestaurantCategory.create(restaurant_id: 12, category_id: 22) #Little Star Pizza - Pizza
RestaurantCategory.create(restaurant_id: 13, category_id: 21) #Tony's Pizza Napoletana - Italian
RestaurantCategory.create(restaurant_id: 13, category_id: 22) #Tony's Pizza Napoletana - Pizza
RestaurantCategory.create(restaurant_id: 14, category_id: 24) #The Monk's Kettle - Bar
RestaurantCategory.create(restaurant_id: 14, category_id: 25) #The Monk's Kettle - Gastropubs
RestaurantCategory.create(restaurant_id: 15, category_id: 25) #Umami Burger - Burgers
RestaurantCategory.create(restaurant_id: 16, category_id: 19) #Swan Oyster Depot - Seafood
RestaurantCategory.create(restaurant_id: 17, category_id: 14) #Taqueria Cancun - Mexican
RestaurantCategory.create(restaurant_id: 17, category_id: 15) #Taqueria Cancun - Tacos
RestaurantCategory.create(restaurant_id: 17, category_id: 16) #Taqueria Cancun - Burritos
RestaurantCategory.create(restaurant_id: 18, category_id: 21) #Sotto Mare - Italian
RestaurantCategory.create(restaurant_id: 18, category_id: 19) #Sotto Mare - Seafood
RestaurantCategory.create(restaurant_id: 19, category_id: 27) #Sushirrito - Sushi
RestaurantCategory.create(restaurant_id: 19, category_id: 26) #Sushirrito - Japanese
RestaurantCategory.create(restaurant_id: 19, category_id: 16) #Sushirrito - Burritos
RestaurantCategory.create(restaurant_id: 20, category_id: 26) #Kare-Ken - Japanese
RestaurantCategory.create(restaurant_id: 20, category_id: 29) #Kare-Ken - Curry

#All Restaurants fall under restaurant category

RestaurantCategory.create(restaurant_id: 1, category_id: 32) #Ike's Place - Sandwiches
RestaurantCategory.create(restaurant_id: 2, category_id: 32) #Brenda's French Soul Food - Cajun
RestaurantCategory.create(restaurant_id: 3, category_id: 32) #Brenda's French Soul Food - French
RestaurantCategory.create(restaurant_id: 4, category_id: 32) #Brenda's French Soul Food - Soul Food
RestaurantCategory.create(restaurant_id: 5, category_id: 32) #Burmese Superstar - Burmese
RestaurantCategory.create(restaurant_id: 6, category_id: 32) #San Tung Chinese Restaurant - Chinese
RestaurantCategory.create(restaurant_id: 7, category_id: 32) #Gary Danko - American
RestaurantCategory.create(restaurant_id: 8, category_id: 32) #NOPA - American Modern European Breakfast Brunch Breakfast & Brunch 
RestaurantCategory.create(restaurant_id: 9, category_id: 32) #NOPA - Modern
RestaurantCategory.create(restaurant_id: 10, category_id: 32) #NOPA - European
RestaurantCategory.create(restaurant_id: 11, category_id: 32) #NOPA - Breakfast
RestaurantCategory.create(restaurant_id: 12, category_id: 32) #NOPA - Brunch
RestaurantCategory.create(restaurant_id: 13, category_id: 32) #NOPA - Breakfast & Brunch
RestaurantCategory.create(restaurant_id: 14, category_id: 32) #The House - Asian Fusion
RestaurantCategory.create(restaurant_id: 15, category_id: 32) #El Farolito - Mexican
RestaurantCategory.create(restaurant_id: 16, category_id: 32) #El Farolito - Tacos
RestaurantCategory.create(restaurant_id: 17, category_id: 32) #El Farolito - Burritos
RestaurantCategory.create(restaurant_id: 18, category_id: 32) #Kokkari Estiatorio - Greek
RestaurantCategory.create(restaurant_id: 19, category_id: 32) #Kokkari Estiatorio - Mediterranean
RestaurantCategory.create(restaurant_id: 20, category_id: 32) #Hog Island Oyster Co - Seafood
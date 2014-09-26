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
Restaurant.create(name: "Ike's Place", address: "3489 16th St San Francisco, CA 94114") #Category: Sandwiches _______________________________________________ 1
Restaurant.create(name: "Brenda's French Soul Food", address: "652 Polk St San Francisco, CA 94102") #Category Cajun French Soul Food _______________________ 2
Restaurant.create(name: "Burmese Superstar", address: "309 Clement St San Francisco, CA 94118") #Category Burmese ___________________________________________ 3                                            
Restaurant.create(name: "San Tung Chinese Restaurant", address: "1031 Irving St San Francisco, CA 94122") #Chinese __________________________________________ 4                                           
Restaurant.create(name: "Gary Danko", address: "800 N Point St San Francisco, CA 94109") #American __________________________________________________________ 5                                                 
Restaurant.create(name: "NOPA", address: "560 Divisadero St San Francisco, CA 94117") #American Modern European Breakfast Brunch Breakfast & Brunch _________ 6          
Restaurant.create(name: "The House", address: "1230 Grant Ave San Francisco, CA 94133") #Asian Fusion _______________________________________________________ 7                                      
Restaurant.create(name: "El Farolito", address: "2779 Mission St San Francisco, CA 94110") #Mexican Tacos Burritos __________________________________________ 8                                     
Restaurant.create(name: "Kokkari Estiatorio", address: "200 Jackson St San Francisco, CA 94111") #Greek Mediterranean _______________________________________ 9                                     
Restaurant.create(name: "Hog Island Oyster Co", address: "1 Ferry Bldg Shop 11 San Francisco, CA 94111") #Seafood ___________________________________________ 10                                     
Restaurant.create(name: "Saigon Sandwich", address: "560 Larkin St San Francisco, CA 94102") #Vietnamese Sandwiches _________________________________________ 11                                          
Restaurant.create(name: "Little Star Pizza", address: "846 Divisadero St San Francisco, CA 94117") #Italian Pizza ___________________________________________ 12                                        
Restaurant.create(name: "Tonys Pizza Napoletana", address: "1570 Stockton St San Francisco, CA 94133") # Italian Pizza ______________________________________ 13                                   
Restaurant.create(name: "The Monk's Kettle", address: "3141 16th St San Francisco, CA 94103") #Bars Gastropubs ______________________________________________ 14                                            
Restaurant.create(name: "Umami Burger", address: "2184 Union St San Francisco, CA 94123") #Burgers __________________________________________________________ 15                                                 
Restaurant.create(name: "Swan Oyster Depot", address: "1517 Polk St San Francisco, CA 94109") #Seafood ______________________________________________________ 16                                             
Restaurant.create(name: "Taqueria Cancún", address: "2288 Mission St San Francisco, CA 94110") #Mexican Tacos Burritos ______________________________________ 17                                  
Restaurant.create(name: "Sotto Mare", address: "552 Green St San Francisco, CA 94133") #Italian Seafood _____________________________________________________ 18                                             
Restaurant.create(name: "Sushirrito", address: "59 New Montgomery St San Francisco, CA 94105") #Japanese Sushi Burritos _____________________________________ 19                              
Restaurant.create(name: "Kare-Ken", address: "552 Jones St San Francisco, CA 94102") #Japanese Curry ________________________________________________________ 20                                                   

#Categories
Category.create(name: "Sandwiches")         #1
Category.create(name: "Cajun")              #2
Category.create(name: "French")             #3
Category.create(name: "Soul Food")          #4
Category.create(name: "Burmese")            #5  
Category.create(name: "Chinese")            #6
Category.create(name: "American")           #7
Category.create(name: "Modern")             #8
Category.create(name: "European")           #9
Category.create(name: "Breakfast")          #10
Category.create(name: "Brunch")             #11
Category.create(name: "Breakfast & Brunch") #12
Category.create(name: "Asian Fusion")       #13
Category.create(name: "Mexican")            #14
Category.create(name: "Tacos")              #15 
Category.create(name: "Burritos")           #16
Category.create(name: "Greek")              #17
Category.create(name: "Mediterranean")      #18
Category.create(name: "Seafood")            #19
Category.create(name: "Vietnamese")         #21
Category.create(name: "Italian")            #22
Category.create(name: "Pizza")              #23
Category.create(name: "Bars")               #24
Category.create(name: "Gastropubs")         #25
Category.create(name: "Burgers")            #26
Category.create(name: "Japanese")           #27
Category.create(name: "Sushi")              #28
Category.create(name: "Curry")              #29
Category.create(name: "Korean")             #30
Category.create(name: "French")             #31
Category.create(name: "Indian")             #32

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
RestaurantCategory.create(restaurant_id: 10, category_id: 19) #Hog Island Oyster Co - Seafood
RestaurantCategory.create(restaurant_id: 11, category_id: 19) #Saigon Sandwich - Sandwich
RestaurantCategory.create(restaurant_id: 11, category_id: 19) #Saigon Sandwich - Vietnamese
RestaurantCategory.create(restaurant_id: 12, category_id: 22) #Little Star Pizza - Italian
RestaurantCategory.create(restaurant_id: 12, category_id: 23) #Little Star Pizza - Pizza
RestaurantCategory.create(restaurant_id: 13, category_id: 22) #Tony's Pizza Napoletana - Italian
RestaurantCategory.create(restaurant_id: 13, category_id: 23) #Tony's Pizza Napoletana - Pizza
RestaurantCategory.create(restaurant_id: 14, category_id: 24) #The Monk's Kettle - Bar
RestaurantCategory.create(restaurant_id: 14, category_id: 25) #The Monk's Kettle - Gastropubs
RestaurantCategory.create(restaurant_id: 15, category_id: 26) #Umami Burger - Burgers
RestaurantCategory.create(restaurant_id: 16, category_id: 19) #Swan Oyster Depot - Seafood
RestaurantCategory.create(restaurant_id: 17, category_id: 14) #Taqueria Cancun - Mexican
RestaurantCategory.create(restaurant_id: 17, category_id: 15) #Taqueria Cancun - Tacos
RestaurantCategory.create(restaurant_id: 17, category_id: 16) #Taqueria Cancun - Burritos
RestaurantCategory.create(restaurant_id: 18, category_id: 22) #Sotto Mare - Italian
RestaurantCategory.create(restaurant_id: 18, category_id: 19) #Sotto Mare - Seafood
RestaurantCategory.create(restaurant_id: 19, category_id: 28) #Sushirrito - Sushi
RestaurantCategory.create(restaurant_id: 19, category_id: 27) #Sushirrito - Japanese
RestaurantCategory.create(restaurant_id: 19, category_id: 16) #Sushirrito - Burritos
RestaurantCategory.create(restaurant_id: 20, category_id: 27) #Kare-Ken - Japanese
RestaurantCategory.create(restaurant_id: 20, category_id: 29) #Kare-Ken - Curry

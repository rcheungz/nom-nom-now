# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or newd alongside the db with db:setup).
#
# Examples:
#
#   cities = City.new([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.new(name: 'Emanuel', city: cities.first)

#Users
#Guest Login Account
seeds = [];
#Restaurants in San Francisco
User.create(username: "Zach Chen", password: "password")
User.create(username: "Kobe Bryant", password: "password")
User.create(username: "Michael Jordan", password: "password")
User.create(username: "Russell Wilson", password: "password")
User.create(username: "Zooey Deschanel", password: "password")
User.create(username: "Channing Tatum", password: "password")
User.create(username: "Obama", password: "password")
User.create(username: "The Most Interesting Man in the World", password: "password")
User.create(username: "Kaley Cuoco", password: "password")
User.create(username: "Analeigh Tipton", password: "password")

seeds << Restaurant.new(name: "Ike's Place", address: "3489 16th Street, San Francisco, CA 94114, USA") #Category: Sandwiches _______________________________________________ 1
seeds << Restaurant.new(name: "Brenda's French Soul Food", address: "652 Polk Street, San Francisco, CA 94102, USA") #Category Cajun French Soul Food _______________________ 2
seeds << Restaurant.new(name: "Burmese Superstar", address: "309 Clement Street, San Francisco, CA 94118, USA") #Category Burmese ___________________________________________ 3                                        
seeds << Restaurant.new(name: "San Tung Chinese Restaurant", address: "1031 Irving Street, San Francisco, CA 94122, USA") #Chinese __________________________________________ 4                                        
seeds << Restaurant.new(name: "Gary Danko", address: "800 North Point Street, San Francisco, CA 94109, USA") #American ______________________________________________________ 5                                    
seeds << Restaurant.new(name: "NOPA", address: "560 Divisadero Street, San Francisco, CA 94117, USA") #American Modern European Breakfast Brunch Breakfast & Brunch _________ 6          
seeds << Restaurant.new(name: "The House", address: "1230 Grant Avenue, San Francisco, CA 94133, USA") #Asian Fusion ________________________________________________________ 7                                      
seeds << Restaurant.new(name: "El Farolito", address: "2779 Mission Street, San Francisco, CA 94110, USA") #Mexican Tacos Burritos __________________________________________ 8                                     
seeds << Restaurant.new(name: "Kokkari Estiatorio", address: "200 Jackson Street, San Francisco, CA 94111, USA") #Greek Mediterranean _______________________________________ 9                                     
seeds << Restaurant.new(name: "Roy's Restaurant", address: "575 Mission Street, San Francisco, CA 94105, USA") #Seafood _____________________________________________________ 10                                     
seeds << Restaurant.new(name: "Saigon Sandwich", address: "560 Larkin Street, San Francisco, CA 94102, USA") #Vietnamese Sandwiches _________________________________________ 11                                       
seeds << Restaurant.new(name: "Little Star Pizza", address: "846 Divisadero Street, San Francisco, CA 94117, USA") #Italian Pizza ___________________________________________ 12                            
seeds << Restaurant.new(name: "Tonys Pizza Napoletana", address: "1570 Stockton Street, San Francisco, CA 94133, USA") # Italian Pizza ______________________________________ 13                                   
seeds << Restaurant.new(name: "The Monk's Kettle", address: "3141 16th Street, San Francisco, CA 94103, USA") #Bars Gastropubs ______________________________________________ 14                                       
seeds << Restaurant.new(name: "Umami Burger", address: "2184 Union Street, San Francisco, CA 94123, USA") #Burgers __________________________________________________________ 15                                    
seeds << Restaurant.new(name: "Swan Oyster Depot", address: "1517 Polk Street, San Francisco, CA 94109, USA") #Seafood ______________________________________________________ 16                                      
seeds << Restaurant.new(name: "Taqueria Cancún", address: "2288 Mission Street, San Francisco, CA 94110, USA") #Mexican Tacos Burritos ______________________________________ 17                                  
seeds << Restaurant.new(name: "Sotto Mare", address: "552 Green Street, San Francisco, CA 94133, USA") #Italian Seafood _____________________________________________________ 18                            
seeds << Restaurant.new(name: "Sushirrito", address: "59 New Montgomery Street, San Francisco, CA 94105, USA") #Japanese Sushi Burritos _____________________________________ 19                              
seeds << Restaurant.new(name: "Kare-Ken", address: "552 Jones Street, San Francisco, CA 94102, USA") #Japanese Curry ________________________________________________________ 20                                                   

#Seattle Restaurants for the homies
seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA") #Sandwiches Cuban ______________________________________________________ 21
seeds << Restaurant.new(name: "Umi Sake House", address: "2230 1st Avenue, Seattle, WA 98121, USA") #Sushi Japanese _________________________________________________________ 22
seeds << Restaurant.new(name: "Toulouse Petit", address: "601 Queen Anne Avenue North, Seattle, WA 98109, USA") #Cajun Breakfast Brunch Breakfast & Brunch Bar ______________ 23
seeds << Restaurant.new(name: "Din Tai Fung", address: "700 Bellevue Way Northeast, Bellevue, WA 98004, USA") #Chinese Dim Sum Taiwanese ____________________________________ 24
seeds << Restaurant.new(name: "The Pink Door", address: "1919 Post Alley, Seattle, WA 98101, USA") #Italian _________________________________________________________________ 25
seeds << Restaurant.new(name: "Japonessa", address: "1400 1st Avenue, Seattle, WA 98101, USA") #Japanese Sushi, _____________________________________________________________ 26
seeds << Restaurant.new(name: "Thai Tom", address: "4543 University Way Northeast, Seattle, WA 98105, USA") #Thai ___________________________________________________________ 27
seeds << Restaurant.new(name: "Portage Bay Cafe & Catering", address: "4130 Roosevelt Way Northeast, Seattle, WA 98105, USA") #American, Breakfast & Brunch _________________ 28
seeds << Restaurant.new(name: "Facing East", address: "1075 Bellevue Way Northeast, Bellevue, WA 98004, USA") #Taiwanese Chinese ____________________________________________ 29
seeds << Restaurant.new(name: "Red Mill Burgers", address: "312 North 67th Street, Seattle, WA 98103, USA") #Burgers ________________________________________________________ 30
seeds << Restaurant.new(name: "Salty's on Alki Beach", address: "1936 Harbor Ave Southwest, Seattle, WA 98126, USA") #Seafood, Breakfast & Brunch Steakhouse_________________ 31
seeds << Restaurant.new(name: "Beth's Cafe", address: "7311 Aurora Avenue North, Seattle, WA 98103, USA") #American, Breakfast & Brunch _____________________________________ 32
seeds << Restaurant.new(name: "John Howie Steak Restaurant", address: "11111 Northeast 8th Street, Bellevue, WA 98004, USA") #Steakhouse, American __________________________ 33
seeds << Restaurant.new(name: "Kukai Ramen & Izakaya Bellevue", address: "14845 Main Street, Bellevue, WA 98007, USA") #Japanese ____________________________________________ 34
seeds << Restaurant.new(name: "Bai Tong Thai Restaurant", address: "460 106th Avenue Northeast, Bellevue, WA 98004, USA") #Thai _____________________________________________ 35
seeds << Restaurant.new(name: "Sushi Maru", address: "205 105th Avenue Northeast, Bellevue, WA 98004, USA") #Japanese Sushi _________________________________________________ 36
seeds << Restaurant.new(name: "Sushi Land", address: "138 107th Avenue Northeast, Bellevue, WA 98004, USA") #Japanese Sushi _________________________________________________ 37
seeds << Restaurant.new(name: "Mod Pizza", address: "317 Bellevue Way Northeast, Bellevue, WA 98004, USA") #Pizza ___________________________________________________________ 38
seeds << Restaurant.new(name: "Chipotle Mexican Grill", address: "10503 Northeast 4th Street, Bellevue, WA 98004, USA") #Mexican, Burritos, Tacos ___________________________ 39
seeds << Restaurant.new(name: "Musashi's", address: "3720 Factoria Boulevard Southeast, Bellevue, WA 98006, USA") #Japanese Sushi ___________________________________________ 40
seeds << Restaurant.new(name: "I Love Pho", address: "3900 Factoria Boulevard Southeast, Bellevue, WA 98006, USA") #Vietnamese ______________________________________________ 41
seeds << Restaurant.new(name: "Teriyaki & More", address: "3080 148th Avenue Southeast, Bellevue, WA 98007, USA") #Japanese _________________________________________________ 42

#More Restaurants in San Francisco
seeds << Restaurant.new(name: "Show Dogs", address: "1020 Market Street, San Francisco, CA 94102, USA") #Hot Dogs, Sandwiches _______________________________________________ 43
seeds << Restaurant.new(name: "Tú Lan", address: "8 6th Street, San Francisco, CA 94103, USA") #Vietnamese __________________________________________________________________ 44
seeds << Restaurant.new(name: "Homeskillet", address: "1001 Market Street, San Francisco, CA 94103, USA") #American, Brunch & Breakfast, Burgers ____________________________ 45
seeds << Restaurant.new(name: "Machine Coffee & Deli", address: "1024 Market Street, San Francisco, CA 94102, USA") #Cafes, Delis ___________________________________________ 46
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")

#Restaurants in New Haven
# seeds << Restaurant.new(name: "Frank Pepe Pizzeria Napoletana", address: "157 Wooster Street, New Haven, CT 06511, USA") #Italian, Pizza ____________________________________ #63
# seeds << Restaurant.new(name: "Louis' Lunch", address: "263 Crown Street, New Haven, CT 06511, USA") #American, Burgers _____________________________________________________ #64
# seeds << Restaurant.new(name: "Modern Apizza", address: "874 State Street, New Haven, CT 06511, USA") #Pizza, Sandwiches ____________________________________________________ #65
# seeds << Restaurant.new(name: "Miya's Sushi", address: "68 Howe Street, New Haven, CT 06511, USA") #Sushi, Japanese _________________________________________________________ #66
# seeds << Restaurant.new(name: "Prime 16", address: "172 Temple Street, New Haven, CT 06510, USA") #American, Burgers, Gastropub _____________________________________________ #67
# seeds << Restaurant.new(name: "Caseus Fromagerie & Bistro", address: "93 Whitney Avenue, New Haven, CT 06510, USA") #American _______________________________________________ #68
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")
# seeds << Restaurant.new(name: "Paseo", address: "4225 Fremont Avenue North, Seattle, WA 98103, USA")




seeds.each do |seed|
  seed.save
  sleep(1)
end
#Categories
Category.create(name: "sandwiches")         #1
Category.create(name: "cajun")              #2
Category.create(name: "french")             #3
Category.create(name: "soul food")          #4
Category.create(name: "burmese")            #5  
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
Category.create(name: "taiwanese")          #33
Category.create(name: "dim sum")            #34
Category.create(name: "cuban")              #35
Category.create(name: "steakhouse")         #36
Category.create(name: "thai")               #37
Category.create(name: "hotdogs")

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

RestaurantCategory.create(restaurant_id: 21, category_id: 1) #Paseo - Sandwiches
RestaurantCategory.create(restaurant_id: 21, category_id: 35) #Paseo - Cuban
RestaurantCategory.create(restaurant_id: 22, category_id: 26) #Umi Sake House - Japanese
RestaurantCategory.create(restaurant_id: 22, category_id: 27) #Umi Sake House - Sushi
RestaurantCategory.create(restaurant_id: 23, category_id: 2) #Toulouse Petit - Cajun
RestaurantCategory.create(restaurant_id: 23, category_id: 12) #Toulouse Petit - Breakfast & Brunch
RestaurantCategory.create(restaurant_id: 24, category_id: 6) #Din Tai Fung - Chinese
RestaurantCategory.create(restaurant_id: 24, category_id: 33) #Din Tai Fung - Taiwanese
RestaurantCategory.create(restaurant_id: 24, category_id: 34) #Din Tai Fung - Dim Sum
RestaurantCategory.create(restaurant_id: 25, category_id: 21) #The Pink Door - Italian
RestaurantCategory.create(restaurant_id: 26, category_id: 26) #Japonessa - Japanese
RestaurantCategory.create(restaurant_id: 26, category_id: 27) #Japonessa - Sushi
RestaurantCategory.create(restaurant_id: 27, category_id: 37) #Thai Tom - Thai
RestaurantCategory.create(restaurant_id: 28, category_id: 12) #Portage Bay Cafe & Catering - Breakfast & Brunch
RestaurantCategory.create(restaurant_id: 28, category_id: 7) #Portage Bay Cafe & Catering - American
RestaurantCategory.create(restaurant_id: 29, category_id: 33) #Facing East - Taiwanese
RestaurantCategory.create(restaurant_id: 29, category_id: 6) #Facing East - Chinese
RestaurantCategory.create(restaurant_id: 30, category_id: 25) #Red Mill - Burgers
RestaurantCategory.create(restaurant_id: 31, category_id: 19) #Salty's on Alki Beach - Seafood
RestaurantCategory.create(restaurant_id: 31, category_id: 12) #Salty's on Alki Beach - Breakfast & Brunch
RestaurantCategory.create(restaurant_id: 31, category_id: 36) #Salty's on Alki Beach - Steakhouse
RestaurantCategory.create(restaurant_id: 32, category_id: 7) #Beth's - American
RestaurantCategory.create(restaurant_id: 32, category_id: 12) #Beth's - Breakfast & Brunch
RestaurantCategory.create(restaurant_id: 33, category_id: 12) #John Howie Steak Restaurant - American
RestaurantCategory.create(restaurant_id: 33, category_id: 36) #John Howie Steak Restaurant - Steakhouse
RestaurantCategory.create(restaurant_id: 34, category_id: 26) #Kukai Ramen & Izakaya Bellevue - Japanese
RestaurantCategory.create(restaurant_id: 35, category_id: 37) #Bai Tong Thai Restaurant - Thai
RestaurantCategory.create(restaurant_id: 36, category_id: 26) #Sushi Maru - Japanese
RestaurantCategory.create(restaurant_id: 36, category_id: 27) #Sushi Maru - Sushi
RestaurantCategory.create(restaurant_id: 37, category_id: 26) #Sushi Land - Japanese
RestaurantCategory.create(restaurant_id: 37, category_id: 27) #Sushi Land - Sushi
RestaurantCategory.create(restaurant_id: 38, category_id: 22) #Mod Pizza - Pizza
RestaurantCategory.create(restaurant_id: 39, category_id: 14) #Chipotle Mexican Grill - Mexican
RestaurantCategory.create(restaurant_id: 39, category_id: 16) #Chipotle Mexican Grill - Burritos
RestaurantCategory.create(restaurant_id: 39, category_id: 15) #Chipotle Mexican Grill - Tacos
RestaurantCategory.create(restaurant_id: 40, category_id: 26) #Musashi's - Japanese
RestaurantCategory.create(restaurant_id: 40, category_id: 27) #Musashi's - Sushi
RestaurantCategory.create(restaurant_id: 41, category_id: 20) #I Love Pho - Vietnamese
RestaurantCategory.create(restaurant_id: 42, category_id: 26) #Teriyaki & More - Japanese

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
RestaurantCategory.create(restaurant_id: 21, category_id: 32)
RestaurantCategory.create(restaurant_id: 22, category_id: 32)
RestaurantCategory.create(restaurant_id: 23, category_id: 32)
RestaurantCategory.create(restaurant_id: 24, category_id: 32)
RestaurantCategory.create(restaurant_id: 25, category_id: 32)
RestaurantCategory.create(restaurant_id: 26, category_id: 32)
RestaurantCategory.create(restaurant_id: 27, category_id: 32)
RestaurantCategory.create(restaurant_id: 28, category_id: 32)
RestaurantCategory.create(restaurant_id: 29, category_id: 32)
RestaurantCategory.create(restaurant_id: 30, category_id: 32)
RestaurantCategory.create(restaurant_id: 31, category_id: 32)
RestaurantCategory.create(restaurant_id: 32, category_id: 32)
RestaurantCategory.create(restaurant_id: 33, category_id: 32)
RestaurantCategory.create(restaurant_id: 34, category_id: 32)
RestaurantCategory.create(restaurant_id: 35, category_id: 32)
RestaurantCategory.create(restaurant_id: 36, category_id: 32)
RestaurantCategory.create(restaurant_id: 37, category_id: 32)
RestaurantCategory.create(restaurant_id: 38, category_id: 32)
RestaurantCategory.create(restaurant_id: 39, category_id: 32)
RestaurantCategory.create(restaurant_id: 40, category_id: 32)
RestaurantCategory.create(restaurant_id: 41, category_id: 32)
RestaurantCategory.create(restaurant_id: 42, category_id: 32)

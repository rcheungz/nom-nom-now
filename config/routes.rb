NomNom::Application.routes.draw do
   root to: "static_pages#root"
   # root to: "sessions#new"

    resources :users, only: [:new, :create]
    resource :session, only: [:new, :create, :destroy]
 
    namespace :api, defaults: { format: :json } do
      resources :restaurants, only: [:show, :index]
      resources :reviews
    end
end

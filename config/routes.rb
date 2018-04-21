Rails.application.routes.draw do
  namespace :api do
    resources :events
    resources :people
end
end

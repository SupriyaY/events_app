Rails.application.routes.draw do
  namespace :api do
    resources :events do
      resources :assistances
end
end
namespace :api do
    resources :people do
      resources :assistances


end
end
end
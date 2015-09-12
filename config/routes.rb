Rails.application.routes.draw do

  get '/robots.txt' => 'welcome#robots'

  root 'welcome#index'

end

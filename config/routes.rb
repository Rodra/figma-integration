Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      # design endpoints
      get 'buttons', action: :buttons, controller: 'design'
      get 'colors', action: :colors, controller: 'design'
      get 'typographies', action: :typographies, controller: 'design'
      get 'badges', action: :badges, controller: 'design'
      get 'alerts', action: :alerts, controller: 'design'
    end
  end

  get '*path', to: 'application#fallback_index_html', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end

namespace :setup do
  task :postgres do
    exec 'docker-compose up -d postgres'
  end

  task :database do
    exec 'bin/rails db:setup'
  end
end

namespace :start do
  task :development do
    exec 'heroku local -f Procfile.dev'
  end

  desc 'Start production server'
  task :production do
    exec 'NPM_CONFIG_PRODUCTION=true yarn postinstall && heroku local'
  end
end

desc 'Setup postgres container'
task postgres: 'setup:postgres'

desc 'Setup development database'
task database: 'setup:database'

desc 'Start development server'
task start: 'start:development'

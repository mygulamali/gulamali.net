def build(options='')
  "rm -rf build && bundle exec middleman build #{options}"
end

def rsync(domain)
  "rsync -rtvz --delete build/ mygulamali@gulamali.net:~/#{domain}/"
end

task :default => :build

desc "Initialise the vendor stylesheets"
task :init do
  directory = 'source/stylesheets'

  Dir.chdir directory  do
    sh 'bundle exec bourbon install'
    sh 'bundle exec neat install'
    sh 'bundle exec bitters install'
  end
end

desc "Build site using Middleman"
task :build do
  sh build '--clean'
end

desc "Deploy to live website"
task :deploy => :build do
  sh rsync 'gulamali.net'
end

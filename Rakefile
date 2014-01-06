# Scraped together with a little love from
# https://github.com/appden/appden.github.com/blob/master/Rakefile

def jekyll(options='')
  "rm -rf _site && bundle exec jekyll #{options}"
end

def sass(options='')
  "bundle exec scss --sass #{options} assets/_sass/style.sass:assets/css/style.css"
end

def rsync(domain)
  "rsync -rtvz --delete _site/ mygulamali@gulamali.net:~/#{domain}/"
end

task :default => :build

desc "Initialise the vendor stylesheets"
task :init do
  directory = 'assets/_sass/vendor'

  if not Dir.exists?(directory)
    Dir.mkdir directory
  end

  Dir.chdir directory  do
    sh 'bundle exec bourbon install'
    sh 'bundle exec neat install'
  end
end

desc "Build site using SASS and Jekyll"
task :build do
  sh sass '--update'
  sh jekyll 'build'
end

desc "Serve on localhost:4000 and watch"
task :serve do
  pids = [
    spawn(sass '--watch'),
    spawn(jekyll 'serve --watch'),
  ]

  trap "INT" do
    Process.kill "INT", *pids
    exit 1
  end

  loop do
    sleep 1
  end
end

desc "Deploy to live website"
task :deploy => :build do
  sh rsync 'gulamali.net'
end

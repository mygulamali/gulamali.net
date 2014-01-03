# Scraped together with a little love from
# https://github.com/appden/appden.github.com/blob/master/Rakefile

def jekyll(options='')
  sh 'rm -rf _site'
  sh "bundle exec jekyll #{options}"
end

def rsync(domain)
  sh "rsync -rtvz --delete _site/ mygulamali@gulamali.net:~/#{domain}/"
end

desc "Build site using Jekyll"
task :build do
  jekyll 'build'
end

desc "Serve on localhost:4000 and watch"
task :serve do
  jekyll 'serve --watch'
end

desc "Deploy to live website"
task :deploy => :build do
  rsync 'gulamali.net'
end

@site_title = 'Murtaza Gulamali'

configure :development do
  activate :livereload
end

helpers do
  def home_page_link
    (current_page.url == '/') ? @site_title : link_to(@site_title, '/')
  end
end

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

ignore 'publications/abstracts/*'
ignore 'publications/citations/*'

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-26765451-1'
  ga.domain_name = 'gulamali.net'
  ga.development = false
  ga.minify = true
end

activate :deploy do |deploy|
  deploy.method = :rsync
  deploy.host = 'gulamali.net'
  deploy.path = '/home/public'
  deploy.clean = true
  deploy.build_before = true
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

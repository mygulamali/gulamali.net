activate :dotenv

require "lib/custom_helpers"
helpers CustomHelpers

config[:site_title] = ENV["SITE_TITLE"]

config[:css_dir] = "assets/stylesheets"
config[:js_dir] = "assets/javascripts"
config[:images_dir] = "assets/images"
config[:fonts_dir] = "assets/fonts"

ignore "assets/favicon/*"
ignore "publications/abstracts/*"
ignore "publications/citations/*"

activate :google_analytics do |ga|
  ga.domain_name = ENV["GA_DOMAIN_NAME"]
  ga.tracking_id = ENV["GA_TRACKING_ID"]
  ga.minify = true
end

activate :deploy do |deploy|
  deploy.deploy_method = :rsync
  deploy.user = ENV["RSYNC_USER"]
  deploy.host = ENV["RSYNC_HOST"]
  deploy.port = ENV["RSYNC_PORT"]
  deploy.path = ENV["RSYNC_PATH"]

  deploy.clean = true
  deploy.build_before = true
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

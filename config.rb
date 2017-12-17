require "lib/custom_helpers"
helpers CustomHelpers

config[:site_title] = "Murtaza Gulamali"

config[:css_dir] = "assets/stylesheets"
config[:js_dir] = "assets/javascripts"
config[:images_dir] = "assets/images"
config[:fonts_dir] = "assets/fonts"

ignore "publications/abstracts/*"
ignore "publications/citations/*"

activate :google_analytics do |ga|
  ga.tracking_id = "UA-26765451-1"
  ga.domain_name = "gulamali.net"
  ga.minify = true
end

activate :deploy do |deploy|
  deploy.deploy_method = :rsync
  deploy.host = "gulamali.net"
  deploy.path = "/home/public"
  deploy.clean = true
  deploy.build_before = true
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

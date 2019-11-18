activate :dotenv

require "lib/custom_helpers"
helpers CustomHelpers

config[:site_title] = ENV["SITE_TITLE"]

config[:css_dir] = "assets/stylesheets"
config[:js_dir] = "assets/javascripts"
config[:images_dir] = "assets/images"
config[:fonts_dir] = "assets/fonts"

ignore "publications/abstracts/*"
ignore "publications/citations/*"

activate :blog do |blog|
  blog.layout = "layouts/publications"
  blog.permalink = "{year}/{title}.html"
  blog.prefix = "publications"
end

activate :external_pipeline,
  name: :webpack,
  command: build? ?
    "npx webpack --bail -p" :
    "npx webpack --watch -d --progress --color",
  source: "tmp/webpack",
  latency: 1

activate :google_analytics do |ga|
  ga.domain_name = ENV["GA_DOMAIN_NAME"]
  ga.tracking_id = ENV["GA_TRACKING_ID"]
  ga.minify = true
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

configure :development do
  activate :livereload
end

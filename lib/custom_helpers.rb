module CustomHelpers
  def site_title
    config[:site_title]
  end

  def page_title
    return site_title unless current_page.data.title
    "#{current_page.data.title} < #{site_title}"
  end

  def home_page_link
    (current_page.url == "/") ? site_title : link_to(site_title, "/")
  end
end

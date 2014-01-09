module Jekyll
  module TimeTagFilter
    def date_to_time_tag(date, format="%d %b %Y")
      t = time(date)
      datetime_attr = t.xmlschema
      title_attr = t.strftime("%d %b %Y")
      "<time datetime=\"#{datetime_attr}\" title=\"#{title_attr}\">#{t.strftime(format)}</time>"
    end
  end
end

Liquid::Template.register_filter(Jekyll::TimeTagFilter)

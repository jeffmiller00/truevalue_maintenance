$( document ).ready(function() {
  $("#rss-feed").rss("http://us14.campaign-archive.com/feed?u=94b3666801afda9726b39f45b&id=4e2c69e92a",
    {
      entryTemplate:'<li><a href="{url}" target="_blank">{teaserImage}</a>&nbsp;&nbsp;<a href="{url}" target="_blank">{title}</a></li>'
  });
});
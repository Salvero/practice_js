
// Sticky
$(document).ready(function(){
  $(".header").sticky();
});

// Parallax
$('.parallax-window').parallax({
  data-image-src=<%= asset_path "204H.jpg" %>
});

$('.parallax-window2').parallax({
  data-image-src=<%= asset_path "machine.jpg" %>
});

$('.projectsLabel a').simpleLightbox(options);

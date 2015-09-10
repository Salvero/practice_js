
// Sticky
$(document).ready(function(){
  $(".header").sticky();
});

// Parallax
$(document).ready(function(){
  $('.parallax-window').parallax({
    data-image-src=<%= asset_path "204H.jpg" %>
  });
});

$(document).ready(function(){
  $('.parallax-window2').parallax({
    data-image-src=<%= asset_path "machine.jpg" %>
  });
});


// Simple Lightbox

// $('.thumbnail').simpleLightbox(options);

// var gallery = $('.thumbnail img').simpleLightbox();
//
// gallery.next();

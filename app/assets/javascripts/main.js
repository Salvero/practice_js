
// Sticky
$(document).ready(function(){
  $(".header").sticky();
});

// Parallax
$(document).ready(function(){
  $('.parallax-window').parallax({
    data-image-src=<%= asset_path "204H-532d19052550b0b1f25a0b069d4b69a848c8429a0e999f62dbc2c14a273b8399.jpg" %>
  });
});

$(document).ready(function(){
  $('.parallax-window2').parallax({
    data-image-src=<%= asset_path "machine-038c2f0e13814aa23b155d4d426a71d718db37da7a6de00c1f908d08c5452463.jpg" %>
  });
});


// Simple Lightbox

// $('.thumbnail').simpleLightbox(options);

// var gallery = $('.thumbnail img').simpleLightbox();
//
// gallery.next();

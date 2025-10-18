$.get("assets/components/preloader.html", function(data) {
    $('preloader').prepend(data);   
});

$.get("assets/components/head.html", function(data) {
    $('head').prepend(data);   
});

$.get("assets/components/aside.html", function(data) {
    $('aside').prepend(data);   
});

$.get("assets/components/header.html", function(data) {
 
    $('header').html(data); 
   
});
$.get("assets/components/footer.html", function(data) {
    $('footer').prepend(data);   
});
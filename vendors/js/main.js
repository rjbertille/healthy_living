/* nav */
$("#toggle").click(function(){
    $(this).toggleClass("on");
    setTimeout(function(){
        window.location.href = "menu.html";
    }, 350);

});

/* menu_content */
$("#title").hover(function(){
    $(this).animate({ width:"200px" });
},function(){
    $(this).animate({ width:"150px" });
});

$("#title1").hover(function() {
    $(this).animate({ width:"200px"});
}, function() {
   $(this).animate({ width:"150px"});

});

$("#title2").hover(function() {
    $(this).animate({ width:"200px"});
},function(){
  $(this).animate({width:"150px"});
});

$("#title3").hover(function(){
    $(this).animate({ width:"200px"});
}, function(){
    $(this).animate({ width:"150px"});
});

$("#title4").hover(function() {
    $(this).animate({ width:"200px"});
}, function() {
    $(this).animate({ width:"150px"});
});


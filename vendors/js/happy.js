/* Prepare the data array with img urls */
$(function() {
    var dataArray=new Array();
    dataArray[0]="images/think.png";
    dataArray[1]="images/body.jpg";
    dataArray[2]="images/yourself.jpeg";



/* Start with id=0 after 5 seconds */
var thisId=0;

window.setInterval(function(){
    $('#cf_img').attr('src', dataArray[thisId]);
    /* Increment data array id */
    thisId++;
    /* Repeat from start */
    if(thisId==3) thisId=0; 
    },2000);

});
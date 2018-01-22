/*$(document).ready(function() {
    setTimeout(function() {
        $(".content").fadeOut(1500);
    },3000);
});*/

function doDelay(wait) {
    var date = new Date();
    var startDate = date.getTime();
    var a = 1;
    var b = 0;
    while (a !== 0) {
        date = new Date();
        if ((date.getTime() - startDate) >= wait) {
            a = 0;
        }
        b++;
    }
  /*location.href="../views/foodmap.html";*/
}

doDelay(30000)*/

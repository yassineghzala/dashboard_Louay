// $(document).ready(function(){
// 	$('div#loading').removeAttr('id');
// });
let preloader = document.getElementById("loading");
// window.addEventListener('load', function(){
// 	preloader.style.display = 'none';
// 	})

function myFunction() {
    preloader.style.display = 'none';
};
$(document).ready(function () {
    $("#TestS").change(function () {
        var name = $("#TestS").val();
        $(".details_det_of_tasks").hide(); $(".testHR").hide();
        $("." + name).show();
        $(".details_det_of_tasks").removeClass("selected");
        $("." + name).addClass("selected");
        $("#svg").addClass("selected");
    })
})
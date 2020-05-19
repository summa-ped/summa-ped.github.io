function changeLang(lang){
    if (lang == 0){
        $("#en").removeClass("active");
        $("#pt").addClass("active");
    }else{
        $("#pt").removeClass("active");
        $("#en").addClass("active");
    }
}

$(".parallax").height($(window).height());
$(".menuHid").height($(window).height());
function openContact(){
    $("#openContact").fadeOut("slow", function () {
        $("#sendMsg").fadeIn();
        $("#txtArea").fadeIn();
    });
    
}
function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
function sendMsg(){
    $("#sendMsg").fadeOut("slow");
    $("#txtArea").fadeOut("slow", function () {
        $("#openContact").fadeIn();
    });
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        openInNewTab("https://api.whatsapp.com/send?text="+$("#txtArea").val()+"&phone=5535999144165");
    }else{
        openInNewTab("https://web.whatsapp.com/send?text="+$("#txtArea").val()+"&phone=5535999144165");
    }
}

$("#btn").click(function (){
    $(".menuHid").fadeToggle("slow", function () {
     
    });
});
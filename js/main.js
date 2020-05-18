function changeLang(lang){
    if (lang == 0){
        $("#en").removeClass("active");
        $("#pt").addClass("active");
    }else{
        $("#pt").removeClass("active");
        $("#en").addClass("active");
    }
}
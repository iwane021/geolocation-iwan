var BLOG_LOADED=false;
$(function(){
    setTimeout(function(){
        loadPage();
    }, 500);


    // online & offline detection
    if(window.navigator.onLine){
       $("#offline-notification").addClass('online');
    }
    else{
        $("#offline-notification").removeClass('online');
    }
    
    $(window).on('online', function(){
       $("#offline-notification").addClass('online');
       loadPage(); //in case saat offline, blog blm diload dan koneksi internet sudah kembali
    });
    
    $(window).on('offline', function(){
        $("#offline-notification").removeClass('online');
    });
    
});

function loadPage(){
    if(window.BLOG_LOADED || !window.navigator.onLine){
        return; //gausa load apa2 kalau blog sudah diload atau masih offline
    }
}
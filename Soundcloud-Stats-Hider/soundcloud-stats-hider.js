let x = 0;

startHiding();
document.addEventListener("click", function(){
    clearInterval(startInterval);
    startHiding();
});
document.addEventListener("scroll", function(){
    clearInterval(startInterval);
    startHiding();
});
document.addEventListener("mousemove", function(){
    clearInterval(startInterval);
    startHiding();
});

function startHiding(){
    x=0;
    startInterval = setInterval(() => {
        hideStats();
        console.log("Waiting for Soundcloud Stats..." + x);
    }, 10);
}

function hideStats(){

    var stats = document.getElementsByClassName('soundStats');
    for (var i = 0; i < stats.length; i ++) {
        stats[i].style.display = 'none';
    }
    var ministats = document.getElementsByClassName('sc-ministats');
    for (var i = 0; i < ministats.length; i ++) {
        ministats[i].style.display = 'none';
    }
    var likebutton = document.getElementsByClassName('sc-button-like');
    for (var i = 0; i < likebutton.length; i ++) {
        likebutton[i].textContent = '';
    }
    var rpbuttons = document.getElementsByClassName('sc-button-repost');
    for (var i = 0; i < rpbuttons.length; i ++) {
        rpbuttons[i].textContent = '';
    }
    var insights = document.getElementsByClassName('insightsSidebarModule__plays');
    for (var i = 0; i < insights.length; i ++) {
        insights[i].textContent = '';
    }
    var followers = document.getElementsByClassName('infoStats__value');
    for (var i = 0; i < followers.length; i ++) {
        followers[i].textContent = '';
    }
    var sbheader = document.getElementsByClassName('sidebarHeader__actualTitle');
    for (var i = 0; i < sbheader.length; i ++) {
        sbheader[i].textContent = '';
    }
    
    x++;

    if (x>80){
        clearInterval(startInterval);
    }
  
}




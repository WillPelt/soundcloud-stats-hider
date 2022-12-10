//document.getElementsByClassName('soundStats')[0].style.visibility = 'hidden';
var stats = document.getElementsByClassName('soundStats');

for (var i = 0; i < stats.length; i ++) {
    stats[i].style.display = 'none';
}

var sidebar= document.getElementsByClassName('sidebarHeader__title');

for (var i = 0; i < sidebar.length; i ++) {
    sidebar[i].style.display = 'none';
}
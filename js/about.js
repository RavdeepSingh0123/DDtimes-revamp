let curSelectedNav = null;
function onAboutClick(id) {
    // fetchNews(id);
     const navItem = document.getElementById(id);
     curSelectedNav?.classList.remove("active");
     curSelectedNav = navItem;
     curSelectedNav.classList.add("active");
 }
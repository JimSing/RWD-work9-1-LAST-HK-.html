const headerMenu = document.querySelector(".header_menu");

const minlist = document.querySelector(".header_menu_minlist a");

const Showmenu = function(e){
    e.preventDefault();
    
    headerMenu.classList.toggle("showmenu");
}

minlist.addEventListener("click",Showmenu);


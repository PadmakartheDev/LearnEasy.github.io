var sidebarOpen = false;

function sidebar() {
let sidebar = document.getElementById('sidebar');
let burgerline1 = document.getElementById('line1');
let burgerline2 = document.getElementById('line2');
let burgerline3 = document.getElementById('line3');

sidebar.classList.toggle('nav-active');
burgerline1.classList.toggle('line1-open');
burgerline2.classList.toggle('line2-open');
burgerline3.classList.toggle('line3-open');

    // if(sidebarOpen === false){
    //     // sidebar.style.transform = "translateX(0%)"
    //     // sidebar.style.display = "block"
    //     // sidebar.style.width = "50%";
    //     sidebar.classList.toggle('nav-active');
    //     sidebarOpen = true;
    // } else if(sidebarOpen === true){
    //     // sidebar.style.transform = "translateX(-100%)"
    //     // sidebar.style.display = "none";

    //     sidebarOpen = false;
    //     sidebar.classList.toggle('nav-active');
        
    // }
}




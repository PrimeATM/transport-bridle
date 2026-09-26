document.querySelectorAll('[data-placeholder]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();alert('This button is ready to connect to your store/cart when the final selling details are added.')}));

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav").forEach(function(nav){
    const button = nav.querySelector(".menu-toggle");
    const menu = nav.querySelector(".links");
    if (!button || !menu) return;
    button.addEventListener("click", function () {
      const open = menu.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });
    menu.querySelectorAll("a").forEach(function(link){
      link.addEventListener("click", function(){
        menu.classList.remove("open");
        button.setAttribute("aria-expanded","false");
        button.setAttribute("aria-label","Open navigation menu");
      });
    });
  });
});

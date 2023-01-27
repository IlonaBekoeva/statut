let icon_burger = $('.burger_icon')[0];
let menu_burger = $('.burger_menu')[0];

console.log(icon_burger);
console.log(menu_burger);

icon_burger.onclick = function () {
    menu_burger.classList.toggle('hidden');
}
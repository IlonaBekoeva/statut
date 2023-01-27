let dropDownButtons = $('.drop-down__button');
let dropDownMenus = $('.drop-down');

for (let i = 0; i < dropDownButtons.length; i++) {
    dropDownButtons[i].onclick = function () {
        dropDownMenus[i].classList.toggle('hidden');
    }
}
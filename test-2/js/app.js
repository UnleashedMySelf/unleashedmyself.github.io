const allItems = document.querySelectorAll('.form__item');
const licenseItemList = [...document.querySelectorAll('.form__item input')];
const selected = document.querySelector('.selected-plan');
let countLicenses = document.getElementById('licenseCount');
let totalPrice = document.querySelector('.total-cost');
let total = 0;

console.log(licenseItemList);
licenseItemList.forEach (radCheck => {
    radCheck.addEventListener('click', (e) => {
        allItems.forEach (item => {
            item.classList.remove("active");
        }) 
        e.target.parentElement.classList.add("active");
        let planIndex = licenseItemList.indexOf(radCheck, 0);
        total = e.target.value * countLicenses.value;
        selected.textContent = '#' + (planIndex + 1);
        totalPrice.textContent = '$ ' + total;
    })
    countLicenses.addEventListener('change', (e) => {
        if (radCheck.checked) {
            total = (countLicenses.value >= 101) ? radCheck.value * (countLicenses.value = 100) : radCheck.value * countLicenses.value;
            totalPrice.textContent = '$ ' + total;
        }
    })
});
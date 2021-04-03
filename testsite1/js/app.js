// Константа стоимости доставки и пер. комиссии (комиссия = 0 при пустой корзине)
const shippingCost = 0
let taxCost = 10

// Константы товаров/кнопок
const allItems = document.querySelector('.product-cart__items')
const productItemList = [...document.querySelectorAll('.product-cart__item')]
const inputChange = document.querySelectorAll('.product-cart__item-input')
const itemPrice = document.querySelectorAll('.product-cart__item-total-price')
const btnDeleteItem = document.querySelectorAll('.delete-item')
const btn = document.querySelector('.checkout_btn')
const inputValue = (input) => Number(input.value) * Number(input.dataset.price)

// Основная функция подсчёта финальной суммы за товары 
const main = () => {
    let totalPrice = 0
    productItemList.forEach((productItem) => {
        totalPrice += inputValue(productItem.querySelector('.product-cart__item-input'))     
        document.querySelector('.subTotal').textContent = ': ' + '$ ' + totalPrice
    })
    if (productItemList.length <= 0) {
        document.querySelector('.subTotal').textContent = ': $ 0'
        allItems.innerHTML += `<h3 class="empty"> Empty :(<h3>`
        document.querySelector('.taxCost').textContent = ': $ 0'
        taxCost = 0
    }
    totalPrice += taxCost + shippingCost
    document.querySelector('.totalPrice').textContent = ': ' + '$ ' + totalPrice
} 
main()

// Функция подсчёта SubTotal для каждого из товаров и проверка, чтобы товаров не было меньше 1
const subTotal = () => {
    inputChange.forEach(inputChangeVal => {
        inputChangeVal.addEventListener('change', (e) => {
            const targetItem = e.target
            if (targetItem.value <= 0) {
                targetItem.value = 1
            }
            targetItem.nextElementSibling.textContent = '$ ' + Number(targetItem.value) * Number(targetItem.dataset.price)
            main()
            e.preventDefault()
        })
    })
}
subTotal()

// Цикл обработки удаления товаров по кнопке "удалить"
btnDeleteItem.forEach(btnDel => {
    btnDel.addEventListener('click', () => {
        const indexItem = productItemList.indexOf(btnDel.parentElement)
        console.log(productItemList[indexItem]);
        productItemList[indexItem].remove()
        productItemList.splice(indexItem, 1)
        main()
        subTotal()  
    })
})
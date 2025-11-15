const cart = () => {
    const cartBtn = document.getElementById('cart')
const cartModal = document.querySelector('.cart')
const closeBtn = cartModal.querySelector('.cart-close')
const openCart = () => {
    cartModal.style.display = 'flex'
}
const closeCart = () => {
    cartModal.style.display = 'none'
}

cartBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
}

export default cart
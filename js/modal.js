/* const contenedorModal = document.getElementsByID('comprar')[0]
const botonAbrir = document.getElementById('btncarrito')
const botonCerrar = document.getElementById('cerrarCarrito')
const modalCarrito = document.getElementsByClassName('modalCarrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('show')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('show')
})

contenedorModal.addEventListener('click', ()=>{
    // contenedorModal.classList.toggle('modal-active')
    botonCerrar.click()
})

modalCarrito.addEventListener('click', (event)=>{
    // console.log(event)
    event.stopPropagation()
}) */
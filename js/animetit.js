window.onscroll = () => {
    myFunction()
    myFunction2()
}

var elemento = document.getElementById("cat")
var elementopedido = document.getElementById("opavei")

var sticky = elemento.offsetTop
var stickypedido = elementopedido.offsetTop

function myFunction() {
    if (window.pageYOffset > sticky) {
        elemento.classList.add("titf2")
    } else {
        elemento.classList.remove("titf2")
    }
}

function myFunction2() {
    if (window.pageYOffset > stickypedido) {
        elementopedido.classList.add("titf2")
    } else {
        elementopedido.classList.remove("titf2")
    }
}
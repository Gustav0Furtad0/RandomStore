const camisa = $(".btmais")
const btadd = $(".btaddcar")
const pedidoarea = $('#pedidodesc')
var pedidoqtd = 0;

camisa.on( "click", function(e) {
    if($(this).siblings('.addcarrinho').is(":hidden")) {
        $(this).siblings('.addcarrinho').show()
        $(this).children('a').children('span').text('clear')
    }else if($(this).siblings('.addcarrinho').is(":visible")) {
        $(this).siblings('.addcarrinho').hide()
        $(this).children('a').children('span').text('add')
    }
    e.preventDefault()
})

btadd.on('click', function(e) {
    console.log("teste")
    e.preventDefault()
    let tam = $(this).siblings('#select').val()
    let qtd = $(this).siblings('#qtd').val()
    let nome = $(this).parent('.addcarrinho').siblings('#nomeCamisa').text()
    console.log(tam, qtd, nome)
    pedidoqtd++
    pedidoarea.append(`${pedidoqtd} - Nome: ${nome}, Quantidade: ${qtd}, Tamanho: ${tam}.\n`)
    $(this).parent('.addcarrinho').hide()
})
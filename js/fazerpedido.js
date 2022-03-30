function fazerpedido() {
    const nome = document.getElementById('pedidonome');
    const desc = document.getElementById('pedidodesc');
    const obse = document.getElementById('obse');
    if(nome.value == null || desc.value == null) {
        return alert("Preencha seu nome e a descrição do pedido de maneira correta")
    }
    var nome2 = encodeURIComponent(nome.value);
    var desc2 = encodeURIComponent(desc.value);
    var obse2 = encodeURIComponent(obse.value);
    var link = `https://api.whatsapp.com/send?phone=5532999994279&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20${nome2}.%0A%20${desc2}%0A%20${obse2}`;
    window.open(link);
}
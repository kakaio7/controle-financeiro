function puxarValores() {
    const nome = document.getElementById("name").value
    const valor = parseFloat(document.getElementById("valor").value)
    const escolha = document.getElementById("select").value
    let total = parseFloat(0)

    if(escolha == "add") {
        document.getElementById("tela").innerHTML += `<h1>${nome}</h1><p>+${valor}</p>`
        total += valor
        return total
    } else {    
        document.getElementById("tela").innerHTML += `<h1>${nome}</h1><p>-${valor}</p>`
        total -= valor
        return total
    }
}
let totalT = 0

play.addEventListener ("click", () => {
    let totalP = puxarValores()
    totalT += parseFloat(totalP)
    document.getElementById("totalT").innerHTML = `Total:${totalT}`
})
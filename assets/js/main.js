const NettoBrutto = document.getElementById("NettoZuBrutto")
const BruttoNetto = document.getElementById("BruttoZuNetto")
const steuerSatz19 = document.getElementById("steuersatz19")
const steuerSatz7 = document.getElementById("steuersatz7")
const number = document.getElementById("number")
const result = document.getElementById('result')
const resultWwst = document.getElementById('resultMwst')
const endBetrag = document.getElementById('endbetrag')
const textMwst = document.getElementById('textMwst')


let calc = () => {
    if (NettoBrutto.checked == true && steuerSatz19.checked == true) {
        result.innerHTML = (number.value * 1.19).toFixed(2).concat("€");
        resultWwst.innerHTML = (number.value * 0.19).toFixed(2).concat("€");
        endBetrag.innerHTML = "Bruttobetrag (Endpreis)"
    }

    else if (NettoBrutto.checked == false && steuerSatz19.checked == true) {
        result.innerHTML = (number.value / 1.19).toFixed(2).concat("€");
        resultWwst.innerHTML = (number.value / 1.19 * 0.19).toFixed(2).concat("€");
        endBetrag.innerHTML = "Nettobetrag"
    }

    else if (NettoBrutto.checked == true && steuerSatz7.checked == true) {
        result.innerHTML = (number.value * 1.07).toFixed(2).concat("€");
        resultWwst.innerHTML = (number.value * 0.07).toFixed(2).concat("€");
        endBetrag.innerHTML = "Bruttobetrag (Endpreis)"
    }

    else if (NettoBrutto.checked == false && steuerSatz7.checked == true) {
        result.innerHTML = (number.value / 1.07).toFixed(2).concat("€");
        resultWwst.innerHTML = (number.value / 1.07 * 0.07).toFixed(2).concat("€");
        endBetrag.innerHTML = "Nettobetrag"
    }
}

let text = () => {

    if (NettoBrutto.checked == true) {
        textMwst.innerHTML = ("Nettobetrag (Preis ohne Mehrwertsteuer) in Euro")
    } else {
        textMwst.innerHTML = ("Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro")
    }
}








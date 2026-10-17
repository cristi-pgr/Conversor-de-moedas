const buttonConvert = document.querySelector(".convert-button")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")
const coinTo = document.querySelector(".currency-select-to-convert")
const coinFrom = document.querySelector(".currency-select-from-convert")

const taxCoin = {
    Brasil: {
        Brasil: 1,
        Dolar: 0.19,
        Euro: 0.18,
        Iene: 29.23,
        Libra: 0.15,
        Franco: 0.17,
        Yuan: 1.36,
        SOL: 0.00098,
        XRP: 0.076,
        BTC: 0.0000024,
        ETH: 0.00008,
        BNB: 0.00027
    },
    Dolar: {
        Brasil: 5.25,
        Dolar: 1,
        Euro: 0.95,
        Iene: 153.50,
        Libra: 0.77,
        Franco: 0.89,
        Yuan: 7.12,
        SOL: 0.0097,
        XRP: 0.76,
        BTC: 0.000012,
        ETH: 0.00042,
        BNB: 0.0014
    },
    Euro: {
        Brasil: 5.50,
        Dolar: 1.05,
        Euro: 1,
        Iene: 161.50,
        Libra: 0.81,
        Franco: 0.94,
        Yuan: 7.49,
        SOL: 0.010,
        XRP: 0.80,
        BTC: 0.000013,
        ETH: 0.00044,
        BNB: 0.0015
    },
    Iene: {
        Brasil: 0.034,
        Dolar: 0.0065,
        Euro: 0.0062,
        Iene: 1,
        Libra: 0.0050,
        Franco: 0.0058,
        Yuan: 0.046,
        SOL: 0.000063,
        XRP: 0.0049,
        BTC: 0.00000008,
        ETH: 0.0000027,
        BNB: 0.0000091
    },
    Libra: {
        Brasil: 6.80,
        Dolar: 1.30,
        Euro: 1.23,
        Iene: 199.35,
        Libra: 1,
        Franco: 1.15,
        Yuan: 9.25,
        SOL: 0.013,
        XRP: 0.99,
        BTC: 0.000016,
        ETH: 0.00054,
        BNB: 0.0018
    },
    Franco: {
        Brasil: 5.90,
        Dolar: 1.12,
        Euro: 1.06,
        Iene: 172.47,
        Libra: 0.87,
        Franco: 1,
        Yuan: 8.00,
        SOL: 0.011,
        XRP: 0.85,
        BTC: 0.000014,
        ETH: 0.00047,
        BNB: 0.0016
    },
    Yuan: {
        Brasil: 0.74,
        Dolar: 0.14,
        Euro: 0.13,
        Iene: 21.56,
        Libra: 0.11,
        Franco: 0.125,
        Yuan: 1,
        SOL: 0.0014,
        XRP: 0.11,
        BTC: 0.0000017,
        ETH: 0.000059,
        BNB: 0.00020
    },
    SOL: {
        Brasil: 538.94,
        Dolar: 102.65,
        Euro: 97.76,
        Iene: 15757.38,
        Libra: 79.25,
        Franco: 91.35,
        Yuan: 730.87,
        SOL: 1,
        XRP: 78.03,
        BTC: 0.0012,
        ETH: 0.043,
        BNB: 0.146
    },
    XRP: {
        Brasil: 6.88,
        Dolar: 1.31,
        Euro: 1.25,
        Iene: 201.08,
        Libra: 1.01,
        Franco: 1.17,
        Yuan: 9.33,
        SOL: 0.0128,
        XRP: 1,
        BTC: 0.000015,
        ETH: 0.00055,
        BNB: 0.00187
    },
    BTC: {
        Brasil: 419019.87,
        Dolar: 79813.31,
        Euro: 76012.70,
        Iene: 12251343.10,
        Libra: 61596.16,
        Franco: 70997.77,
        Yuan: 568328.74,
        SOL: 777.86,
        XRP: 60846.36,
        BTC: 1,
        ETH: 33.52,
        BNB: 113.88
    },
    ETH: {
        Brasil: 12551.90,
        Dolar: 2390.84,
        Euro: 2276.98,
        Iene: 366994.05,
        Libra: 1844.75,
        Franco: 2126.33,
        Yuan: 1702.29,
        SOL: 2.33,
        XRP: 1821.57,
        BTC: 0.0298,
        ETH: 1,
        BNB: 3.41
    },
    BNB: {
        Brasil: 3726.22,
        Dolar: 709.76,
        Euro: 675.96,
        Iene: 108948.27,
        Libra: 547.49,
        Franco: 631.05,
        Yuan: 505.21,
        SOL: 6.91,
        XRP: 540.79,
        BTC: 0.00878,
        ETH: 0.293,
        BNB: 1
    }
};


function convertFromTo() {

    const inputValue = document.querySelector(".input-value").value
    const tax = taxCoin[coinFrom.value][coinTo.value]
    console.log(tax)
    const converted = inputValue * tax

    if (coinFrom.value == "Brasil") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(converted)
    }
    if (coinFrom.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-Us', {
            style: 'currency',
            currency: 'USD'
        }).format(converted)

    }
    if (coinFrom.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(converted)

    }

    if (coinFrom.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'GBP'
        }).format(converted)
    }
    if (coinFrom.value == "Franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'CHF'
        }).format(converted)

    }
    if (coinFrom.value == "Yuan") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'CNY'
        }).format(converted)

    }
    else {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 8
        }).format(converted)

    }

    if (coinTo.value == "Brasil") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(converted)
    }
    if (coinTo.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-Us', {
            style: 'currency',
            currency: 'USD'
        }).format(converted)

    }
    if (coinTo.value == "Iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(converted)

    }

    if (coinTo.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'GBP'
        }).format(converted)
    }
    if (coinTo.value == "Franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'CHF'
        }).format(converted)

    }
    if (coinTo.value == "Yuan") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'CNY'
        }).format(converted)

    }
    else {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 8
        }).format(converted)

    }

}




// mudança da moeda convertida
function eventConvertTo() {

    const wordConvertFrom = document.querySelector("#currencyname")
    const imgPaisToConvert = document.querySelector("#logo-coin-converted")
    wordConvertFrom.innerHTML = coinTo.value
    imgPaisToConvert.src = `./assets/Logo_coin/${coinTo.value}.png`

    convertFromTo()
}
// mudança da moeda que vai converter
function eventConvertFrom() {

    const wordConvertFrom = document.querySelector("#currencynamefrom")
    const imgPaisToConvert = document.querySelector("#logo-coin-from")
    wordConvertFrom.innerHTML = coinFrom.value
    imgPaisToConvert.src = `./assets/Logo_coin/${coinFrom.value}.png`

    convertFromTo()
}

buttonConvert.addEventListener("click", convertFromTo)
coinTo.addEventListener("change", eventConvertTo) // mudança da moeda convertida
coinFrom.addEventListener("change", eventConvertFrom)// mudança da moeda que vai converter

























































































/*
// mapeando tags
const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")
const currencySelectFromConvert = document.querySelector(".currency-select-from-convert")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const usdToday = 5.25
    const eurToday = 6.25
    const jpyToday = 0.032
    const gbpToday = 7.65
    const chfToday = 6.27
    const cnyToday = 0.76
    const solToday = 538.94
    const xrpToday = 6.88
    const btcToday = 419019.87
    const ethToday = 12551.90
    const bnbToday = 3726.22

    if (currencySelectToConvert.value == "US") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / usdToday)
    }
    if (currencySelectToConvert.value == "EUR") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrencyToConvert() {

    const currencyName = document.querySelector("#currencyname")
    const currencyImage = document.querySelector("#logo-coin-converted")

    if (currencySelectToConvert.value == "US") {
        currencyName.innerHTML = "Dolar"
        currencyImage.src = './assets/Logo_coin/USA.png'
    }

    if (currencySelectToConvert.value == "EUR") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = './assets/Logo_coin/EURO.png'
    }

    convertValues()
}

function changeCurrencyFromConvert() {
    console.log("alo")



}

currencySelectFromConvert.addEventListener("change", changeCurrencyFromConvert)
currencySelectToConvert.addEventListener("change", changeCurrencyToConvert)
convertButton.addEventListener("click", convertValues)

      const dolarToday = 5.25
      const euroToday = 6.25
      //const brlToday 
      const usdToday = 5.25
      const eurToday = 6.25
      const jpyToday 
      const gbpToday 
      const chfToday 
      const cnyToday 
      const solToday 
      const xrpToday 
      const btcToday 
      const ethToday 
      const bnbToday 
  */
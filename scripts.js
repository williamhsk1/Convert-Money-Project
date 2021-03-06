const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.0750;
const euro = 5.5374;
const bitcoin = 0.0000052;
const renminbi = 0.8005;

const convertValues = () => {
  const inputReais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }

  if (select.value === "₿ Bitcoin"){
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { 
      style: "decimal",
      currency: "BTC",
      maximumFractionDigits: 8,
    }).format(inputReais * bitcoin);
  }

  if (select.value === "¥ Renminbi chinês") {
    currencyValueText.innerHTML = new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      currency: "CNY",
    }).format(inputReais / renminbi);
  }

};

changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "US$ Dólar americano") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "./assets/assets/estados-unidos (1) 1.png";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/assets/euro.png";
  }

  if (select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/assets/bitcoin.png";
  }

  if (select.value === "¥ Renminbi chinês") {
    currencyName.innerHTML = "Renminbi chinês";
    currencyImg.src = "./assets/assets/bandeira-da-china.png";
  }

  convertValues()
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);

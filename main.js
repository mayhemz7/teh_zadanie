const userSurname = document.querySelector('[name="surname"]')
const userName =  document.querySelector('[name="name"]')

const goodsElements = document.querySelectorAll('[name="goods"]')
const countElements =  document.querySelectorAll('[type="number"]')

const btn = document.querySelector(".btn")
const resultElem = document.querySelector(".sum")

let result = 0;

function sumAll(){
  result = 0;
  goodsElements.forEach(elem => {
    if (elem.checked) { 
      result += parseInt(elem.value) * parseInt(document.querySelector(`[id=${elem.dataset.goods}]`).value);
    }
  })
}

countElements.forEach(elem => {
    elem.addEventListener("change", function(){
      sumAll();
      resultElem.textContent = `${result} р.`;
    })
});

goodsElements.forEach(product => {
    product.addEventListener("change", function(){
      if (!product.checked)
        document.querySelector(`[id=${product.dataset.goods}]`).value = 0;
      else if (document.querySelector(`[id=${product.dataset.goods}]`).value == 0)
        document.querySelector(`[id=${product.dataset.goods}]`).value = 1;
      sumAll();
      resultElem.textContent = `${result} р.`;
    })
});

btn.addEventListener("click", function(){
  alert(`Заказчик: ${userSurname.value} ${userName.value}\nИтого: ${result} р.`);
});
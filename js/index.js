// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  console.log(`price: ${price.innerHTML}`)
  console.log(`qtd: ${quantity.value}`)
  subtotal.innerHTML = price.innerHTML * quantity.value
  
  return price.innerHTML * quantity.value
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product')
  let valorTotal = 0
  for(let i = 0; i < products.length; i++){
    const product = products[i]
    valorTotal += updateSubtotal(product)
  }

  // ITERATION 3
  const total = document.querySelector('#total-value span')
  total.innerHTML = valorTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target)
  const produto = target.parentNode.parentNode
  produto.parentNode.removeChild(produto)
  calculateAll()
}

// ITERATION 5



function createProduct() {
  const product = document.querySelectorAll('.create-product input')

  let productName = null
  let price = null
  
  product.forEach((item)=>{
    console.log(typeof item.type)
    if (item.type === 'text'){
      productName = item.value
    } else {
      price = item.value
    }
    item.value = ''
  })
  
  const btnNovo = document.createElement('button')
  btnNovo.classList.add('btn')
  btnNovo.classList.add('btn-remove')
  btnNovo.innerHTML = 'Remove'
  btnNovo.addEventListener('click', removeProduct)
  const tdAction = document.createElement('td')
  tdAction.classList.add('action')
  tdAction.appendChild(btnNovo)
  const spanSubtotal = document.createElement('span')
  spanSubtotal.innerHTML = '0'
  const tdSubTotal = document.createElement('td')
  tdSubTotal.classList.add('subtotal')
  tdSubTotal.innerHTML = '$'
  tdSubTotal.appendChild(spanSubtotal)
  const inputQuantity = document.createElement('input')
  inputQuantity.setAttribute('type', 'number')
  inputQuantity.setAttribute('value', '0')
  inputQuantity.setAttribute('min', '0')
  inputQuantity.setAttribute('placeholder','Quantity')
  const tdQuantity = document.createElement('td')
  tdQuantity.classList.add('quantity')
  tdQuantity.appendChild(inputQuantity)
  const spanPrice = document.createElement('span')
  spanPrice.innerHTML = price
  const tdPrice = document.createElement('td')
  tdPrice.classList.add('price')
  tdPrice.innerHTML = '$'
  tdPrice.appendChild(spanPrice)
  const spanName = document.createElement('span')
  spanName.innerHTML = productName
  const tdName = document.createElement('td')
  tdName.classList.add('name')
  tdName.appendChild(spanName)
  const trProduct = document.createElement('tr')
  trProduct.classList.add('product')
  trProduct.appendChild(tdName)
  trProduct.appendChild(tdPrice)
  trProduct.appendChild(tdQuantity)
  trProduct.appendChild(tdSubTotal)
  trProduct.appendChild(tdAction)

  const tbody = document.getElementsByTagName('tbody')
  tbody[0].appendChild(trProduct)

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
  const botoesRemover = document.getElementsByClassName('btn-remove')
  for(let i = 0; i < botoesRemover.length; i++){
    botoesRemover[i].addEventListener('click', removeProduct)
  }
  const btnCreate = document.getElementById('create')
  btnCreate.addEventListener('click', createProduct)
  console.log('entrei')

});

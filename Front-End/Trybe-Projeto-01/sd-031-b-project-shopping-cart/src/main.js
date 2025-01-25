import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement,
  createCartProductElement, sumProductsPrice } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const createProduct = async () => {
  const getSection = document.querySelector('.products');
  const createH2 = document.createElement('h2');
  createH2.className = 'loading';
  createH2.innerText = 'carregando...';
  getSection.appendChild(createH2);

  try {
    const listOfProducts = await fetchProductsList('computador');

    getSection.innerText = '';

    listOfProducts.forEach((elem) => {
      getSection.appendChild(createProductElement(elem));
    });
  } catch (error) {
    const errorElem = document.createElement('h2');
    errorElem.className = 'error';
    errorElem.innerText = error.message;
    getSection.appendChild(errorElem);
  }
  sumProductsPrice();
};
createProduct();

const recoverProductsLS = async () => {
  const getOl = document.querySelector('.cart__products');
  const arrayId = getSavedCartIDs();
  const infoProd = await Promise.all(arrayId.map(async (item) => fetchProduct(item)));
  infoProd.forEach((prod) => {
    const createElemCart = createCartProductElement(prod);
    getOl.appendChild(createElemCart);
  });
};
recoverProductsLS();

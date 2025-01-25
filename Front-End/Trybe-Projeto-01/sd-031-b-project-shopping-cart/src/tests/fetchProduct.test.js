import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

describe('Teste a função fetchProduct', () => {
  it('Testa se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Testa a função fetchProduct com arg MLB1405519561', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });
  it('Teste o retorno da fetchProduct com argumento MLB1405519561', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith(
      'https://api.mercadolibre.com/items/MLB1405519561',
    );
  });
  it('fetchProduct retorna a estrutura de dados igual ao obj produto', async () => {
    const resp = await fetchProduct('MLB1405519561');
    expect(resp).toEqual(product);
  });
  it('fetchProduct sem argumento return error:ID não informado', async () => {
    await expect(fetchProduct()).rejects.toThrow('ID não informado');
  });
});

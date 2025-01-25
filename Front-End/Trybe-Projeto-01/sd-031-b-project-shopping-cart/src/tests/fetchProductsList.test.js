import './mocks/fetchSimulator';
import { fetchProductsList, URL_BASE } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

async function response() {
  await fetchProductsList('computador');
}

describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    response().then((data) => data);
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    response().then((data) => data);
    expect(fetch).toHaveBeenCalledWith(
      'https://api.mercadolibre.com/sites/MLB/search?q=computador',
    );
  });

  it('fetchProductsList com o arg comp é igual ao objeto computadorSearch', async () => {
    const result = await fetchProductsList('computador');
    expect(result).toEqual(computadorSearch);
  });

  it('fetchProductsList sem argumento, erro `Termo de busca não informado`', async () => {
    await expect(fetchProductsList()).rejects.toThrow(
      'Termo de busca não informado',
    );
  });
  it('fetchProduct  Algum erro ocorre, carregue a página e tente novamente.', () => {
    URL_BASE[0] = 'https://invalid.api.mercadolibre.com/sites/MLB';
    expect(() => response()).rejects.toThrow(
      'Algum erro ocorreu, recarregue a página e tente novamente',
    );
  });
  it('Lança um erro ao ocorrer falha no fetch', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Erro de rede')));

    await expect(fetchProductsList('someParam')).rejects.toThrow(
      'Algum erro ocorreu, recarregue a página e tente novamente',
    );
  });
});

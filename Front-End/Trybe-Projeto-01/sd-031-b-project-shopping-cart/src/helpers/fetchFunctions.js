export const URL_BASE = ['https://api.mercadolibre.com/sites/MLB'];

export const fetchProduct = async (id) => {
  if (!id) throw new Error('ID não informado');
  const url = `https://api.mercadolibre.com/items/${id}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export const fetchProductsList = async (param) => {
  if (!param) throw new Error('Termo de busca não informado');
  try {
    const resp = await fetch(`${URL_BASE[0]}/search?q=${param}`);
    const data = await resp.json();
    return data.results;
  } catch {
    throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
  }
};

export const getAddress = async (cep) => {
  const apiUrls = [
    `https://cep.awesomeapi.com.br/json/${cep}`,
    `https://brasilapi.com.br/api/cep/v2/${cep}`,
  ];

  try {
    const response = await Promise.any(
      apiUrls.map(
        (url) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          fetch(url).then((res) => {
            if (!res.ok) throw new Error('Erro na API');
            return res.json();
          }),
        // eslint-disable-next-line function-paren-newline
      ),
    );

    if (response.address) {
      return (
        // eslint-disable-next-line operator-linebreak
        `${response.address} - ${response.district} - ${response.city} - ` +
        `${response.state}`
      );
    }

    if (response.street) {
      // eslint-disable-next-line max-len
      return `${response.street} - ${response.neighborhood} - ${response.city} - ${response.state}`;
    }

    throw new Error('Formato de resposta desconhecido');
  } catch {
    throw new Error('CEP não encontrado');
  }
};

export const searchCep = async () => {
  const input = document.querySelector('.cep-input');
  const span = document.querySelector('.cart__address');
  const cep = input.value.trim();

  if (!/^\d{8}$/.test(cep)) {
    span.textContent = 'CEP inválido. Digite um CEP com 8 dígitos.';
    return;
  }

  try {
    const address = await getAddress(cep);
    span.textContent = address;
  } catch (error) {
    span.textContent = error.message;
  }
};

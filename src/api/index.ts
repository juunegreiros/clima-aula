export const URL =
  'https://gist.githubusercontent.com/juunegreiros/c871c0fff7e43ffa1e32b6adb21f685c/raw/3db783c9a010eb99d42e1b740bc8309a0a33366c/clima.json';

const get = async () => {
  const resposta = await fetch(URL);
  const dados = await resposta.json();
  return dados.cities;
};

export default get;

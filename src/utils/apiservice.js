const ApiService = {
  GetMassas: () => {
    return fetch(`https://run.mocky.io/v3/e72e9608-0970-4155-8b79-69eb8e47c652`)
      .then((res) => ApiService.ErrorHandler(res))
      .then((res) => res.json());
  },

  GetTamanhos: () => {
    return fetch(`https://run.mocky.io/v3/ddcaeacd-f7ba-4eff-afe9-0bfbb784c1af`)
      .then((res) => ApiService.ErrorHandler(res))
      .then((res) => res.json());
  },

  GetRecheios: () => {
    return fetch(`https://run.mocky.io/v3/765ed518-81ab-4902-8393-23823fcaa906`)
      .then((res) => ApiService.ErrorHandler(res))
      .then((res) => res.json());
  },

  GetPontos: () => {
    return fetch(`https://run.mocky.io/v3/4ab31968-c785-4db4-8649-a71b35518258`)
      .then((res) => ApiService.ErrorHandler(res))
      .then((res) => res.json());
  },

  GetRecomendada: () => {
    return fetch(`https://run.mocky.io/v3/3604b124-d3c1-4bf5-809b-73b162dad47c`)
      .then((res) => ApiService.ErrorHandler(res))
      .then((res) => res.json());
  },

  ErrorHandler: (res) => {
    if (!res.ok) {
      throw Error(res.responseText);
    }
    return res;
  },
};
export default ApiService;

import React, { Component } from "react";
import ApiService from "../utils/apiservice";
import Massa from "../components/massa/massa.jsx";
import Recheio from "../components/recheio/recheio.jsx";
import Tamanho from "../components/tamanho/tamanho.jsx";
import Finalizar from "../components/finalizar/finalizar.jsx";
import Success from "../components/success/success.jsx";
import PizzaRecomendada from "../components/pizza-recomendada/pizzarecomendada.jsx";
import ToastPontos from "../components/toastpontos/toastpontos.jsx";

export class Main extends Component {
  state = {
    step: 1,
    massa: null,
    recheio: null,
    tamanho: null,
    pontos: null,
    recomendacaoAceita: false,
    pizzaRecomendada: null,
    listaMassas: [],
    listaRecheios: [],
    listaTamanhos: [],
  };

  componentDidMount() {
    this.getMassas();
    this.getRecomendada();
  }

  nextStep = () => {
    const { step } = this.state;
    const nextStep = step + 1;
    this.setState({
      step: nextStep,
    });
    switch (nextStep) {
      case 2:
        return this.getRecheios();
      case 3:
        return this.getTamanhos();
    }
  };

  prevStep = () => {
    const { step } = this.state;
    const prevStep = step - 1;
    this.setState({
      step: step - 1,
    });
    switch (prevStep) {
      case 2:
        return this.getRecheios();
      case 3:
        return this.getTamanhos();
    }
  };

  restartStep = () => {
    const { step } = this.state;
    this.setState({
      step: 1,
    });
  };

  lastStep = () => {
    const { pizzaRecomendada } = this.state;
    this.getPontos();
    this.setState({
      step: 4,
      massa: pizzaRecomendada.massa,
      recheio: pizzaRecomendada.recheio,
      tamanho: pizzaRecomendada.tamanho,
      recomendacaoAceita: true,
    });
  };

  hideToast = () => {
    this.setState({
      recomendacaoAceita: false,
    });
  };

  getMassas() {
    ApiService.GetMassas().then((res) => {
      const massas = res.massa.map((massa) => {
        return massa.nome;
      });
      this.setState({
        listaMassas: massas,
        massa: this.state.massa || massas[0],
      });
    });
  }

  getRecheios() {
    ApiService.GetRecheios().then((res) => {
      const recheios = res.recheio.map((recheio) => {
        return recheio.nome;
      });

      this.setState({
        listaRecheios: recheios,
        recheio: this.state.recheio || recheios[0],
      });
    });
  }

  getTamanhos() {
    ApiService.GetTamanhos().then((res) => {
      const tamanhos = res.tamanho.map((tamanho) => {
        return tamanho.nome;
      });
      this.setState({
        listaTamanhos: tamanhos,
        tamanho: this.state.tamanho || tamanhos[0],
      });
    });
  }

  getPontos() {
    ApiService.GetPontos().then((res) => {
      const pontos = res.pontos;
      this.setState({ pontos });
    });
  }

  getRecomendada() {
    ApiService.GetRecomendada().then((res) => {
      const recomendada = res;
      this.setState({ pizzaRecomendada: recomendada });
    });
  }

  handleChange = (option) => (e) => {
    this.setState({ [option]: e.target.value });
  };

  render() {
    const {
      step,
      listaMassas,
      listaRecheios,
      listaTamanhos,
      pizzaRecomendada,
      recomendacaoAceita,
      pontos,
    } = this.state;
    const { massa, recheio, tamanho } = this.state;
    const values = { massa, recheio, tamanho };

    switch (step) {
      case 1:
        return (
          <>
            <Massa
              selected={massa}
              listaMassas={listaMassas}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            <div className="d-flex justify-content-center mt-4">
              <h3 className="titles">Ou você pode...</h3>
            </div>
            <PizzaRecomendada
              pizzaRecomendada={pizzaRecomendada}
              lastStep={this.lastStep}
            />
          </>
        );
      case 2:
        return (
          <Recheio
            selected={recheio}
            listaRecheios={listaRecheios}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Tamanho
            selected={tamanho}
            listaTamanhos={listaTamanhos}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <>
            <Finalizar
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
            <ToastPontos
              hideToast={this.hideToast}
              recomendacaoAceita={recomendacaoAceita}
              pontos={pontos}
            />
          </>
        );
      case 5:
        return <Success restartStep={this.restartStep} />;
    }
  }
}

export default Main;

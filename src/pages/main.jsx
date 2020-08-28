import React, { Component } from "react";
import ApiService from "../utils/ApiService";
import Massa from "./massa.jsx";
import Recheio from "./recheio.jsx";
import Tamanho from "./tamanho.jsx";
import Finalizar from "./finalizar.jsx";
import Success from "./success";

export class Main extends Component {
  state = {
    step: 1,
    massa: null,
    recheio: null,
    tamanho: null,
    pizzaRecomendada: null,
    pizzas: [],
    listaMassas: [],
    listaRecheios: [],
    listaTamanhos: [],
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  restartStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - step + 1,
    });
  };

  getMassas() {
    ApiService.GetMassas().then((res) => {
      const massas = res.massa.map((massa) => {
        return massa.nome;
      });
      this.setState({ listaMassas: massas, massa: massas[0] });
    });
  }

  getRecheios() {
    ApiService.GetRecheios().then((res) => {
      const recheios = res.recheio.map((recheio) => {
        return recheio.nome;
      });

      this.setState({ listaRecheios: recheios, recheio: recheios[0] });
    });
  }

  getTamanhos() {
    ApiService.GetTamanhos().then((res) => {
      const tamanhos = res.tamanho.map((tamanho) => {
        return tamanho.nome;
      });
      this.setState({ listaTamanhos: tamanhos, tamanho: tamanhos[0] });
    });
  }

  getPontos() {
    ApiService.GetPontos().then((res) => {
      const pontos = res;
    });
  }

  handleChange = (option) => (e) => {
    this.setState({ [option]: e.target.value });
  };

  render() {
    const { step, listaMassas, listaRecheios, listaTamanhos } = this.state;
    const { massa, recheio, tamanho } = this.state;
    const values = { massa, recheio, tamanho };

    switch (step) {
      case 1:
        this.getMassas();
        return (
          <Massa
            listaMassas={listaMassas}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        this.getRecheios();
        return (
          <Recheio
            listaRecheios={listaRecheios}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        this.getTamanhos();
        return (
          <Tamanho
            listaTamanhos={listaTamanhos}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Finalizar
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success restartStep={this.restartStep} />;
    }
  }
}

export default Main;

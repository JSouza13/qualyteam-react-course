import React, { Component } from "react";
import Axios from "axios";

class Recipe  extends Component {

  state = {
    receita: {}
  }

  // Sempre executa antes de renderizar
  async componentDidMount() {
    const { match: { params } } = this.props;

    const { data } = await Axios.get(`http://localhost:4000/food/${params.id}`);

    this.setState({receita: data})
  }

  render(){
    return(
      <div className="recipe">
        <div className="recipe--container">
          <figure>
            <div
              className="recipe--container-image"
              style={{ backgroundImage: `url(${this.state.receita.imageUrl})` }}
            />
          </figure>
          <div className="recipe--info">
            <h1>{this.state.receita.title}</h1>
            <div className="recipe--info--description">
              <p>{this.state.receita.description}</p>
              <span>{this.state.receita.ingredients}</span>
            </div>
          </div>
        </div>
        <div className="recipe--preparation">
          <h2>Preparação</h2>
          <p>{this.state.receita.preparation}</p>
        </div>
      </div>
    )
  }
};

export { Recipe };

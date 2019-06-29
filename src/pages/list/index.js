import React, { Fragment, Component } from "react";
import { Card } from "../../components/card";
import Axios from "axios";

class List  extends Component {

  state = {
    comidas: []
  }

  // Sempre executa antes de renderizar
  async componentDidMount() {
    
    const { data } = await Axios.get("http://localhost:4000/food");

    this.setState({comidas: data})
  }

  render(){
    return(
      <Fragment>
        {this.state.comidas.map(comida => <Card key={comida.id} {...comida} />)}
      </Fragment>
    )
  }
};

export { List };

import { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.dataPokemon;

    return(
      <section>
        <section>
          <p>{name}</p>
          <p>{type}</p>
          <p>Avarage weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </section>
        <aside>
          <img src={image} alt={`image of the ${name}`}/>
        </aside>
      </section>
    );
  }
}

export default Pokemon;
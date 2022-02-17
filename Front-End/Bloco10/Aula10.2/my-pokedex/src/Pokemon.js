import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.dataPokemon;

    return(
      <section className='item-pokemon'>
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

Pokemon.propTypes = {
  dataPokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes,
    image: PropTypes.string
  })
}

export default Pokemon;
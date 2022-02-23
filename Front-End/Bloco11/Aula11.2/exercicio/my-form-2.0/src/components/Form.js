import React from 'react';
import '../css/Form.css';
import States from './States';

class Form extends React.Component {
  handleRegex(event) {
    const regex = /\W|_/;
    console.log(event.target.value);
    console.log(regex.test(event.target.value));
  }

  render() {
    return(
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>

          <label htmlFor="name">
            Nome:
            <input type="text" name="name" id="name" maxLength={40} required />
          </label>

          <label htmlFor="email">
            Email:
            <input type="text" name="email" id="email" maxLength={50} required />
          </label>

          <label htmlFor="cpf">
            CPF:
            <input type="text" name="cpf" id="cpf" maxLength={11} required />
          </label>

          <label htmlFor="adress">
            Endereço:
            <input type="text" name="adress" id="adress" maxLength={200} required onChange={this.handleRegex} />
          </label>

          <label htmlFor="city">
            Cidade:
            <input type="text" name="city" id="city" maxLength={28} required />
          </label>

          <States />
        </fieldset>
      </form>
    )
  }
}

export default Form;

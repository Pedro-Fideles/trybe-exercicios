import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });
  test('com o valor padrão do reducer e teste se um clique funciona', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.getByText('Clique aqui');

    userEvent.click(buttonAdicionar);
    const count = screen.getByText('1');
    expect(count).toBeDefined();
  });
  test('Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});

    expect(screen.getByText('10')).toBeInTheDocument();
    const buttonAdicionar = screen.getByText('Clique aqui');
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});

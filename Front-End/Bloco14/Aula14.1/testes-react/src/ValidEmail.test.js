import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido mostrar uma mensagem "Email válido" na cor verde.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } wasClicked={ true } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  expect(isValid).toHaveStyle({ color: 'green' });
});

test('Testando um componente, caso o email seja inválido mostrar uma mensagem "Email inválido" na cor vermelha.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } wasClicked={ true } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
  expect(isValid).toHaveStyle({ color: 'red' });
});

test('Verifica se mensagem de email inválido não aparece antes do botão ser clicado', () => {
  render(<ValidEmail email={ '' } wasClicked={ false } />);
  const isValid = screen.queryAllByText('Email Inválido');
  expect(isValid).toHaveLength(0);
});

import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTrasitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 }, // Posição inicial do elemento
      enter: { right: '0%', opacity: 1 }, // Quando o elemento entrar
      leave: { right: '-120%', opacity: 0 }, // Quando o elemento sair
    },
  );

  return (
    <Container>
      {messagesWithTrasitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;

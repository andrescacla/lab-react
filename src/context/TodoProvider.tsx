import { useReducer } from 'react';
import type { JSX } from 'react';
import { AppContext } from './TodoContext';
import type { TodoState } from '../interface/todo.interface';
import { todoReducer } from './TodoReducer';

type ProviderProps = {
  children: JSX.Element | JSX.Element[]
};

const INITIAL_STATE: TodoState = {
    isVisible: true,
}

export const AppProvider = ({ children }: ProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);


  return <AppContext.Provider value={{ state: todoState, setState: dispatch }}>{children}</AppContext.Provider>;
};
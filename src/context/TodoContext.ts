import { createContext, useContext, type ActionDispatch } from 'react';
import type { TodoState } from '../interface/todo.interface';
import type { TodoAction } from './TodoReducer';



type AppContextValue = {
  state: TodoState;
  setState: ActionDispatch<[action: TodoAction]>;
};

const AppContext = createContext({} as AppContextValue);

/**
 * Custom hook para acceder al contexto de la aplicación.
 * Lanza un error si se usa fuera del AppProvider.
 */
const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppProvider');
  }
  return context;
};

export { AppContext, useAppContext };
export type { TodoState, AppContextValue };
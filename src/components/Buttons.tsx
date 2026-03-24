import { useAppContext } from '../context/TodoContext';
import '../styles/buttons.css';
export const Buttons = () => {
  const { setState } = useAppContext();
  const handleHidden = () => {
    setState({ type: 'hidden', payload: false })
  }
  const handleShow = () => {
    setState({ type: 'show', payload: true })
  }
  return (
    <section id="buttons">
      <button className='btn-hidden' onClick={handleHidden}>Ocultar</button>
      <button className='btn-show' onClick={handleShow}>Mostrar</button>
    </section>
  )
}

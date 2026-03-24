
import './App.css'
import { Block } from './components/Block';
import { Buttons } from './components/Buttons';
import { useAppContext } from './context/TodoContext'

function App() {
  const { state} = useAppContext()
  return (
    <>
      <section id="center">
        {state.isVisible && <Block />}
        <Buttons />
      </section>
    </>
  )
}

export default App


import './App.css'
import { Block } from './components/Block';
import { Buttons } from './components/Buttons';
import { TestForm } from './components/Forms/TestForm';
import { useAppContext } from './context/TodoContext'

function App() {
  const { state} = useAppContext()
  return (
    <>
      <section id="center">
        {state.isVisible && <Block />}
        <Buttons />
        <TestForm />
      </section>
    </>
  )
}

export default App

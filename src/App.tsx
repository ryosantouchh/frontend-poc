import './App.css'
import OriginalComp from './components/OriginalComp/OriginalComp'
import WrapperComp from './components/WrapperComp/WrapperComp'
import { ImperativeContextProvider } from './contexts/imperativeContext'

function App() {
  return (
    <ImperativeContextProvider>
      <div style={{ display: 'flex', gap: '24px' }}>
        <WrapperComp />
        <OriginalComp />
      </div>
    </ImperativeContextProvider>
  )
}

export default App

import { useContext } from 'react'
import InnerComponent from '../InnerComponent/InnerComponent'
import { ImperativeContext } from '../../../contexts/imperativeContext'

const OuterComponent = () => {
  const { imperativeRef } = useContext(ImperativeContext)!

  const handleIncrement = () => {
    if (imperativeRef.current) {
      imperativeRef.current.increment()
    }
  }

  return (
    <div>
      <button onClick={() => handleIncrement()}>Increment</button>
      <InnerComponent />
    </div>
  )
}

export default OuterComponent

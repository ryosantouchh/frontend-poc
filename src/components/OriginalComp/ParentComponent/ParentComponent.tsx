import { useRef } from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

const ParentComponent = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleIncrement = () => {
    if (buttonRef.current) {
      buttonRef.current.increment()
    }
  }

  return (
    <div>
      <button onClick={() => handleIncrement()}>Parent Increment</button>
      <ChildComponent ref={buttonRef} />
    </div>
  )
}

export default ParentComponent

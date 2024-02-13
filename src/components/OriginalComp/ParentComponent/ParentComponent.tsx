import { useRef } from 'react'
import ChildComponent from '../ChildComponent/ChildComponent'

type ImperativeHandleType = {
  increment: () => void
}

const ParentComponent = () => {
  const buttonRef = useRef<ImperativeHandleType>(null)

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

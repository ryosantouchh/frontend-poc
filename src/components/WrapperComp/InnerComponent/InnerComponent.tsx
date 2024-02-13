import { useContext, useImperativeHandle, useRef, useState } from 'react'
import { ImperativeContext } from '../../../contexts/imperativeContext'

type ImperativeHandleType = {
  increment: () => void
}

const InnerComponent = () => {
  const { imperativeRef } = useContext(ImperativeContext)!
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [count, setCount] = useState(0)

  useImperativeHandle<unknown, ImperativeHandleType>(imperativeRef, () => ({
    increment() {
      if (buttonRef.current) {
        buttonRef.current.click()
      }
    },
  }))

  const handleClickIncrement = () => {
    setCount((prev) => (prev += 1))
  }

  return (
    <>
      <button ref={buttonRef} onClick={() => handleClickIncrement()}>
        Test Click
      </button>
      <div>{count}</div>
    </>
  )
}

export default InnerComponent

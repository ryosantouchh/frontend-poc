import { useImperativeHandle, useRef, useState } from 'react'
import useImperativeContext from '../../../hooks/useImperativeContext'

type ImperativeHandleType = {
  increment: () => void
}

const InnerComponent = () => {
  const { imperativeRef } = useImperativeContext()
  const buttonRef = useRef(null)
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

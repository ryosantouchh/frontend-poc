import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

type ImperativeHandleType = {
  increment: () => void
}

const ChildComponent = forwardRef<ImperativeHandleType, unknown>((_, ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [count, setCount] = useState<number>(0)

  useImperativeHandle<unknown, ImperativeHandleType>(ref, () => {
    return {
      increment() {
        if (buttonRef.current) {
          buttonRef.current.click()
        }
      },
    }
  })

  const handleClickIncrement = () => {
    setCount((prev) => (prev += 1))
  }

  return (
    <>
      <button ref={buttonRef} onClick={() => handleClickIncrement()}>
        Child Increment
      </button>
      <div>{count}</div>
    </>
  )
})

export default ChildComponent

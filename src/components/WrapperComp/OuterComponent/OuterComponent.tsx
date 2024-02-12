import useImperativeContext from '../../../hooks/useImperativeContext'
import InnerComponent from '../InnerComponent/InnerComponent'

const OuterComponent = () => {
  const { imperativeRef } = useImperativeContext()

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

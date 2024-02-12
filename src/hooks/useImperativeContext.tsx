import { useContext } from 'react'
import { ImperativeContext } from '../contexts/imperativeContext'

function useImperativeContext() {
  return useContext<Record<string, never>>(ImperativeContext)
}

export default useImperativeContext

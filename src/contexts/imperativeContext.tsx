/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useRef } from 'react'

export const ImperativeContext = createContext({})

type ImperativeContextProviderProps = {
  children: React.ReactNode
}

const ImperativeContextProvider = ({
  children,
}: ImperativeContextProviderProps) => {
  const imperativeRef = useRef(null)

  const value = {
    imperativeRef,
  }

  return (
    <ImperativeContext.Provider value={value}>
      {children}
    </ImperativeContext.Provider>
  )
}

export { ImperativeContextProvider }

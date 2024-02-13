import React, { createContext, useRef } from 'react'

type ImperativeHandleType = {
  increment: () => void
}

type ContextType = {
  imperativeRef: React.RefObject<ImperativeHandleType>
}

export const ImperativeContext = createContext<ContextType | null>(null)

type ImperativeContextProviderProps = {
  children: React.ReactNode
}

const ImperativeContextProvider = ({
  children,
}: ImperativeContextProviderProps) => {
  const imperativeRef = useRef<ImperativeHandleType>(null)

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

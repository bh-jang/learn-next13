import React from 'react'

const InitialPropsLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <div style={{ background: 'blue' }}>
        InitialPropsLayout
      </div>
      {children}
    </div>
  )
}

export default InitialPropsLayout;
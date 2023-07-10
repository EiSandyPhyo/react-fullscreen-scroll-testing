import React from 'react'

const Header = ({children}) => {
    const headerStyle = {
        position: 'fixed',
        width: '100%',
        zIndex: '1',
        top: '0'
      };
  return (
    <header style={headerStyle}>{children}</header>
  )
}

export default Header
import React from 'react'

const Header = () => {
    const headerStyle = {
        position: 'fixed',
        width: '100%',
        zIndex: '1',
        top: '0'
      };
  return (
    <header style={headerStyle}>
      <a href="#firstPage" className=" mx-5 hover:text-[#C44D58]">Section Oneee</a>
      <a href="#secondPage" className=" mx-5  hover:text-[#C44D58]">Section Twooo</a>
      <a href="#thirdPage" className=" mx-5  hover:text-[#C44D58]">Section Threeee</a>
    </header>
  )
}

export default Header
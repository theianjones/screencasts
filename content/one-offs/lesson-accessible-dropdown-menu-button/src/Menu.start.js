import React from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = () => setIsOpen(state => !state)

  const mr1 = {marginRight: 10}
  return (
    <>
      <button onClick={toggleOpen}>Menu</button>
      {isOpen && (
        <div>
          <a style={mr1} href="https://egghead.io/instructors/ian-jones">
            egghead
          </a>
          <a style={mr1} href="https://ianjones.us">
            blog
          </a>
          <a href="https://twitter.com/_jonesian">twitter</a>
        </div>
      )}
    </>
  )
}

export default Menu

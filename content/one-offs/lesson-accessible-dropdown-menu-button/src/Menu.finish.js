import React from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleOpen = () => setIsOpen(state => !state)
  const firstLink = React.useRef(null)
  const mr1 = {marginRight: 10}

  React.useEffect(() => {
    if (isOpen) {
      firstLink.current.focus()
    }
  }, [isOpen]) // You may omit useRef container values from the deps because React guarantees them to be static. But it also doesn’t hurt to specify them.
  return (
    <>
      <button aria-expanded={isOpen} aria-haspopup="true" onClick={toggleOpen}>
        Menu
      </button>
      {isOpen && (
        <div>
          <a
            ref={firstLink}
            style={mr1}
            href="https://egghead.io/instructors/ian-jones"
          >
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

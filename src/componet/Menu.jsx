import React from 'react'
import '@styles/Menu.scss'

const Menu = () => {
  return (
      <div className="Menu">
          <ul>
              <li>
                  <a href="create-account" className="title">Create Account</a>
              </li>

              <li>
                  <a href="/login">login</a>
              </li>

              <li>
                  <a href="/">Sign out</a>
              </li>
          </ul>
      </div>
  )
}

export default Menu
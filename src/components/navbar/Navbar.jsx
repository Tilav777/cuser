import './Navbar.css'

function Navbar({usersLength}) {
  return (
    <header className='header'>
      <div className="container">
        <nav className="header-nav">
          <div className='logo'><a href="#">CUser</a></div>
          {usersLength === 0 ? <p>No User :(</p> : <p>{usersLength} Users</p>}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
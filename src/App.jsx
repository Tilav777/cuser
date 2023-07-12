import "./App.css";
import { useState } from "react";

// Components
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import UserList from "./components/userList/UserList";
import NewUserForm from "./components/newuser/NewUserForm";


function App() {

  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)


  function deleteUser(id) {
    setUsers((prev)=> {
      return prev.filter((user)=> {
        return id !== user.id
      })
    })
  }

  function closeModale(e) {
    if(e.target.className === 'overlay' || e.key === "Escape") setShowModal(false)
  }

  function addUser(user) {
    setUsers((prev)=> {
      [...prev, user]
    })
  }

  return (
    <div onClick={closeModale} onKeyDown={closeModale} className="app">
      <Navbar usersLength={users.length}/>
      <main className="main-page">
        <div className="container">
          {users.length === 0 && <h1 className="no-users">NO USERS</h1>}
          <UserList users={users} deleteUser={deleteUser}/>
        </div>
      </main>
      {showModal && <NewUserForm addUser={addUser}/>}
      <button onClick={() => setShowModal(true)} className="create-user">Create User</button>
      <Footer/>
    </div>
  );
}

export default App;
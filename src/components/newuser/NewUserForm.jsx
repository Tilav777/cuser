import "./NewUserForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

function NewUserForm({addUser}) {
  
  const [user, setUser] = useState({
      id: uuidv4(),
      image: '/src/assets/images/image.jpg',
      firstName: '',
      lastName: '',
      age: null,
      from: '',
      job: '',
      gender: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    addUser(user)
    
  }

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image url:</span>
              <input onChange={(e)=> {setUser((prev)=> {
                return {...prev, image: e.target.value}
              })}} type="url" autoComplete="of"/>
            </label>
            <label>
              <span>First name:</span>
              <input onChange={(e)=> {setUser((prev)=> {
                return {...prev, firstName: e.target.value}
              })}} type="text" required autoComplete="of"/>
            </label>
            <label>
              <span>Last name:</span>
              <input onChange={(e)=> {setUser((prev)=> {
                return {...prev, lastName: e.target.value}
              })}} type="text" required autoComplete="of"/>
            </label>
            <label>
              <span>Age:</span>
              <input onChange={(e)=> {setUser((prev)=> {
                return {...prev, age: e.target.value}
              })}} type="number" required autoComplete="of"/>
            </label>
            <label>
              <span>From:</span>
              <input onChange={(e)=> {setUser((prev)=> {
                return {...prev, form: e.target.value}
              })}} type="text" required autoComplete="of"/>
            </label>
            <label>
              <span>Job:</span>
              <input onChange={(e)=> {setUser((prev)=> {
                return {...prev, job: e.target.value}
              })}} type="text" required autoComplete="of"/>
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input onChange={(e)=> {setUser((prev)=> {
                return {...prev, gender: e.target.value}
              })}} type="radio" name="gender" required value='male'/>
              </label>
              <label>
                <small>Female</small>
                <input onChange={(e)=> {setUser((prev)=> {
                return {...prev, gender: e.target.value}
              })}} type="radio" name="gender" required value='female'/>
              </label>
            </div>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewUserForm



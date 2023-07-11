import "./NewUserForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

function NewUserForm() {

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form>
            <label>
              <span>Image url:</span>
              <input type="url" required autoComplete="of"/>
            </label>
            <label>
              <span>First name:</span>
              <input type="text" required autoComplete="of"/>
            </label>
            <label>
              <span>Last name:</span>
              <input type="text" required autoComplete="of"/>
            </label>
            <label>
              <span>Age:</span>
              <input type="number" required autoComplete="of"/>
            </label>
            <label>
              <span>From:</span>
              <input type="text" required autoComplete="of"/>
            </label>
            <label>
              <span>Job:</span>
              <input type="text" required autoComplete="of"/>
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input type="radio" name="gender" required value='male'/>
              </label>
              <label>
                <small>Female</small>
                <input type="radio" name="gender" required value='female'/>
              </label>
            </div>
            <button type="submit" className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewUserForm


// id: 1,
//       image: 'https://picsum.photos/400?random-1',
//       firstName: 'Tilav',
//       lastName: 'Tilov',
//       age: 20,
//       from: 'uzb',
//       job: 'dev',
//       gender: 'male'
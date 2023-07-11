import './UserList.css'

function UserList({users, deleteUser}) {
  return (
    <div className='user-list'>
        {users.map((user)=> {
            return (
                <div className='card' key={user.id}>
                    <img src={user.image} alt={user.firstName} width={150} height={150}/>
                    <h3>{user.firstName}, {user.lastName}, {user.age} age</h3>
                    <p>From: {user.from}</p>
                    <p>Job: {user.job}</p>
                    <p>Gender: {user.gender}</p>
                    <button onClick={()=> deleteUser(user.id)} className='delete-btn'>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default UserList
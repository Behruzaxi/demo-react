import React, { useState } from 'react'

import "./components/style.css"

function App() {

const [user, setUser] = useState("")
const [message, setMessage] = useState(user)


const onSubmitFunc = (e) => {
setUser(e.target.value)
}

const handleClick = () => {
setMessage(user)
setUser("")

}


  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 mt-5">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    onChange={onSubmitFunc}
                    value={!user.length !== 0 ? user : ""}
                    />
                    <button className='styl' onClick={handleClick}>Button</button>
                    <h1>{message}</h1>
               
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App;
import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label> Your Name </label>
            <input type="text" placeholder="Lemmi Guess your Name!!"></input>
            <label> Email </label>
            <input type="email" placeholder="Type your Email Here"></input>
            <label> Subject </label>
            <input type="text" placeholder="What's the subject? " ></input>
            <label> Message </label>
            <textarea rows="6" placeholder="Type your message here" />

            <button className="btn"> Lets Chat </button>
        </form>
    </div>
  )
}

export default Form
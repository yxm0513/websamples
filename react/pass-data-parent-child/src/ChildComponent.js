import React from 'react'

function ChildComponent(props) {
  return (

    <div className="card">
        <div className="card-header">
          <h4 className="title">Child Component</h4>
        </div>

        <div className="card-body">
          <p className="label">Your Message</p>
          <p className='text'>{props.messageString}</p>
        </div>
      </div>
  )
}

export default ChildComponent
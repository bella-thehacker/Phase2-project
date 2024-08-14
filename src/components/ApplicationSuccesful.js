import React, { useState } from 'react'

function ApplicationSuccessful() {
  const [closePopup, setClosePopup] = useState(false)

  const close = () => {
    setClosePopup(true)
  }

  return (!closePopup) ? (
    
    <div className='pop-up'>
        <div className='popup-inner'>
        <button onClick={close}> close</button>
        <div>
            <img src='https://img.icons8.com/?size=100&id=2sZ0sdlG9kWP&format=png&color=000000'></img>
            <h1>Congratulations  your have successfully applied</h1>
            <p>Check your email for more details!</p>
        </div>
        </div>
        
    </div>
  ) : null
}

export default ApplicationSuccessful
import React from 'react'
import './ResetButton.css'

function ResetButton({resetBoard,clearButton}) {
  return (
    <div className='resetCon'>
       <button className="reset-btn" onClick={resetBoard}>Reset</button>
       <button className="reset-btn" onClick={clearButton}>Clear</button>
    </div>
       
       
  )

  }
export default ResetButton

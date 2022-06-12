import React from 'react'
import './visa.css'; 


const Visa =()=> {
  return (

    <div className='card'>
        
        
        <div className='container'>

        <div className="bank-name" title="card-number">CARD NUMBER</div>
      
      <div className="data">
          <div className="pan" title="4123 4567 8910 1112">4123 4567 8910 1112</div>
          <div className="chip"><img src="https://pngimage.net/wp-content/uploads/2018/05/chip-credit-card-png-7.png" width={100} alt="chip"/></div>
          <div className="exp-date-wrapper">
              <div className="left-label">EXPIRATION DATE</div>
              <div className="exp-date">
                  <div className="date" title="03/24">03/24</div>

              <div className='label'>
              <div className="name">John Doe</div>
              <span>
                  <img src='https://pngroyale.com/wp-content/uploads/2022/02/mastercard-logo-logok-.png' width={100} />
                  
                </span>
              </div>
             
        </div>    
       </div>
         
  
      </div>
     </div>
       
       
   </div>


  )
}

export default Visa;
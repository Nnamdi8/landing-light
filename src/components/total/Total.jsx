import './total.css';

const Total =()=> {
  return (
    <div className='summary'>       
            <div className="cost">
                <span className="name">Subtotal</span><span className="price">N2,497.00</span>
            </div><br/>
            <div className="cost">
                <span className="name">Estimated TAX</span><span className="price">N119.64</span>
            </div><br/>
            <div className="cost">
                <span className="name">Promotional code: Z4KXLM9A</span><span className="price">N-60.00</span>
            </div>
        </div>
    
  )
}

export default Total;
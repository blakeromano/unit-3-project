import React from 'react';
import { Link } from 'react-router-dom'


function ShopCard ({Shop}) { 
    return ( 
        <div className="card">
     
      <div className="card-body">
        <h2 className="card-text">{Shop.name}</h2>
        <p className="card-text">{Shop.address}</p>
        <p className="card-text">{Shop.phoneNum}</p>
        <p className="card-text">{Shop.email}</p>
        <p className="card-text">{Shop.desc}</p>
        <p className="card-text">{Shop.tags}</p>
        <p className="card-text">{Shop.owner.name}</p>
        <p className="card-text">{Shop.logo}</p>
      </div>
      <div className="card-footer">
       
      </div>
    </div>
    )
}

export default ShopCard
import React from 'react'
import "./DescriptionBox.css"

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, culpa. Maiores, eos. Iure consequuntur a rem consectetur molestiae numquam autem beatae, atque commodi nihil sapiente iste ut in tenetur quo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores molestias voluptatum qui quis earum deserunt corporis explicabo natus! Vero, impedit?</p>
        </div>
    </div>
  )
}

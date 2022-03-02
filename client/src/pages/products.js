import React from 'react';
import "../assets/product.css"

const Product =() => {
return(
<section className="containerCont">
          <div className="cardCont">
            <div className="cardCont-image website-1" />
            <h2>Simple</h2>
            <p>This is a simple page for beginners.</p>
            <a href>Purchase</a>
          </div>
          <div className="cardCont">
            <div className="cardCont-image website-2" />
            <h2>Medium</h2>
            <p>This is a medium tier website. </p>
            <a href>Purchase</a>
          </div>
          <div className="cardCont">
            <div className="cardCont-image wesbite-3" />
            <h2>Advanved</h2>
            <p>This is for someone who wants to take control of their entire wesbite.</p>
            <a href>Purchase</a>
          </div>
        </section>
)
}
export default Product
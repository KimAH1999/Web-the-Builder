import React from 'react';
import "../assets/product.css"


const Product =() => {
return(
<section className="containerCont">
<div>
  <a href =" https://www.youtube.com/playlist?list=PL6VsrHTw_Ntf7oni6QcOh8iGXS0Bxwoef">
    <div className="cardCont">
      <div className="cardCont-image website-1" />
      <h2>HTML Tutorial</h2>
    </div>
  </a>
</div>
<div>
  <a href ="https://www.youtube.com/playlist?list=PL6VsrHTw_NtdO2OnEdrZKRYD1xzxvy8U_">
    <div className="cardCont">
      <div className="cardCont-image website-2" />
      <h2>CSS Tutorial</h2>
    </div>
  </a>
</div>
<div>
  <a href =" https://www.youtube.com/playlist?list=PL6VsrHTw_NtfZpAZHtHdHP1Ol6m72ePS4">
    <div className="cardCont">
      <div className="cardCont-image website-3" />
      <h2>Javascript Tutorial</h2>
    </div>
  </a>
</div><div>
  <a href ="https://www.youtube.com/watch?v=p77o4VJHaAU&list=PL6VsrHTw_NtdWRP8hPwL5an9cNdrDpckU">
    <div className="cardCont">
      <div className="cardCont-image website-4" />
      <h2>React Tutorial</h2>
    </div>
  </a>
</div>
</section>
)
}
export default Product

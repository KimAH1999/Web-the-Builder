import React from 'react';


const Product =() => {
return(
    <div>
    <h1>THIS IS OUR PRODUCT PAGE</h1>
  </div>
)
}
var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />   
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="style.css" />
        <title>Page Title</title>
        <section className="container">
          <div className="card">
            <div className="card-image website-1" />
            <h2>Simple</h2>
            <p>This is a simple page for beginners.</p>
            <a href>Purchase</a>
          </div>
          <div className="card">
            <div className="card-image website-2" />
            <h2>Medium</h2>
            <p>This is a medium tier website. </p>
            <a href>Purchase</a>
          </div>
          <div className="card">
            <div className="card-image wesbite-3" />
            <h2>Advanved</h2>
            <p>This is for someone who wants to take control of their entire wesbite.</p>
            <a href>Purchase</a>
          </div>
        </section>
      </div>
    );
  }
});
export default Product
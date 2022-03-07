import React from 'react';

const Contact = () => {
const contactStyle={
    flex:"row",
    height: '50vh',
    width: '25vw',
    margin:'1rem'
}
const pictureStyle ={
    height: '40vh',
    width: '20vw',
    objectFit:'cover',
    padding:'1rem'

}
// const retrato ={
//     flexDirection:'row'
// }
    return (

        <div className="text-center">
            <h1>MEET THE TEAM</h1>
        <div className='align-center justify-content-center flex-row'>
            <div style={contactStyle}>
                <div className="card center">
                    <img src ="https://avatars.githubusercontent.com/u/87666809?v=4" class="rounded mx-auto d-block" alt="Jane" style={pictureStyle} />
                    <div className="container">
                        <h2>Kimberly Aguilar</h2>
                        <div class="btn-group" role="group" aria-label="Basic example">
                        <p><button className="button mr-2">GitHub</button></p>
                        <p><button className="button">Email</button></p></div>
                    </div>
                </div>
            </div>
            <div style={contactStyle}>
                <div className="card center">
                    <img src ="https://avatars.githubusercontent.com/u/87789140?v=4" class="rounded mx-auto d-block" alt="Jane" style={pictureStyle} />
                    <div className="container">
                        <h2>Ricardo Crossley</h2>
                        <div class="btn-group" role="group" aria-label="Basic example">
                        <p><button className="button mr-2">GitHub</button></p>
                        <p><button className="button">Email</button></p></div>
                    </div>
                </div>
            </div>
            <div style={contactStyle}>
                <div className="card center">
                    <img src ="https://avatars.githubusercontent.com/u/86133108?v=4" class="rounded mx-auto d-block" alt="Jane" style={pictureStyle} />
                    <div className="container">
                        <h2>Edgar Fernandez</h2>
                        <div class="btn-group" role="group" aria-label="Basic example">
                        <p><button className="button mr-2">GitHub</button></p>
                        <p><button className="button">Email</button></p></div>
                    </div>
                </div>
            </div>
            <div style={contactStyle}>
                <div className="card center">
                    <img src ="https://avatars.githubusercontent.com/u/87237312?v=4" class="rounded mx-auto d-block" alt="Jane" style={pictureStyle} />
                    <div className="container">
                        <h2>Thao Nguyen</h2>
                        <div class="btn-group" role="group" aria-label="Basic example">
                        <p><button className="button mr-2">GitHub</button></p>
                        <p><button className="button">Email</button></p></div>
                    </div>
                </div>
            </div>
            <div style={contactStyle}>
                <div className="card center">
                    <img src ="https://avatars.githubusercontent.com/u/88949064?v=4" class="rounded mx-auto d-block" alt="Jane" style={pictureStyle} />
                    <div className="container">
                        <h2>Denny Jalate</h2>
                        <div class="btn-group" role="group" aria-label="Basic example">
                        <p><button className="button mr-2">GitHub</button></p>
                        <p><button className="button">Email</button></p></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}



export default Contact;
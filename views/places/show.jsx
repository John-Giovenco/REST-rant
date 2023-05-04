const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} />
                    <h3>
                    Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
            </div>
            <div className="col-sm-6">
                <h1>{ data.name }</h1>
                <h2>Rating</h2>
                    <p>not rated</p>
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
                    <p>No comments yet</p>
            </div>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
            <div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>  
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>     
            </div>
          </main>
        </Def>
    )
}

module.exports = show


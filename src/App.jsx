import React from 'react'
function App() {

  const hendlesubmit = e => {
    e.preventDefault()
    const short = e.target
    const name = short.name.value
    const price = short.price.value
    const quantity = short.quantity.value
    const objdata = { name, price, quantity }
    console.log(objdata)
  }

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={hendlesubmit}>
                <fieldset className="fieldset">
                  <label className="label">CoffeName</label>
                  <input name='name' type="text" className="input" placeholder="coffe name" />
                  <label className="label">Price</label>
                  <input name='price' type="text" className="input" placeholder="price" />
                  <label className="label">Quantity</label>
                  <input name='quantity' type="text" className="input" placeholder="quantity" />
                  <button className="btn btn-neutral mt-4">Submit</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

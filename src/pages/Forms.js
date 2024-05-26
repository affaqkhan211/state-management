import React, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("")

    const [isShow, setIsShow] = useState(false)

    const submitForm = () => {
        setIsShow(true)
    }

    return (
        <div className="container">

            <form class="row g-3" onSubmit={(e) => e.preventDefault()}>
                <div class="col-md-4">
                    <label for="inputEmail4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputEmail4" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="col-md-4">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="col-md-4">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" value={password} onChange={(e) => setPasword(e.target.value)} />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select" value={state} onChange={(e) => setState(e.target.value)}>
                        <option selected>Pakistan</option>
                        <option>UK</option>
                        <option>UAE</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" value={zip} onChange={(e) => setZip(e.target.value)} />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" onClick={submitForm}>Sign in</button>
                </div>
            </form>

            {
                isShow ? (
                    <>
                        <div className="container">

                            <h1>{name}</h1>
                            <h1>{email}</h1>
                            <h1>{password}</h1>

                            <h4>{address}</h4>
                            <h4>{address2}</h4>
                            <h4>{city}</h4>

                            <p>{state}</p>
                            <p>{zip}</p>
                        </div>



                    </>
                ) : null
            }
        </div>
    )
}

export default Forms
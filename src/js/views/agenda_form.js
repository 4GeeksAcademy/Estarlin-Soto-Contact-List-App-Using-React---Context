import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Agenda_form = () => {


    const { store, actions } = useContext(Context);

    return (
        <div className="m-5 p-5">
            <h1 className="text-center" >Add a new contact</h1>
            <form action="/agendaHomePage " className="shadow-sm p-3">
                <div className="mb-3 text-center">
                    <label for="exampleInputEmail1" className="form-label"><b>Full Name</b></label>
                    <input type="text" placeholder="Full name" className="form-control text-center" onChange={(event) => actions.setName(event.target.value)} required />

                </div>
                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label"><b>Email</b></label>
                    <input type="email" placeholder="Enter email" className="form-control text-center" onChange={(event) => actions.setEmail(event.target.value)} required />
                </div>

                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label"><b>Phone</b></label>
                    <input placeholder="Enter phone" className="form-control text-center " onChange={(event) => actions.setPhone(event.target.value)} required />
                </div>

                <div className="mb-3 text-center">
                    <label for="exampleInputPassword1" className="form-label"><b>Address</b></label>
                    <input type="text" placeholder="Enter address" className="form-control text-center" onChange={(event) => actions.setAddress(event.target.value)} required />
                </div>

                <button onClick={() => actions.sendform()} className="btn btn-primary w-100 p-3 fs-5" type="submit" >save</button>
                <Link to={"/agendaHomePage"}>

                    <button onClick={() => setInterval(() => location.reload(true), 200)} className="btn btn-warning my-3 " >Or get back to contacts</button>

                </Link>
            </form>

        </div>

    )
}
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Agenda_form = () => {

  

    const { store, actions } = useContext(Context);

    return (
        <div className="m-5">
            <form action="/agendaHomePage">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" placeholder="Full name" className="form-control"   onChange={(event)=> actions.setName(event.target.value)} required/>
                       
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" placeholder="Enter email" className="form-control"  onChange={(event)=> actions.setEmail(event.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone</label>
                    <input  placeholder="Enter phone" className="form-control"  onChange={(event)=> actions.setPhone(event.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" placeholder="Enter address" className="form-control"   onChange={(event)=> actions.setAddress(event.target.value)} required/>
                </div>
                
                <button onClick={()=> actions.sendform()} className="btn btn-primary w-100" type="submit" >save</button>
                <Link to={"/agendaHomePage"}>

                <button className="btn btn-warning my-3">Or get back to contacts</button>

                </Link>
            </form>

        </div>

    )
}
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/agendaHomePage.css";



export const AgendaHomePage = () => {

    const { store, actions } = useContext(Context);


    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light  rounded-bottom-1 mb-3 ">
                <span className="navbar-brand mb-1 "></span>
                <div className="ml-auto">
                    <Link to="/agenda_form">
                        <button className="btn btn-success me-3 p-2">Add new contact</button>
                    </Link>
                </div>
            </nav>
            <div>
            {store.agenda.length < 1 ? <h1 className="noContatsMsg" >No contacts found ⚠️</h1> :
                <ul>
                    {store.agenda.map((ele, key) =>

                        <li className="border row">
                            <div className=" d-flex col-lg-3 col-md-4 col-sm-5 userImgContainer" >
                                <img src="https://picsum.photos/300/300" alt="User Image" className="userImg"  >
                                </img> </div>

                            <div className="col-md-8 col-sm-6 col-lg-7 infoContainer">
                                <div className="infoContainer">
                                    <h3>{ele.full_name}</h3>
                                    <div className="fw-semibold text-secondary fs-5"><i class="fa-solid fa-location-dot me-2"></i>{ele.address}</div>
                                    <div className=" text-secondary"><i class="fa-solid fa-phone me-2"></i>{`(${ele.phone.slice(0, 3)}) ${ele.phone.slice(3, 6)}-${ele.phone.slice(6)}`}</div>
                                    <div className="text-secondary"><i class="fa-solid fa-envelope me-2"></i>{ele.email}</div>
                                </div>
                            </div>

                            <div className=" col-lg-1 col-md-3 col-sm-6 d-flex iconsContainer " >
                                <i className="fa-solid fa-pencil iconBtn " data-bs-toggle="modal" data-bs-target={`#editUser${key}`} ></i>
                                <i className="fa-solid fa-trash-can iconBtn " data-bs-toggle="modal" data-bs-target={`#deleteUser${key}`}  ></i>
                            </div>

                            <div className="modal fade" id={`editUser${key}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit your user!</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => location.reload(true)}></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">Full Name</label>
                                                    <input type="text" placeholder="Full name" className="form-control" defaultValue={ele.full_name} onChange={(event) => actions.setName(event.target.value)} required />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input type="email" placeholder="Enter email" className="form-control" defaultValue={ele.email} onChange={(event) => actions.setEmail(event.target.value)} required />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Phone</label>
                                                    <input placeholder="Enter phone" className="form-control" defaultValue={ele.phone} onChange={(event) => actions.setPhone(event.target.value)} required />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">Address</label>
                                                    <input type="text" placeholder="Enter address" className="form-control" defaultValue={ele.address} onChange={(event) => actions.setAddress(event.target.value)} required />
                                                </div>

                                                <div className="d-flex">
                                                    <button type="button" className="btn btn-secondary w-50 " data-bs-dismiss="modal" onClick={() => location.reload(true)} >No</button>
                                                    <button onClick={() => actions.editUser(ele, key)} className="btn btn-primary w-50" >save</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id={`deleteUser${key}`} tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" >Are you sure?</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            If you delete this thing the entire universe will go down!
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                                            <button type="button" className="btn btn-secondary" onClick={() => actions.deleteUser(ele.id)}>Yes baby!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>)}
                </ul>}
                </div>
        </div>
    )
}
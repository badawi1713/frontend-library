import React from "react";

import "./styles/Delete.css";
// import checkedLogo from "../../assets/images/checked.png";
import axios from "axios";
const Host = "http://localhost:3001/api/v1/";
const DeleteModal = props => {
    const deleteBookData = () => {
        axios.delete("http://localhost:3001/api/v1" + props.data.id_book)
            .then(result => {
                console.log(result);
                console.log("Data has been deleted!");
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <div id="deleteModal" className="delete-modal">
            <div className="delete-modal-content">
                <div className="delete-modal-header">
                    <span onClick={deleteBookData} className="close">
                        &times;
                    </span>
                </div>
                <div className="delete-modal-body">
                    <div className="body-wrapper">
                        {/* <img src={checkedLogo} alt="" srcSet="" /> */}
                        <h2>
                            Data <span>{props.data.title}</span> Berhasil Dihapus!
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
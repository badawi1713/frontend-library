import React from "react";
import Axios from "axios";
class BorrowButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id_book: props.data.id_book,
            img: props.data.img,
            available: props.data.available,
            loading: false
        };
    }

    rentBookData = () => {
        // const { available } = this.state;
        const rentBook = {
            available: "false"
        };

        Axios.patch(`http://localhost:3001/api/v1/rentbook/${this.state.id_book}`, rentBook)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    };

    returnBookData = () => {
        // const { available } = this.state;
        const rentBook = {
            available: "true"
        };

        Axios.patch(`http://localhost:3001/api/v1/returnbook/${this.state.id_book}`, rentBook)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const bookAvailable = this.state.available;
        let buttonStatus;
        if (bookAvailable === "true") {
            buttonStatus = <button onClick={this.rentBookData}>Borrow</button>;
        } else {
            buttonStatus = (
                <button
                    style={{ backgroundColor: "#596A55" }}
                    onClick={this.returnBookData}
                >
                    Return
                </button>
            );
        }
        return (
            <div>
                <section className="borrow-button-container">
                    <aside className="aside-items">
                        <div className="book-cover-img">
                            <img src={this.state.img} alt="book-cover.img" />
                        </div>
                        {/* <form> */}
                        <div className="borrow-btn">{buttonStatus}</div>
                        {/* </form> */}
                    </aside>
                </section>
            </div>
        );
    }
}

export default BorrowButton;
import React from "react";
import "./BookDetail.css";
import BookDetailNavbar from "../../Components/Navbar/BookDetailNavbar";
import BookContent from "../../Components/Book/BookContent";
import BorrowButton from "../../Components/Book/BorrowButton";
import Edit from "../../Components/Modal/Edit";
import Delete from "../../Components/Modal/Delete";
import Axios from "axios";

const HOST = "http://localhost:3001/api/v1/";
class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: [],
            id: props.match.params.id
        };
    }

    getBookById = () => {
        Axios.get(`http://localhost:3001/api/v1/${this.state.id}`)
            .then(({ data }) => {
                this.setState({
                    book: data.result
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount = () => {
        this.getBookById();
    };

    render() {
        const { book } = this.state;
        console.log(book);
        return (
            <div className="grid-container">
                {book &&
                    book.map((item, index) => (
                        <div key={index}>
                            <BookDetailNavbar data={item} />
                            <div className="grid-templates-content">
                                <BookContent data={item} />
                                <BorrowButton data={item} />
                            </div>
                            <Edit data={item} />
                            <Delete data={item} />
                        </div>
                    ))}
                <div style={{ marginTop: "60px" }}></div>
            </div>
        );
    }
}

export default BookDetails;
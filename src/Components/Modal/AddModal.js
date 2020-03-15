import React, { Component } from "react";
import Axios from "axios";
import "./styles/AddModal.css";

const HOST = "http://localhost:3001/api/v1/";
class AddModal extends Component {
    state = {
        title: "",
        description: "",
        released_date: "",
        img: "",
        id_genre: "",
        available: "true",
        genreData: []
    };

    postBookData = () => {
        const {
            title,
            description,
            released_date,
            img,
            id_genre,
            available
        } = this.state;

        const book = {
            title,
            description,
            released_date,
            img,
            id_genre,
            available,
        };
        console.log(book);
        Axios.post("http://localhost:3001/api/v1/addbook", book)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    };

    renderGenreData = () => {
        Axios.get("http://localhost:3001/api/v1/genre/")
            .then(({ data }) => {
                // console.log(data);
                this.setState({
                    genreData: data.result
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount = () => {
        this.renderGenreData();
    };

    render() {
        const { genreData } = this.state;
        console.log(genreData);
        return (
            <div id="addModal" className="add-modal">
                <div className="add-modal-content">
                    <div className="add-modal-header">
                        <span className="add-close">&times;</span>
                        <p>Add Data</p>
                    </div>
                    <div className="add-modal-body">
                        <div className="form-wrapper">
                            <form>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="image-url">URL Image</label>
                                    </div>
                                    <div className="col-80">
                                        <input
                                            required
                                            type="text"
                                            id="imageURL"
                                            name="imageURL"
                                            placeholder="Book's URL Image Cover"
                                            onChange={e => {
                                                this.setState({ img: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="released-date">Released Date</label>
                                    </div>
                                    <div className="col-80">
                                        <input
                                            required
                                            type="date"
                                            id="releasedDate"
                                            name="released_date"
                                            placeholder="Book's Released Date"
                                            onChange={e => {
                                                this.setState({ released_date: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="book-title">Title</label>
                                    </div>
                                    <div className="col-80">
                                        <input
                                            required
                                            type="text"
                                            id="bookTitle"
                                            name="title"
                                            placeholder="Book's Title"
                                            onChange={e => {
                                                this.setState({ title: e.target.value });
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="image-url">Genre</label>
                                    </div>
                                    <div className="col-80">
                                        <select
                                            onChange={e => {
                                                this.setState({ id_genre: e.target.value });
                                                // console.log(item.name);
                                            }}
                                            id="genre"
                                            name="genre"
                                            required
                                        >
                                            <option value="">Please Choose a Genre</option>
                                            {genreData.length < 1 ? (
                                                <option value="0">Genre Data is Empty</option>
                                            ) : (
                                                    genreData &&
                                                    genreData.map(item => (
                                                        <option key={item.id_genre} value={item.id_genre}>
                                                            {item.name_genre}
                                                        </option>
                                                    ))
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="book-description">Description</label>
                                    </div>
                                    <div className="col-80">
                                        <textarea
                                            required
                                            id="description"
                                            name="desc"
                                            placeholder="Book's Description"
                                            style={{ height: "200px" }}
                                            onChange={e => {
                                                this.setState({ description: e.target.value });
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <button
                                        type="submit"
                                        onClick={this.postBookData()}
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddModal;
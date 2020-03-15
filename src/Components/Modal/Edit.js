import React from "react";
import axios from "axios";
import "./styles/Edit.css";

class editModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data.id,
            title: props.data.title,
            description: props.data.description,
            released_date: props.data.released_date,
            img: props.data.img,
            id_genre: props.data.id_genre,
            available: props.data.available,
            genreData: []
        };
    }

    updateBookData = () => {
        const {
            title,
            description,
            img,
            released_date,
            id_genre,
            available
        } = this.state;

        const updatedBook = {
            title,
            released_date,
            img,
            description,
            id_genre,
            available,
        };
        console.log(updatedBook);

        axios.patch(`http://localhost:3001/api/v1/${this.state.id}`, updatedBook)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    };

    renderGenreData = () => {
        axios.get("http://localhost:3001/api/v1/genre/")
            .then(({ data }) => {
                console.log(data.result);
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
            <div id="editModal" className="edit-modal">
                <div className="edit-modal-content">
                    <div className="edit-modal-header">
                        <span className="close">&times;</span>
                        <p>Edit Data</p>
                    </div>
                    <div className="edit-modal-body">
                        <div className="form-wrapper">
                            <form action="">
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="image-url">URL Image</label>
                                    </div>
                                    <div className="col-80">
                                        <input
                                            value={this.state.img}
                                            type="text"
                                            id="imageURL"
                                            name="imageURL"
                                            placeholder="Book's URL Image Cover"
                                            onChange={e => {
                                                this.setState({ img: e.target.value });
                                            }}
                                            required
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
                                            value={this.state.released_date}
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
                                            type="text"
                                            id="bookTitle"
                                            name="bookTitle"
                                            placeholder="Book's Title"
                                            required
                                            value={this.state.title}
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
                                            name="description"
                                            placeholder="Book's Description"
                                            style={{ height: "200px" }}
                                            value={this.state.description}
                                            onChange={e => {
                                                this.setState({ description: e.target.value });
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <button onClick={this.updateBookData} type="submit">
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

export default editModal;
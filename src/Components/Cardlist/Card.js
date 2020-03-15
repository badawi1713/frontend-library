import React, { Component } from "react";
import axios from "axios";
import Truncate from "react-truncate";
import { Link } from "react-router-dom";

const HOST = "localhost:3001/api/v1/";
class Cardlist extends Component {
    state = {
        library: []
    };

    getBookData = () => {
        axios.get("http://localhost:3001/api/v1/")
            .then(({ data }) => {
                // console.log(data);
                this.setState({
                    library: data.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    };
    componentDidMount = () => {
        this.getBookData();
    };
    render() {
        const { library } = this.state;
        console.log(library);
        return (
            <div>
                <section className="content-container">
                    {library.length < 1 ? (
                        <div>
                            <h1>Data is empty</h1>
                        </div>
                    ) : (
                            library &&
                            library.map(item => (
                                <Link to={{ pathname: `/book/${item.id_book}`, book: item }} >
                                    <div key={item.id_book} className="card-container">
                                        <a href="#">
                                            <img src={item.img} alt="book-cover" />
                                            <div className="card-text-container">
                                                <h3>{item.title}</h3>
                                                <p>
                                                    <Truncate
                                                        lines={2}
                                                        ellipsis={
                                                            <span>
                                                                ... <a href="/link/to/article">Read more</a>
                                                            </span>
                                                        }
                                                    >
                                                        {item.description}
                                                    </Truncate>
                                                </p>
                                                {/* <p>{}</p> */}
                                            </div>
                                        </a>
                                    </div>
                                </Link>
                            ))
                        )}
                </section>
            </div >
        );
    }
}

export default Cardlist;
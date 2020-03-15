import React from "react";
import HomeNavbar from "../../Components/Navbar/HomeNavbar"
import Carousel from "../../Components/Carousel/Caraousel"
import HomeList from "../../Components/HomeList/Homelist"
import Cardlist from "../../Components/Cardlist/Card"
import Sidebar from "../../Components/Sidebar/Sidebar"
import AddModal from "../../Components/Modal/AddModal"
import "./Home.css"


const Home = (props) => {
  return (
    <div>
      <div className="grid-container" id="main">
        <HomeNavbar />
        <Carousel />
        <HomeList />
        <Cardlist />
      </div>
      <Sidebar {...props} />
      <AddModal />
    </div>
  );
};

export default Home;

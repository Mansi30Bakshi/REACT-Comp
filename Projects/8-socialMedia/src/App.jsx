import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import "bootstrap/dist/css/bootstrap.min.css";
// import Posts from "./Components/Post";
import PostList from "./Components/PostList";
import { useState } from "react";
const App = () => {
const [selected, setselected] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar selectedTab={selected}
          setselectedTab={setselected} />
      <div className="content">
        <Header />
        {selected === "Home" ? (<PostList/>) : (<CreatePost />)}
        <Footer />
      </div>
    </div>
  );
};
export default App;

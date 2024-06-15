import logo from "./assets/logo-3.png"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import Banner from "./components/Banner";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="navbar2">
    <nav class="navbar  sticky-top navbar-inverse navbar-expand-lg bg-body-tertiary ">
    <div class="container-fluid">
      <img class="navbar-brand" src="https://preview.colorlib.com/theme/personalportfolio/assets/img/logo/logo.png"></img>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 gap-md-5 gap-1">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
      
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
          <button type="button" class="btn btn-danger btn-lg">Get Free Consultant</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Banner></Banner>
  <Aboutus></Aboutus>
  <Contact></Contact>
  <Footer></Footer>
  </div>
  );
}

export default App;

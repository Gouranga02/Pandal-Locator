import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* LinkedIn-like Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Durga Pandal Locator</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Network</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Messaging</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Notifications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Page Layout */}
      <div className="container-fluid mt-5 pt-5">
        <div className="row">

          {/* Left Sidebar */}
          <div className="col-md-3 sidebar">
            <div className="card profile-card mb-3">
              <div className="card-body text-center">
                <img src="https://randomuser.me/api/portraits/women/10.jpg" className="rounded-circle profile-img" alt="Profile"/>
                <h5 className="card-title mt-3">Sarah</h5>
                <p className="card-text">Durga Pandal Enthusiast</p>
                <a href="#" className="btn btn-primary btn-block">View Profile</a>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Connections</h5>
                <p>Expand your network by connecting with fellow pandal enthusiasts!</p>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="col-md-6 feed">
            <div className="feed-item card mb-3">
              <div className="card-body">
                <div className="feed-header d-flex align-items-center">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="rounded-circle" />
                  <div className="ml-3">
                    <strong>Pandal 1</strong>
                    <p className="text-muted">Posted 2 hours ago</p>
                  </div>
                </div>
                <img src="https://www.linkpicture.com/q/durga-pandal-1.jpg" className="img-fluid mt-3" alt="Pandal 1" />
                <div className="feed-actions mt-3 d-flex justify-content-between">
                  <button className="btn btn-outline-primary">Like</button>
                  <button className="btn btn-outline-secondary">Comment</button>
                  <button className="btn btn-outline-secondary">Share</button>
                </div>
              </div>
            </div>

            <div className="feed-item card mb-3">
              <div className="card-body">
                <div className="feed-header d-flex align-items-center">
                  <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="Profile" className="rounded-circle" />
                  <div className="ml-3">
                    <strong>Pandal 2</strong>
                    <p className="text-muted">Posted 4 hours ago</p>
                  </div>
                </div>
                <img src="https://www.linkpicture.com/q/durga-pandal-2.jpg" className="img-fluid mt-3" alt="Pandal 2" />
                <div className="feed-actions mt-3 d-flex justify-content-between">
                  <button className="btn btn-outline-primary">Like</button>
                  <button className="btn btn-outline-secondary">Comment</button>
                  <button className="btn btn-outline-secondary">Share</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-md-3 sidebar">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pandals Near You</h5>
                <p>Explore the nearest Durga Pandals and their cultural festivities.</p>
                <a href="#" className="btn btn-primary btn-block">Discover</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;

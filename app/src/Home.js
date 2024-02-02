import React, { Component } from 'react';
import AppNav from './AppNav';
import { Link } from 'react-router-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap styles

class Home extends Component {
  state = {};

  render() {
    return (
      <div className='hero text-light' style={{ textAlign: 'center', backgroundColor: '#282c34', height: '100vh' }}>
        <AppNav />
        <h2 className="heading" style={{ marginBottom: '20px' }}>
          Welcome to easy app!
        </h2>
        <p className='desc'>Start tracking your expenses effortlessly.</p>
        <Link to="/expenses" style={{ textDecoration: 'none' }}>
          <button className='btn btn-light'>Track Your Expense</button>
        </Link>
      </div>
    );
  }
}

export default Home;

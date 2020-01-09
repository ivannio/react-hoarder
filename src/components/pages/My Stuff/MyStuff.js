import React from 'react';
import { Link } from 'react-router-dom';

import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    return (
      <>
      <h1>My Stuff</h1>
      <Link className="btn btn-outline-warning" to="/stuff/12345/edit">Edit</Link>
      <Link className="btn btn-outline-success" to="/stuff/12345">Single</Link>
      </>
    );
  }
}

export default MyStuff;

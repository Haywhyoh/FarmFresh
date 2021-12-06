import React from 'react'

function App() {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav nav-tabs">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">FreshFarm</a>
      </div>

      
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
    </nav>
    
  );
}

export default App;

import React from 'react'


function NavDrop({items}) => {

    return(
        <div>
            <NavDropdown title={Categories.title} id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Our Products</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Delivery</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </div>
    )
}

export default NavDrop;
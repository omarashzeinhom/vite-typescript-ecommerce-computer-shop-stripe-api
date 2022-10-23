import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";
import { Link as NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Nav() {
  const [showBasic, setShowBasic] = useState(false);
  //const {openCart, cartQuantity} = useShoppingCart();

  return (
    <MDBNavbar expand="lg" light bgColor="light" className="gx-4">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img
            src="https://res.cloudinary.com/du9aympvd/image/upload/v1666387382/code/typescript/vite/vite-typescript-computer-shop/logo/ANDGOLOGO_l8f6nw.webp"
            style={{ borderRadius: "90%" }}
            alt="LOGO"
            width="30"
            height={30}
            loading="lazy"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="gx-5 mr-auto mb-2 mb-lg-0 ">
            {NavItemsObjectArray.map((item, index) => {
              const time = Date.now();
              return (
                <MDBNavbarItem key={index + time}>
                  <NavLink
                    aria-current="page"
                    to={item.path}
                    className="active text-dark me-5 mx-1 my-4"
                  >
                    {item?.title}
                  </NavLink>
                </MDBNavbarItem>
              );
            })}

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Dropdown
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  {NavItemsObjectArray.map((item, index) => {
                    return (
                      <MDBDropdownItem
                        link
                        key={index}
                        href={item.path}
                        className="active"
                      >
                        {item?.title}
                      </MDBDropdownItem>
                    );
                  })}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              name="q"
              autoComplete="Test"
            />
            <MDBBtn color="dark">Search</MDBBtn>
          </form>
        </MDBCollapse>

        <ShoppingCart />
      </MDBContainer>
    </MDBNavbar>
  );
}

const NavItemsObjectArray = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "About",
    path: "/about",
  },
];

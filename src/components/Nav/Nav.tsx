import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Nav() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar expand="lg" light bgColor="light">
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
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            {NavItemsObjectArray.map((item, index) => {
              const time = Date.now();
              return (
                <MDBNavbarItem key={index + time}>
                  <MDBNavbarLink
                    active
                    aria-current="page"
                    href={item.path}
                    className="active"
                  >
                    {item?.title}
                  </MDBNavbarLink>
                </MDBNavbarItem>
              );
            })}

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Dropdown
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <>
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
                  </>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBIcon fab icon="opencart" />
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </MDBCollapse>
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

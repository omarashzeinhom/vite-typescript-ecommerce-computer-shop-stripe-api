import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBadge,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export default function ShoppingCart() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      {cartQuantity > 0 && (
        <MDBBtn
          onClick={toggleShow}
          color="dark"
          outline
          rounded
          style={{ position: "relative" }}
        >
          <MDBIcon fas icon="shopping-cart" size="xl" />
          <MDBBadge color="success" notification pill>
            {cartQuantity}
          </MDBBadge>
        </MDBBtn>
      )}

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Cart</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>CheckOut</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

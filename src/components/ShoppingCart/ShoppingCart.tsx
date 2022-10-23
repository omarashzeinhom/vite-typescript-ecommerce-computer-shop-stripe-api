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
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "..";


type ShoppingCartProps = {
  isOpen: boolean
}











export default function ShoppingCart({isOpen}:ShoppingCartProps) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const { closeCart, cartItems, cartQuantity } = useShoppingCart();

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
            <MDBModalBody>
              <MDBListGroup style={{ minWidth: '22rem' }} light>
{cartItems.map((item, index)=>(

<MDBListGroupItem key={index}  className='d-flex justify-content-between align-items-center'>
 <CartItem key={item.id} {...item}/>
  </MDBListGroupItem>


))}    
    </MDBListGroup></MDBModalBody>

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

import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBCardImage,
  MDBCardHeader,
  MDBBadge,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  imageLink: string;
  quantity: number;
};

export default function Product({
  id,
  title,
  price,
  imageLink,
}: ProductProps) {
  const {getItemQuantity, increaseCartQuantity , decreaseCartQuantity ,removefromCart}= useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <MDBCard key={id}>
      <MDBCardHeader>{title}</MDBCardHeader>

      <MDBCardImage
        width={"100%"}
        height={"100%"}
        loading="lazy"
        alt={title}
        src={imageLink}
        style={{
          borderRadius: "8px",
          boxShadow: "0.1rem .1rem .1rem .1rem gray",
          objectFit: "cover",
          maxWidth: "99%",
          maxHeight: "150px",
        }}
      />
      <MDBCardBody>
        <MDBCardText>{formatCurrency(price)}</MDBCardText>
      </MDBCardBody>

      <MDBCardFooter>
        <MDBRow>
          <MDBBadge color="dark"> Quantity : {quantity}</MDBBadge>

          <MDBCol size={12}>
            {quantity === 0 ? (
              <MDBBtn color="success" block  onClick={()=>increaseCartQuantity(id)}>
                +
              </MDBBtn>
            ) : (
              <MDBRow>
                <MDBCol size="3">
                  <MDBBtn color="success" block  onClick={()=>increaseCartQuantity(id)}>
                    +
                  </MDBBtn>
                </MDBCol>

                <MDBCol size={5}>
                <MDBBtn onClick={()=> removefromCart(id)}>Remove                  <MDBBadge color="dark" pill>{quantity} </MDBBadge>
</MDBBtn>
                </MDBCol>

                <MDBCol size="3">
                  <MDBBtn color="danger" block onClick={()=>decreaseCartQuantity(id)}>
                    -
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            )}
          </MDBCol>
        </MDBRow>
      </MDBCardFooter>
    </MDBCard>
  );
}

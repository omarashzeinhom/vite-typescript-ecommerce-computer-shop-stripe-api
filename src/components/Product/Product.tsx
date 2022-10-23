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
import { formatCurrency } from "../../utilities/formatCurrency";

type ProductProps = {
  id?: number;
  title?: string;
  price: number;
  imageLink?: string;
  quantity?: number;
};

export default function Product({
  id,
  title,
  price,
  imageLink,
  quantity,
}: ProductProps) {
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
              <MDBBtn color="success" block>
                +
              </MDBBtn>
            ) : (
              <MDBRow>
                <MDBCol size="5">
                  <MDBBtn color="success" block>
                    +
                  </MDBBtn>
                </MDBCol>

                <MDBCol size={2}>
                  <MDBBadge color="dark">{quantity}</MDBBadge>
                </MDBCol>

                <MDBCol size="5">
                  <MDBBtn color="danger" block>
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

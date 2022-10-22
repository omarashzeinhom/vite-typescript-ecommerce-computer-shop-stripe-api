import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBCardImage,
  MDBCardHeader,
  MDBBadge,
  MDBCardText,
} from "mdb-react-ui-kit";

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
        <MDBCardText>
          {price + "$"} <MDBBadge color="dark"> Quantity:{quantity}</MDBBadge>
        </MDBCardText>
      </MDBCardBody>

      <MDBCardFooter>
        <MDBBtn color="success" block>
          +
        </MDBBtn>
      </MDBCardFooter>
    </MDBCard>
  );
}

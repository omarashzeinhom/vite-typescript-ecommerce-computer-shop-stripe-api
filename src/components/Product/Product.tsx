import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBCardImage,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import React from "react";
import products from "../../data/products.json";

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
      <MDBCard>
        <MDBCardHeader>{title}</MDBCardHeader>

        <MDBCardImage
          width={150}
          height={150}
          loading="lazy"
          alt={title}
          src={imageLink}
          style={{
            borderRadius: "8px",
            boxShadow: "0.1rem .1rem .1rem .1rem gray",
          }}
        />
        <MDBCardBody>
          <p>{price + "$"}</p>

          <br />
        </MDBCardBody>
        <MDBCardFooter>
          <MDBBtn color="success">+</MDBBtn>
        </MDBCardFooter>
      </MDBCard>
  );
}

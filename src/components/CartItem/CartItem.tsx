import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeProducts from "../../data/products.json";
import { formatCurrency } from "../../utilities/formatCurrency";
type CartItemProps = {
  id: number;
  quantity: number;
};

export default function ShoppingCart({ id, quantity }: CartItemProps) {
  const { removefromCart } = useShoppingCart();

  const product = storeProducts.find((i) => i.id === id);

  if (product == null) return null;
  return (
    <>
      <div key={id} className="d-flex align-items-center">
        <img
          src={product.imageLink}
          alt={product.title}
          style={{ width: "45px", height: "45px" }}
          className="rounded-circle"
        />
        <div className="ms-3">
          <p className="fw-bold mb-1">{product.title}</p>

          <p className="text-muted mb-0">
            {formatCurrency(product.price * quantity)}
          </p>
        </div>
      </div>
      {quantity > 1 && (
        <MDBBadge pill light color="success">
          x{quantity}
        </MDBBadge>
      )}
      <MDBBtn
        onClick={() => removefromCart(product.id)}
        outline
        rounded
        color="danger"
      >
        <MDBIcon icon="times" />
      </MDBBtn>
    </>
  );
}

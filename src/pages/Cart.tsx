type Props = {
  age: number;
};

const Cart = (props: Props) => {
  return (
    <div>
      Cart
      {props.age}
    </div>
  );
};

export default Cart;

import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="flex flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
    </div>
  )
}

export default Cart
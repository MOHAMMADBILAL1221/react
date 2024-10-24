import { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import { Button, Image } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

function Carts() {
  const { cartitems, removeItemFromCart ,additemcart ,LessQuantityFromCart } = useContext(CartContext);

  const totalamount = cartitems.reduce(
    (total, obj) => total + obj.quantity * obj.price,
    0
  );
  const totalQuantity = cartitems.reduce(
    (total, obj) => total + obj.quantity,
    0
  );

  return (
    <div className="container mx-auto my-5">
      <h1 className="font-medium text-3xl underline">Cart items</h1>

      <div className="flex gap-5 my-5">
        <div className="flex-grow justify-center items-center  p-4 flex flex-col  border">
          <h1>Total Quantity</h1>
          <h1 className="font-semibold text-xl">{totalQuantity}</h1>
        </div>
        <div className="flex-grow justify-center items-center  p-4 flex flex-col  border">
          <h1>Total Amount</h1>
          <h1 className="font-semibold text-xl">{Math.round(totalamount)}</h1>
        </div>
        <div className="flex-grow justify-center items-center  p-4 flex flex-col  border">
          <h1>Check Out</h1>
        </div>
      </div>

      {cartitems.map((data) => (
        <div key={data.id} className="flex border items-center my-2 p-3">
          <Image src={data.thumbnail} width={250} height={200} />
          <div className="flex flex-col pl-5">
            <h1 className="font-medium text-xl mb-2">
              {data.title} {`(${data.category})`}
            </h1>
            <h1 className="text-start font-medium text-normal mb-2">
              {data.description}
            </h1>
            <h1 className="text-start font-medium text-normal   mb-2">
              ${data.price}
            </h1>
            <div className="flex mx-auto gap-3">
              <Button
              icon={<PlusOutlined />}
                onClick={() =>additemcart(data) }
                className="bg-teal-600 rounded-lg text-white cursor-pointer  p-2"
              ></Button>
              
              <h1 className="text-center text-xl">{data.quantity}</h1>
              <Button
                icon={<MinusOutlined />}
                onClick={() => LessQuantityFromCart(data.id)}
                disabled={data.quantity === 1}
                className="bg-red-600 text-white cursor-pointer rounded-lg p-2"
              ></Button>
            </div>
            <Button
              danger
              className="my-4 w-56 mx-auto"
              onClick={() => removeItemFromCart(data.id)}
            >
              Remove Item
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carts;

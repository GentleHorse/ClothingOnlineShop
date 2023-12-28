export default function Cart({ items, onUpdateCartItemQuantity }) {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `€ ${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul className="list-none my-4 mx-0 p-0 flex flex-col gap-2">
          {items.map((item) => {
            const formattedPrice = `€${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="flex justify-between items-center py-2 px-4 bg-stone-100 rounded-md text-sm"
              >
                <div>
                  <span>{item.name}</span>
                  <span>({formattedPrice})</span>
                </div>
                <div className="text-base flex gap-2 items-center">
                  <button
                    className="bg-transparent border-none rounded-md text-stone-950  hover:text-amber-400 cursor-pointer text-lg"
                    onClick={() => onUpdateCartItemQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-transparent border-none rounded-md text-stone-950  hover:text-amber-400 cursor-pointer text-lg"
                    onClick={() => onUpdateCartItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="text-right">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}

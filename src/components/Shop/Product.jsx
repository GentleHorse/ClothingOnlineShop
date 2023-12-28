import Button from "../utils/Button.jsx";

export default function Product({
  id,
  image,
  title,
  price,
  description,
  onAdd,
}) {
  return (
    <article className="h-full bg-stone-700 rounded-md flex flex-col justify-between shadow-[0_0_10px_rgba(0,0,0,0.3)]">
      <div>
        <img className="w-full rounded-md" src={image} alt={title} />
        <div className="pt-0 pr-4 pb-2 pl-4 flex flex-col justify-between">
          <h3 className="text-xl text-stone-400 mb-1">{title}</h3>
          <p className="text-lg text-stone-300 m-0">€{price.toFixed(2)}</p>
          <p>{description}</p>
        </div>
      </div>
      <p className="text-right">
        <Button onClick={() => onAdd(id)}>Add to Cart</Button>
      </p>
    </article>
  );
}

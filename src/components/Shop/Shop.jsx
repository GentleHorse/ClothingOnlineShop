export default function Shop({ children }) {
  return (
    <section className="w-[70%] my-8 mx-auto">
      <h2 className="text-2xl uppercase mb-2 text-amber-100">
        Elegant Clothing For Everyone
      </h2>

      <ul className="list-none m-0 p-0 grid grid-cols-auto-fit-20rem gap-8">
        {children}
      </ul>
    </section>
  );
}

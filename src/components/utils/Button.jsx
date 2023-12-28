export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-amber-700 hover:bg-amber-600 text-amber-200 text-lg border-none rounded-md py-2 px-4 m-4 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}

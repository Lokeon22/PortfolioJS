export function Input({ place, name, type }) {
  return (
    <input
      className="bg-black border-2 border-gray-500 py-2 px-1 rounded focus:outline-none text-slate-200"
      type={type}
      autoComplete="off"
      role="presentation"
      name={name}
      placeholder={place}
      required
    />
  );
}

const Input = ({
  type = "text",
  label,
  name,
  value,
  onChange,
  placeholder,
  options = [],
  required = false,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-3 py-2 border bg-[#242424] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full px-3 py-2 bg-[#242424] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white placeholder:text-[17px]"
        />
      )}
    </div>
  );
};

export default Input;

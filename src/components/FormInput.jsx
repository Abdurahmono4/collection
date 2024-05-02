function FormInput({ name, defaultValue, label, type }) {
  return (
    <div className="form-control">
      <label htmlFor="" className="w-full">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          type={type}
          name={name}
          className="input input-bordered w-full"
          placeholder="type here "
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
}

export default FormInput;

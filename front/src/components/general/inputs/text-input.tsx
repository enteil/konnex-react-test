export type TextInputDTO = {
  value: string;
  label: string;
  placeholder: string;
  onChange: any;
};
export const TextInput = (props: TextInputDTO) => {
  const { value, label, placeholder, onChange } = props;
  return (
    <>
      <div className="InputGroupStyles">
        <label htmlFor="name" className="InputLabelStyles">
          {label}
        </label>
        <input
          id={label}
          placeholder={placeholder}
          className={"InputStyles"}
          type={"text"}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export type TextInputDTO = {
  value: string;
  onChange: any;
};
export const NameInput = (props: TextInputDTO) => {
  const { value, onChange } = props;
  return (
    <>
      <div className="InputGroupStyles">
        <label htmlFor="name" className="InputLabelStyles">
          Nombre
        </label>
        <input
          id={"name"}
          placeholder={"Tu nombre"}
          className={"InputStyles"}
          type={"text"}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

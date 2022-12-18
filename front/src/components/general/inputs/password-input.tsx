export type TextInputDTO = {
  value: string;
  onChange: any;
};
export const PasswordInput = (props: TextInputDTO) => {
  const { value, onChange } = props;
  return (
    <>
      <div className="InputGroupStyles">
        <label htmlFor="password" className="InputLabelStyles">
          Contraseña
        </label>
        <input
          id={"password"}
          placeholder={"******"}
          className={"InputStyles"}
          type={"password"}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

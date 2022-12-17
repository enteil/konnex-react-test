export type TextInputDTO = {
  value: string;
  onChange: any;
};
export const PasswordInput = (props: TextInputDTO) => {
  const { value, onChange } = props;
  return (
    <>
      <label htmlFor="password" className="InputLabelStyles">
        Contraseña
      </label>
      <input
        id={"password"}
        className={"InputStyles"}
        type={"password"}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

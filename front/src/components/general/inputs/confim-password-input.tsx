export type TextInputDTO = {
  value: string;
  onChange: any;
};
export const ConfirmPasswordInput = (props: TextInputDTO) => {
  const { value, onChange } = props;
  return (
    <>
      <div className="InputGroupStyles">
        <label htmlFor="confirmPassword" className="InputLabelStyles">
          Confirmar Contraseña
        </label>
        <input
          id={"confirmPassword"}
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

export type TextInputDTO = {
  value: string;
  onChange: any;
};
export const EmailInput = (props: TextInputDTO) => {
  const { value, onChange } = props;
  return (
    <>
      <div className="InputGroupStyles">
        <label htmlFor="email" className="InputLabelStyles">
          Email
        </label>
        <input
          id={"email"}
          placeholder={"correo@mail.com"}
          className={"InputStyles"}
          type={"email"}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

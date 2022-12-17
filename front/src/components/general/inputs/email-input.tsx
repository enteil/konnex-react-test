export type TextInputDTO = {
  value: string;
  onChange: any;
};
export const EmailInput = (props: TextInputDTO) => {
  const { value, onChange } = props;
  return (
    <>
      <label htmlFor="email" className="InputLabelStyles">
        Email
      </label>
      <input
        id={"email"}
        className={"InputStyles"}
        type={"email"}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

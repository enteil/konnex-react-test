export type SecondaryButtonDTO = {
  name: string;
  type: any;
  onChange?: any;
};
export const SecondaryButton = (props: SecondaryButtonDTO) => {
  const { name, type, onChange } = props;
  return (
    <button className={"SecondaryButtonStyles"} type={type} onChange={onChange}>
      {name}
    </button>
  );
};

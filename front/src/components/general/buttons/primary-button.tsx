export type PrimaryButtonDTO = {
  name: string;
  type: any;
  onChange?: any;
};
export const PrimaryButton = (props: PrimaryButtonDTO) => {
  const { name, type, onChange } = props;
  return (
    <button className={"PrimaryButtonStyles"} type={type} onChange={onChange}>
      {name}
    </button>
  );
};

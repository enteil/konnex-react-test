export type PrimaryButtonDTO = {
  name: string;
  type: any;
  onClick?: any;
};
export const PrimaryButton = (props: PrimaryButtonDTO) => {
  const { name, type, onClick } = props;
  return (
    <button className={"PrimaryButtonStyles"} type={type} onClick={onClick}>
      {name}
    </button>
  );
};

export type SecondaryButtonDTO = {
  name: string;
  type: any;
  onClick?: any;
};
export const SecondaryButton = (props: SecondaryButtonDTO) => {
  const { name, type, onClick } = props;
  return (
    <button className={"SecondaryButtonStyles"} type={type} onClick={onClick}>
      {name}
    </button>
  );
};

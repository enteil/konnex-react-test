export type TitleDTO = {
  name: string;
};
export const SecondaryTitle = (props: TitleDTO) => {
  const { name } = props;
  return (
    <>
      <p className="SecondaryTitleStyles">{name}</p>
    </>
  );
};

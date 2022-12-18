export type TitleDTO = {
  name: string;
};
export const PrimaryTitle = (props: TitleDTO) => {
  const { name } = props;
  return (
    <>
      <p className="PrimaryTitleStyles">{name}</p>
    </>
  );
};

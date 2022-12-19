import { v1 as uuidv1 } from "uuid";
export type TableDTO = {
  headers: any[];
  data: any[];
};
export const Table = (props: TableDTO) => {
  const { headers, data } = props;
  const renderHeadersArr: any[] = [];
  const renderDataArr: any[] = [];
  headers.forEach((item: string) => {
    renderHeadersArr.push(
      <th className="p-1" key={uuidv1()}>
        {item}
      </th>
    );
  });
  data.forEach((item: any) => {
    renderDataArr.push(
      <tr key={uuidv1()}>
        {item.map((element: any) => {
          return (
            <td className="p-1" key={uuidv1()}>
              {element}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <div>
      <table className="table-auto TableStyles">
        <thead>
          <tr>{renderHeadersArr}</tr>
        </thead>
        <tbody>{renderDataArr}</tbody>
      </table>
    </div>
  );
};

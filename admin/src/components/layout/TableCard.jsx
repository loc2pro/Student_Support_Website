import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function TableCard({ list, title, nameTable, colorHeader }) {
  return (
    <Card>
      <CardHeader color={colorHeader} contentPosition="left">
        <h2 classsName="text-white text-2xl">{nameTable}</h2>
      </CardHeader>
      <CardBody>
        <div className=" overflow-y-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {title?.map((item) => (
                  <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list?.map((listItem) => (
                <tr>
                  {title?.map((item, index) => (
                    <th>
                      {listItem[item]},{index}
                    </th>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

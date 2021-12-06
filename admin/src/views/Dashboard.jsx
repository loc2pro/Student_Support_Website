import React, { useContext } from "react";
import StatusCard from "../components/layout/StatusCard";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function Dashboard() {
  const title = ["Mssv", "Ten sinh vien"];
  const list = [
    {
      mssv: "123",
      name: "Nguyen Huu Loc",
    },
    {
      mssv: "12333",
      name: "Nguyen Huu Loc 1",
    },
    {
      mssv: "12344",
      name: "Nguyen Huu Loc 2",
    },
  ];
  return (
    <>
      <div className="bg-light-blue-500 pt-4 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Traffic"
              amount="350,897"
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon="groups"
              title="New Sinh Viên"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
          </div>
        </div>
      </div>
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full ">
          <div className="grid grid-cols-1 px-4 mb-16">
            <Card>
              <CardHeader color="purple" contentPosition="left">
                <h2 classsName="text-white text-2xl">Bảng Sinh Viên</h2>
              </CardHeader>
              <CardBody>
                <div className=" overflow-y-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                          Mssv
                        </th>
                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                          Họ và Tên
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {list?.map((listItem) => (
                        <tr>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {listItem.mssv}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {listItem.name}
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

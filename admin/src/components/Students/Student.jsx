import React from "react";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import { useDispatch } from "react-redux";
import { GET_STUDENT } from "../../contants/studentContant";

function Student({ student, setShowModalUpdate, setShowModalDelete }) {
  const updateRef = React.useRef();
  const deleteRef = React.useRef();
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch({ type: GET_STUDENT, payload: student });
    setShowModalUpdate(true);
  };

  const handleDelete = () => {
    dispatch({ type: GET_STUDENT, payload: student });
    setShowModalDelete(true);
  };

  return (
    <tr>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {student.khoa}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {student.mssv}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {student.name}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {student.email}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {student.dateOfBirth}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        {student.address}
      </th>
      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
        <button
          className="bg-pink-800 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleUpdate}
          ref={updateRef}
        >
          <i class="fas fa-edit"></i>
        </button>
        <button
          className="bg-pink-800 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleDelete}
          ref={deleteRef}
        >
          <i class="fas fa-trash-alt"></i>
        </button>
        <Tooltips placement="top" ref={updateRef}>
          <TooltipsContent color="red" className=" bg-gray-500 text-red-600">
            Update
          </TooltipsContent>
        </Tooltips>
        <Tooltips placement="top" ref={deleteRef}>
          <TooltipsContent color="red" className=" bg-gray-500 text-red-600">
            Delete
          </TooltipsContent>
        </Tooltips>
      </th>
    </tr>
  );
}

export default Student;

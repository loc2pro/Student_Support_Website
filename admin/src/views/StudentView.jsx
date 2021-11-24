import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import {
  getListStudent,
  getListStudentsByMajor,
} from "../actions/studentAction";
import { Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { getListMajors } from "../actions/majorAction";
import Student from "../components/Students/Student";
import CreateStudent from "../components/Students/CreateStudent";
import Updatestudent from "../components/Students/UpdateStudent";
import Deletestudent from "../components/Students/DeleteStudent";
import CreateExcel from "../components/Students/CreateExcel";
import Toast from "../components/Toast";
import Paginations from "../components/Paginations";
import ExportStudent from "../components/Students/ExportStudent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const StudentView = () => {
  const dispatch = useDispatch();
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalAddExcel, setShowModalAddExcel] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyWord, setKeyWord] = useState("");
  const [perPage] = useState(5);
  const [totalPage, settotalPage] = useState(1);
  const { isLoading, students, student, major } = useSelector(
    (state) => state.listStudents
  );
  const [listStudents, setlistStudents] = useState([]);
  const { majors } = useSelector((state) => state.listMajors);

  useEffect(() => {
    const liststudent = students.filter((student) => {
      if (
        student.mssv.toLowerCase().includes(keyWord.toLowerCase()) ||
        student.name.toLowerCase().includes(keyWord.toLowerCase()) ||
        student.email.toLowerCase().includes(keyWord.toLowerCase())
      ) {
        return student;
      }
    });
    console.log("list tìm được:", liststudent);
    settotalPage(Math.ceil(liststudent.length / perPage));
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    setlistStudents(liststudent.slice(indexOfFirst, indexOfLast));
  }, [students, currentPage, perPage, keyWord]);

  const [toast, setToast] = useState({
    show: false,
    success: false,
    message: "",
  });
  useEffect(() => {
    dispatch(getListStudent());
    dispatch(getListMajors());
  }, []);

  const [selected, setSelected] = useState(null);
  const [fileName, setFileName] = useState("ListStudents");
  useEffect(() => {
    if (!major) {
      setSelected(majors[0]);
    } else {
      setSelected(major);
    }
    setFileName(`Student${selected ? selected.tennganh : ""}`);
  }, [majors]);

  useEffect(() => {
    dispatch(getListStudentsByMajor(selected));
    setCurrentPage(1);
    setKeyWord("");
  }, [selected]);

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 10000);
    }
  }, [toast]);

  let body;

  if (isLoading) {
    body = (
      <div class="flex justify-center items-center">
        <div
          class="
       loader
       ease-linear
       rounded-full
       border-8 border-t-8 border-gray-200
       h-32
       w-32
     "
        ></div>
      </div>
    );
  } else {
    body = (
      <>
        <div className="px-3 md:px-8 h-auto -mt-24">
          <div className="container mx-auto max-w-full ">
            <div className="grid grid-cols-1 px-4 mb-16">
              <Card>
                <div className="flex flex-wrap py-2 ">
                  <div className="w-full px-4">
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded">
                      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between flex-row lg:w-auto px-4 lg:static lg:block lg:justify-start">
                          {/* Selection */}
                          {selected && (
                            <Listbox value={selected} onChange={setSelected}>
                              {({ open }) => (
                                <>
                                  <Listbox.Label className="block text-xl font-medium text-white">
                                    Danh sách các nghành
                                  </Listbox.Label>
                                  <div className="mt-0 relative">
                                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <span className="flex items-center">
                                        <span className="ml-3 block truncate">
                                          {selected.tennganh}
                                        </span>
                                      </span>
                                      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon
                                          className="h-5 w-5 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    </Listbox.Button>

                                    <Transition
                                      show={open}
                                      as={React.Fragment}
                                      leave="transition ease-in duration-100"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        {majors.map((major) => (
                                          <Listbox.Option
                                            key={major.id}
                                            className={({ active }) =>
                                              classNames(
                                                active
                                                  ? "text-white bg-indigo-600"
                                                  : "text-gray-900",
                                                "cursor-default select-none relative py-2 pl-3 pr-9"
                                              )
                                            }
                                            value={major}
                                          >
                                            {({ selected, active }) => (
                                              <>
                                                <div className="flex items-center">
                                                  <span
                                                    className={classNames(
                                                      selected
                                                        ? "font-semibold"
                                                        : "font-normal",
                                                      "ml-3 block truncate"
                                                    )}
                                                  >
                                                    {major.tennganh}
                                                  </span>
                                                </div>

                                                {selected ? (
                                                  <span
                                                    className={classNames(
                                                      active
                                                        ? "text-white"
                                                        : "text-indigo-600",
                                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                                    )}
                                                  >
                                                    <CheckIcon
                                                      className="h-5 w-5"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </Listbox.Option>
                                        ))}
                                      </Listbox.Options>
                                    </Transition>
                                  </div>
                                </>
                              )}
                            </Listbox>
                          )}
                        </div>
                        <div
                          className={"lg:flex flex-grow items-center hidden"}
                          id="example-navbar-info"
                        >
                          <div class="container flex justify-center top-2 right-10">
                            <div class="relative h-14">
                              <div class="absolute top-3 left-2">
                                <i class="fa fa-search text-gray-400 z-20 h-8 hover:text-gray-500"></i>{" "}
                              </div>
                              <input
                                type="text"
                                value={keyWord}
                                onChange={(e) => {
                                  setKeyWord(e.target.value);
                                  setCurrentPage(1);
                                }}
                                class="h-12 w-96 pl-11 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                                placeholder="Tìm Kiếm..."
                              />
                              <div class="absolute top-2 right-2">
                                <button
                                  onClick={(e) => {
                                    setKeyWord("");
                                    setCurrentPage(1);
                                  }}
                                  class="h-8 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
                                >
                                  Delete
                                </button>{" "}
                              </div>
                            </div>
                          </div>
                          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                    Actions
                                    <ChevronDownIcon
                                      className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            onClick={(e) =>
                                              setShowModalAdd(true)
                                            }
                                            className={`${
                                              active
                                                ? "bg-green-500 text-white"
                                                : "text-gray-900"
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                          >
                                            Thêm Mới
                                          </button>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            onClick={(e) =>
                                              setShowModalAddExcel(true)
                                            }
                                            className={`${
                                              active
                                                ? "bg-green-500 text-white"
                                                : "text-gray-900"
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                          >
                                            Import Excel
                                          </button>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            onClick={(e) =>
                                              ExportStudent(students, fileName)
                                            }
                                            className={`${
                                              active
                                                ? "bg-green-500 text-white"
                                                : "text-gray-900"
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                          >
                                            Export Excel
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                <CardBody>
                  {listStudents.length > 0 ? (
                    <div className=" overflow-y-auto">
                      <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                          <tr>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              Số Thứ Tự
                            </th>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              Khoa
                            </th>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              Mssv
                            </th>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              Họ Tên
                            </th>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              Email
                            </th>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              Ngày Sinh
                            </th>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              Địa Chỉ
                            </th>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {listStudents.map((listItem, index) => (
                            <Student
                              student={listItem}
                              index={index}
                              setShowModalUpdate={setShowModalUpdate}
                              setShowModalDelete={setShowModalDelete}
                            />
                          ))}
                        </tbody>
                      </table>
                      {totalPage > 1 && (
                        <Paginations
                          setCurrentPage={setCurrentPage}
                          currentPage={currentPage}
                          totalPage={totalPage}
                        />
                      )}
                    </div>
                  ) : (
                    <h1 className="justify-center items-center flex">
                      Không Tìm Thấy Sinh Viên Nào
                    </h1>
                  )}
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {toast && <Toast toast={toast} />}
      {majors.length > 0 && (
        <CreateStudent
          setShowModal={setShowModalAdd}
          showModal={showModalAdd}
          setToast={setToast}
          major={major ? major : majors[0]}
        />
      )}
      {majors.length > 0 && (
        <CreateExcel
          setShowModal={setShowModalAddExcel}
          showModal={showModalAddExcel}
          setToast={setToast}
          major={major ? major : majors[0]}
        />
      )}
      {student && (
        <Updatestudent
          setShowModal={setShowModalUpdate}
          showModal={showModalUpdate}
          setToast={setToast}
          student={student}
        ></Updatestudent>
      )}
      {student && (
        <Deletestudent
          setShowModal={setShowModalDelete}
          showModal={showModalDelete}
          setToast={setToast}
          student={student}
        ></Deletestudent>
      )}
      {body}
    </>
  );
};

export default StudentView;

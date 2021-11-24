import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListSciences } from "../actions/scienceAction";
import Carousel from "react-elastic-carousel";
import CardScience from "../components/Major/CardScience";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import { getListMajors } from "../actions/majorAction";
import Major from "../components/Major/Major";
import CreateMajor from "../components/Major/CreateMajor";
import UpdateMajor from "../components/Major/UpdateMajor";
import DeleteMajor from "../components/Major/DeleteMajor";

const breakPoints = [
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function MajorView() {
  const dispatch = useDispatch();

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    success: false,
    message: "",
  });

  const { isLoading, sciences } = useSelector((state) => state.listSciences);

  const { majors, major, science } = useSelector((state) => state.listMajors);
  const [menuOpen, setMenuOpen] = React.useState(false);
  useEffect(() => {
    dispatch(getListSciences());
    dispatch(getListMajors());
  }, []);

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
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
        <div className="bg-light-blue-500 pt-4 pb-28 px-3 md:px-8 h-auto">
          <div className="container mx-auto max-w-full">
            <Carousel breakPoints={breakPoints}>
              {sciences.map((item) => (
                <CardScience science={item} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="px-3 md:px-8 h-auto -mt-24">
          <div className="container mx-auto max-w-full ">
            <div className="grid grid-cols-1 px-4 mb-16">
              <Card>
                <div className="flex flex-wrap py-2 ">
                  <div className="w-full px-4">
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 rounded">
                      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                          <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#pablo"
                          >
                            {science ? science.tenkhoa : "Tất cả các nghành"}
                          </a>
                          <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                          >
                            <i className="fas fa-bars"></i>
                          </button>
                        </div>
                        <div
                          className={"lg:flex flex-grow items-center hidden"}
                          id="example-navbar-info"
                        >
                          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                              <button
                                onClick={(e) => setShowModalAdd(true)}
                                className="bg-pink-800 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                              >
                                Thêm Mới
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                <CardBody>
                  <div className=" overflow-y-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Mã Khoa
                          </th>
                          <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Tên Khoa
                          </th>
                          <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {majors.map((listItem) => (
                          <Major
                            major={listItem}
                            setShowModalUpdate={setShowModalUpdate}
                            setShowModalDelete={setShowModalDelete}
                          />
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

  return (
    <>
      <div
        className={
          toast.show
            ? "fixed top-28 right-1 z-50 opacity-100 transition-opacity"
            : "fixed top-28 right-1 z-50 opacity-0 transition-opacity"
        }
      >
        <div
          class="
      flex
      w-full
      max-w-sm
      mx-auto
      overflow-hidden
      bg-white
      rounded-lg
      shadow-md
      dark:bg-gray-800
    "
        >
          <div
            class={
              toast.success
                ? "flex items-center justify-center w-12 bg-green-500"
                : "flex items-center justify-center w-12 bg-red-500"
            }
          >
            <i
              class={
                toast.success
                  ? "fas fa-check-circle"
                  : "fas fa-exclamation-circle"
              }
            ></i>
          </div>

          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span
                class={
                  toast.success
                    ? "font-semibold text-green-500 dark:text-green-400"
                    : "font-semibold text-red-500 dark:text-red-400"
                }
              >
                {toast.success ? "Success" : "Error"}
              </span>
              <p class="text-sm text-gray-600 dark:text-gray-200">
                {toast.message}
              </p>
            </div>
          </div>
        </div>
      </div>
      {sciences.length > 0 && (
        <CreateMajor
          setShowModal={setShowModalAdd}
          showModal={showModalAdd}
          setToast={setToast}
          science={science ? science : sciences[0]}
        />
      )}
      {sciences.length > 0 && major && (
        <UpdateMajor
          setShowModal={setShowModalUpdate}
          showModal={showModalUpdate}
          setToast={setToast}
          science={science ? science : sciences[0]}
          major={major}
        />
      )}
      {major && (
        <DeleteMajor
          setShowModal={setShowModalDelete}
          showModal={showModalDelete}
          setToast={setToast}
          major={major}
        />
      )}
      {body}
    </>
  );
}

export default MajorView;

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourses } from "../../actions/coursesAction";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateCourses({
  showModal,
  setShowModal,
  setToast,
  semester,
}) {
  const [coursesForm, setCoursesForm] = useState({
    mahocphan: "",
    tenhocphan: "",
    sotinchi: "",
    sotiet: "",
    semesterId:null,
  });
  const { semesters } = useSelector((state) => state.listSemester);

  const [selected, setSelected] = useState(semester);
  React.useEffect(() => {
    setSelected(semester);
  }, [semester]);

  console.log("test",semester);
  React.useEffect(() => {
    setCoursesForm({
      ...coursesForm,
      semesterId: selected.id,
    });
  }, [selected]);

  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(coursesForm);
    const data = dispatch(createCourses(coursesForm));
    data.then((data) => {
      setToast({
        show: true,
        message: data.message,
        success: data.success,
      });
    });
    resetForm();
  };

  const resetForm = () => {
    setCoursesForm({
      mahocphan: "",
      tenhocphan: "",
      sotinchi: "",
      sotiet: "",
      semesterId:null,
    });
    setShowModal(false);
  };

  const handleChangedInput = (e) => {
    setCoursesForm({ ...coursesForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal size="sm" active={showModal} toggler={resetForm}>
        <ModalHeader toggler={resetForm}>Thêm Mới Môn Học</ModalHeader>
        <ModalBody>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="mahocphan"
              value={coursesForm.mahocphan}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Mã Học Phần"
              require
            />
          </div>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="tenhocphan"
              value={coursesForm.tenhocphan}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Tên Học Phần"
              require
            />
          </div>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="sotinchi"
              value={coursesForm.sotinchi}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Số Tín Chỉ"
              require
            />
          </div>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="sotiet"
              value={coursesForm.sotiet}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Số Tiết"
              require
            />
          </div>
          <div className="mt-6">
            {/* Selection */}
            {selected && 
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    Danh sách các học kỳ
                  </Listbox.Label>
                  <div className="mt-1 relative">
                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">
                          {selected.tenhocky}
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
                        {semesters.map((semester) => (
                          <Listbox.Option
                            key={semester.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-3 pr-9"
                              )
                            }
                            value={semester}
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
                                    {semester.tenhocky}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
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
}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={resetForm}
            ripple="dark"
          >
            Close
          </Button>

          <Button color="green" onClick={handleCreate} ripple="light">
            Tạo Mới
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

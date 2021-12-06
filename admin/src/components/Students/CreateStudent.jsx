import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { createStudent } from "../../actions/studentAction";
import FormData from "form-data";
import axios from "axios";
import api from "../../api";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateStudent({
  showModal,
  setShowModal,
  setToast,
  major,
}) {
  const [studentForm, setstudentForm] = useState({
    name: "",
    khoa: null,
    email: "",
    image: null,
    dateOfBirth: "",
    address: "",
    MajorId: major.id,
  });

  const dispatch = useDispatch();
  const { majors } = useSelector((state) => state.listMajors);
  const handleCreate = (e) => {
    // e.preventDefault();
    // console.log(studentForm);
    // const data = dispatch(createStudent(studentForm));
    // console.log(data);
    // data.then((data) => {
    //   setToast({
    //     show: true,
    //     message: data.message
    //       ? data.message
    //       : `Thêm sinh viên ${studentForm.name} thành công`,
    //     success: data.success,
    //   });
    // });
    // resetForm();

    //test
    e.preventDefault();
    const data = new FormData();
    data.append("name", studentForm.name);
    data.append("khoa", studentForm.khoa);
    data.append("email", studentForm.email);
    data.append("dateOfBirth", studentForm.dateOfBirth);
    data.append("address", studentForm.address);
    data.append("MajorId", studentForm.MajorId);
    data.append("image", studentForm.image);
    console.log(studentForm);
    const create = dispatch(createStudent(data));
    create.then((data) => {
      setToast({
        show: true,
        message: data.message
          ? data.message
          : `Thêm sinh viên ${studentForm.name} thành công`,
        success: data.success,
      });
    });
    resetForm();
  };

  const resetForm = () => {
    setstudentForm({
      name: "",
      khoa: null,
      image: null,
      email: "",
      dateOfBirth: "",
      address: "",
      MajorId: major.id,
    });
    setShowModal(false);
  };

  const handleChangedInput = (e) => {
    setstudentForm({ ...studentForm, [e.target.name]: e.target.value });
  };

  const [selected, setSelected] = useState(major);
  React.useEffect(() => {
    setSelected(major);
  }, [major]);

  React.useEffect(() => {
    setstudentForm({
      ...studentForm,
      MajorId: selected.id,
    });
  }, [selected]);
  return (
    <>
      <Modal
        className="min-w-5xl"
        size="regular"
        active={showModal}
        toggler={resetForm}
      >
        <ModalHeader toggler={resetForm}>Thêm mới nghành</ModalHeader>
        <ModalBody>
          <div className="">
            <Input
              type="number"
              color="lightBlue"
              name="khoa"
              value={studentForm.khoa}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Khóa"
              require
            />
          </div>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="name"
              id="name"
              value={studentForm.name}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Họ và Tên"
              require
            />
          </div>
          <div className="mt-6">
            <Input
              type="file"
              color="lightBlue"
              name="image"
              id="image"
              onChange={(e) => {
                e.preventDefault();
                const file = e.target.files[0];
                // const data = new FormData();
                // data.append("image", file);
                setstudentForm({ ...studentForm, image: file });
                // console.log("Data", data);
                console.log(file);

                //
                // let reader = new FileReader();
                // reader.readAsDataURL(file);
                // reader.onload((e) => {
                //   setstudentForm({ ...studentForm, image: e.target.result });
                // console.log("Data", e.target.result);
                // });
              }}
              size="lg"
              placeholder="Image"
              require
            />
          </div>

          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="email"
              id="email"
              value={studentForm.email}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Email"
              require
            />
          </div>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="dateOfBirth"
              value={studentForm.dateOfBirth}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Ngày Sinh"
              require
            />
          </div>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="address"
              value={studentForm.address}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Địa Chỉ"
              require
            />
          </div>
          <div className="mt-6">
            {/* Selection */}
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    Danh sách các nghành
                  </Listbox.Label>
                  <div className="mt-1 relative">
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

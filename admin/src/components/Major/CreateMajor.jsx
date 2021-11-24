import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { createMajor } from "../../actions/majorAction";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateMajor({
  showModal,
  setShowModal,
  setToast,
  science,
}) {
  const [majorForm, setmajorForm] = useState({
    tennganh: "",
    manganh: "",
    ScienceId: science.id,
  });

  const dispatch = useDispatch();
  const { sciences } = useSelector((state) => state.listSciences);
  const handleCreate = (e) => {
    e.preventDefault();
    const data = dispatch(createMajor(majorForm));
    console.log(data);
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
    setmajorForm({
      tennganh: "",
      manganh: "",
      ScienceId: science.id,
    });
    setShowModal(false);
  };

  const handleChangedInput = (e) => {
    setmajorForm({ ...majorForm, [e.target.name]: e.target.value });
  };

  const [selected, setSelected] = useState(science);
  React.useEffect(() => {
    setSelected(science);
  }, [science]);
  React.useEffect(() => {
    setmajorForm({
      ...majorForm,
      ScienceId: selected.id,
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
              type="text"
              color="lightBlue"
              name="manganh"
              value={majorForm.manganh}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Mã Ngành"
              require
            />
          </div>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="tennganh"
              value={majorForm.tennganh}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Tên Ngành"
              require
            />
          </div>
          <div className="mt-6">
            {/* Selection */}
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    Danh sách các
                  </Listbox.Label>
                  <div className="mt-1 relative">
                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">
                          {selected.tenkhoa}
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
                        {sciences.map((science) => (
                          <Listbox.Option
                            key={sciences.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-3 pr-9"
                              )
                            }
                            value={science}
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
                                    {science.tenkhoa}
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

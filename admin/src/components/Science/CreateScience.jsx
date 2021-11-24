import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { createScience } from "../../actions/scienceAction";

export default function CreateScience({ showModal, setShowModal, setToast }) {
  const [scienceForm, setScienceForm] = useState({
    tenkhoa: "",
    makhoa: "",
  });

  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    const data = dispatch(createScience(scienceForm));
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
    setScienceForm({
      tenkhoa: "",
      makhoa: "",
    });
    setShowModal(false);
  };

  const handleChangedInput = (e) => {
    setScienceForm({ ...scienceForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal size="sm" active={showModal} toggler={resetForm}>
        <ModalHeader toggler={resetForm}>Thêm Mới Khoa</ModalHeader>
        <ModalBody>
          <div className="">
            <Input
              type="text"
              color="lightBlue"
              name="makhoa"
              value={scienceForm.makhoa}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Mã Khoa"
              require
            />
          </div>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="tenkhoa"
              value={scienceForm.tenkhoa}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Tên Khoa"
              require
            />
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

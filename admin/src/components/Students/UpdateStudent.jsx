import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { updateStudent } from "../../actions/studentAction";
export default function Updatestudent({
  showModal,
  setShowModal,
  student,
  setToast,
}) {
  const [studentForm, setstudentForm] = useState({
    name: student.name,
    email: student.email,
    dateOfBirth: student.dateOfBirth,
    address: student.address,
    id: student.id,
  });

  useEffect(() => {
    setstudentForm({
      name: student.name,
      email: student.email,
      dateOfBirth: student.dateOfBirth,
      address: student.address,
      id: student.id,
    });
  }, [student]);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = dispatch(updateStudent(studentForm));
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
    setShowModal(false);
  };

  const handleChangedInput = (e) => {
    setstudentForm({ ...studentForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal size="sm" active={showModal} toggler={resetForm}>
        <ModalHeader toggler={resetForm}>Cập nhập Sinh Viên</ModalHeader>
        <ModalBody>
          <div className="">
            <Input
              type="text"
              color="lightBlue"
              name="name"
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
              type="text"
              color="lightBlue"
              name="email"
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
              placeholder="Địa chỉ"
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

          <Button color="green" onClick={handleUpdate} ripple="light">
            Lưu
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

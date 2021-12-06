import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { updateSemester } from "../../actions/semesterAction";

export default function UpdateSemester({
  showModal,
  setShowModal,
  semester,
  setToast,
}) {
  const [semesterForm, setSemesterForm] = useState({
    tenhocky: semester.tenhocky,
    PlanStudyId: semester.PlanStudyId,
    id: semester.id,
  });

  useEffect(() => {
    setSemesterForm({
      tenkehoach: semester.tenhocky,
      PlanStudyId: semester.PlanStudyId,
      id: semester.id,
    });
  }, [semester]);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(semesterForm);
    const data = dispatch(updateSemester(semesterForm));
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
    setSemesterForm({
      tenhocky: "",
    });
    setShowModal(false);
  };

  const handleChangedInput = (e) => {
    setSemesterForm({ ...semesterForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal size="sm" active={showModal} toggler={resetForm}>
        <ModalHeader toggler={resetForm}>Cập nhập học kỳ</ModalHeader>
        <ModalBody>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="tenhocky"
              value={semesterForm.tenhocky}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Tên Học Kỳ"
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

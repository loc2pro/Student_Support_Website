import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { updatePlanStudy } from "../../actions/planStudyAction";
import { updateCourses } from "../../actions/coursesAction";

export default function UpdateCourses({
  showModal,
  setShowModal,
  course,
  setToast,
}) {
  const [coursesForm, setCoursesForm] = useState({
    mahocphan: course.mahocphan,
    tenhocphan: course.tenhocphan,
    sotinchi: course.sotinchi,
    sotiet: course.sotiet,
    semesterId: course.SemesterId,
    id: course.id,
  });

  useEffect(() => {
    setCoursesForm({
      mahocphan: course.mahocphan,
      tenhocphan: course.tenhocphan,
      sotinchi: course.sotinchi,
      sotiet: course.sotiet,
      semesterId: course.SemesterId,
      id: course.id,
    });
  }, [course]);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(coursesForm);
    const data = dispatch(updateCourses(coursesForm));
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
    });
    setShowModal(false);
  };

  const handleChangedInput = (e) => {
    setCoursesForm({ ...coursesForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal size="sm" active={showModal} toggler={resetForm}>
        <ModalHeader toggler={resetForm}>Cập nhập môn học</ModalHeader>
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
          </div>{" "}
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="sotinchi"
              value={coursesForm.sotinchi}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Số Tín Ch"
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
          </div>{" "}
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

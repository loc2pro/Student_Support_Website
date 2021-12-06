import Button from "@material-tailwind/react/Button";
import Label from "@material-tailwind/react/Label";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteSemester } from "../../actions/semesterAction";

export default function DeleteSemester({
  showModal,
  setShowModal,
  semester,
  setToast,
}) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(semester.id);
    const data = dispatch(deleteSemester(semester.id));
    data.then((data) => {
      setToast({
        show: true,
        message: data.message,
        success: data.success,
      });
    });
    setShowModal(false);
  };

  return (
    <>
      <Modal size="sm" active={showModal} toggler={(e) => setShowModal(false)}>
        <ModalHeader toggler={(e) => setShowModal(false)}>
          Bạn có muốn xóa học kỳ này?
        </ModalHeader>
        <ModalBody>
          <Label color="lightBlue" size="xl">
            {semester.tenhocky}
          </Label>
        </ModalBody>
        <ModalFooter>
          <Button
            color="red"
            buttonType="link"
            onClick={(e) => setShowModal(false)}
            ripple="dark"
          >
            Close
          </Button>

          <Button color="green" onClick={handleDelete} ripple="light">
            Đồng ý
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

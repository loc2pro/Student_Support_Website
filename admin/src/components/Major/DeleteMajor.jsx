import React from "react";
import { useDispatch } from "react-redux";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Label from "@material-tailwind/react/Label";
import { deleteMajor } from "../../actions/majorAction";

export default function DeleteMajor({
  showModal,
  setShowModal,
  major,
  setToast,
}) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    const data = dispatch(deleteMajor(major.id));
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
          Bạn có muốn xóa nghành này?
        </ModalHeader>
        <ModalBody>
          <Label color="lightBlue" size="xl">
            {major.tennganh}
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

import React from "react";
import { useDispatch } from "react-redux";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Label from "@material-tailwind/react/Label";
import { deleteScience } from "../../actions/scienceAction";

export default function DeleteScience({
  showModal,
  setShowModal,
  science,
  setToast,
}) {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    const data = dispatch(deleteScience(science.id));
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
          Bạn có muốn xóa khoa này?
        </ModalHeader>
        <ModalBody>
          <Label color="lightBlue" size="xl">
            {science.tenkhoa}
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

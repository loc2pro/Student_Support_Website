import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { updatePlanStudy } from "../../actions/planStudyAction";

export default function UpdatePlanStudy({
  showModal,
  setShowModal,
  planstudy,
  setToast,
}) {
  const [planstudyForm, setPlanStudyForm] = useState({
    tenkehoach: planstudy.tenkhoa,
    id: planstudy.id,
  });

  useEffect(() => {
    setPlanStudyForm({
      tenkehoach: planstudy.tenkhoa,
      id: planstudy.id,
    });
  }, [planstudy]);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(planstudyForm);
    const data = dispatch(updatePlanStudy(planstudyForm));
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
    setPlanStudyForm({
      tenkehoach: "",
    });
    setShowModal(false);
  };

  const handleChangedInput = (e) => {
    setPlanStudyForm({ ...planstudyForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal size="sm" active={showModal} toggler={resetForm}>
        <ModalHeader toggler={resetForm}>Cập nhập niên giám</ModalHeader>
        <ModalBody>
          <div className="mt-6">
            <Input
              type="text"
              color="lightBlue"
              name="tenkehoach"
              value={planstudyForm.tenkehoach}
              onChange={handleChangedInput}
              size="lg"
              outline={true}
              placeholder="Tên Kế Hoạch"
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

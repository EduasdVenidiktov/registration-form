import css from "./RegistrationPage.module.css";

// import { ModalForm } from "../../components/ModalForm/ModalForm";
import logo from "../../assets/icons/logo.svg";
import webinar from "../../assets/icons/webinar.svg";
import start from "../../assets/icons/start.svg";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { useState } from "react";
import { ModalRegistration } from "../../components/ModalRegistration/ModalRegistration";

export function RegistrationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.registerContainer}>
      <div className={css.registerContainerInner}>
        <div className={css.registerLeftBox}>
          <img src={logo} alt="logo icon" className={css.registerLogoIcon} />
          <img src={webinar} alt="logo icon" className={css.registerImage} />
          <img src={start} alt="logo icon" className={css.registerImageStart} />
          <h1 className={css.registerTitle}>
            Навчіться створювати Excel-таблиці на pro-рівні
          </h1>
          <p className={css.registerText}>
            Опануйте функціонал Microsoft Excel, автоматизуйте свою роботу та
            створюйте таблиці швидко і в задоволення
          </p>
          <div className={css.registerForm}>
            <h2 className={css.timerTitle}>Реєструйся просто зараз</h2>
            {/* <Timer /> */}
            <button
              type="button"
              onClick={openModal}
              className={css.formBtnSubmit}
            >
              Зареєструватися
            </button>
          </div>
        </div>
      </div>

      <ModalWindow isOpen={isModalOpen} onClose={closeModal}>
        <ModalRegistration closeModal={closeModal} />
      </ModalWindow>
    </div>
  );
}

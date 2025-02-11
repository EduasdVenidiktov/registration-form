import css from "./ModalForm.module.css";
import { useForm } from "react-hook-form";

import logo from "../../assets/icons/logo.svg";
import close from "../../assets/icons/close.svg";
import flag from "../../assets/icons/flag.svg";
import checkpoint from "../../assets/icons/checkpoint.svg";
import { Timer } from "../Timer/Timer";

export function ModalForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={css.modalContainer}>
      <div className={css.headerModal}>
        <img src={logo} alt="logo icon" />
        <img src={close} alt="close icon" />
      </div>
      <div className={css.timerBox}>
        <h2 className={css.timerTitle}>Реєструйся просто зараз</h2>

        <Timer />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <input
            {...register("name", { required: true })}
            placeholder="Введи своє ім’я"
            className={css.formInput}
          />
          {errors.name && (
            <span className={css.formErrorMessage}>
              Це поле обов&#39;язкове
            </span>
          )}
        </div>

        <div className={css.inputWrapper}>
          <input
            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
            placeholder="Введи свій E-mail"
            className={css.formInput}
          />
          {errors.email && (
            <span className={css.formErrorMessage}>
              Некоректний формат email
            </span>
          )}
        </div>

        <div className={css.inputWrapper}>
          <img src={flag} alt="flag icon" className={css.flagIcon} />

          <input
            {...register("phone", { required: true })}
            placeholder="+380 95 -- -- ---"
            className={css.formInputNumber}
          />
          {errors.phone && (
            <span className={css.formErrorMessage}>
              Це поле обов&#39;язкове
            </span>
          )}
        </div>

        <div className={css.formInputCheckBox}>
          <img
            src={checkpoint}
            alt="checkpoint icon"
            className={css.checkpointIcon}
          />
          <p className={css.formText}>
            Згоден з <a href="/privacy-policy">Політика конфіденційності</a> та{" "}
            <a href="/terms-of-service">Умови користування послугами</a>
          </p>
        </div>

        <input
          type="submit"
          value="Зареєструватися"
          className={css.formBtnSubmit}
        />
      </form>
    </div>
  );
}

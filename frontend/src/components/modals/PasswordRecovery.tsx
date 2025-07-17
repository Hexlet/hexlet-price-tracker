import React from "react";
import "./style.css";

const PasswordRecovery: React.FC = () => {
  return (
    <div className="password-recovery">
      <button className="password-recovery__close">

      </button>
      <h2 className="password-recovery__title">
        Восстановление пароля
      </h2>
      <label className="password-recovery__label">
        Введите ваш email
        <input type="email" placeholder="E-mail" className="password-recovery__input" />
      </label>
      <div className="password-recovery__actions">
        <button className="password-recovery__submit">
          Отправить ссылку
        </button>
        <button className="password-recovery__cancel">
          Отмена
        </button>
      </div>
    </div>
  )
}

export default PasswordRecovery;

import React from "react";
import { useForm } from "react-hook-form";

interface PasswordRecoveryProps {
  isVisible: boolean;
  onClose: () => void;
}

const PasswordRecovery: React.FC<PasswordRecoveryProps> = ({ isVisible, onClose }) => {
  const { register } = useForm();

  if (!isVisible) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-neutral-800 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <form
        className="rounded-lg p-5 bg-white w-sm"
      >
        <h2
          className="text-2xl mb-1 font-bold"
        >
          Восстановление пароля
        </h2>
        <label
          className="text-sm flex flex-col gap-2.5 mb-4"
        >
          Введите ваш email
          <input
            {...register("email", {
              required: "This is required.",
            })}
            type="email"
            placeholder="E-mail"
            className="border-1 rounded-sm w-full pl-4 pt-2 pb-2"
          />
        </label>
        <div className="flex justify-between">
          <button
            className="!bg-blue-600 text-white">
            Отправить ссылку
          </button>
          <button
            type="button"
            onClick={() => onClose()}
            className="!bg-white"
          >
            Отмена
          </button>
        </div>
      </form >
    </div >
  )
}

export default PasswordRecovery;

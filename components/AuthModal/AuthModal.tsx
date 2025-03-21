"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Socials from "@/components/AuthModal/Socials";
import Switcher from "@/components/AuthModal/Switcher";
import LoginForm from "@/components/AuthModal/LoginForm";
import SignUpForm from "@/components/AuthModal/SignUpForm";

import { AuthType } from "@/utils/types";

export default function AuthModal({
  isOpen,
  onClose,
  authType,
}: {
  isOpen: boolean;
  onClose: () => void;
  authType: AuthType;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen || false);
  const [localAuthType, setLocalAuthType] = useState<AuthType>(authType || "login");

  const handleModalClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  useEffect(() => {
    setIsModalOpen(isOpen);
    setLocalAuthType(authType);
  }, [isOpen, authType]);

  return (
    <div className={`app-modal ${isModalOpen ? "app-modal--open" : ""}`}>
      <div className="app-modal__backdrop" onClick={handleModalClose}></div>
      <div className="app-modal__content">
        <div className="app-l-flex-row app-l-flex-row__align-center app-l-flex-row__space-between">
          <Switcher onFormSwitch={setLocalAuthType} authType={localAuthType} />
          <button className="app-btn app-btn--with-icon app-h-ml-4" onClick={handleModalClose}>
            <Image src="/close.svg" alt="close" width={24} height={24} />
          </button>
        </div>
        {localAuthType === "login" ? (
          <LoginForm onSubmit={() => setIsModalOpen(false)} />
        ) : (
          <SignUpForm onSubmit={() => setIsModalOpen(false)} />
        )}
        <div className="app-h-text-center app-h-mt-6">
          <p>Use social networks</p>
          <Socials />
          {localAuthType === "login" && (
            <a href="#" className="app-h-mt-6 app-link">
              Forgot your password?
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

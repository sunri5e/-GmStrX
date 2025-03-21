"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Socials from "@/components/AuthModal/Socials";
import Switcher from "@/components/AuthModal/Switcher";

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
        <form className="app-l-flex-col app-l-flex-col__align-center app-h-mt-6">
          {localAuthType === "login" ? (
            <>
              <div className="app-form-group">
                <input type="text" placeholder="Email" className="app-form-control" />
              </div>
              <div className="app-form-group">
                <input type="password" placeholder="Password" className="app-form-control" />
              </div>
            </>
          ) : (
            <>
              <div className="app-form-group">
                <input type="text" placeholder="Email or Mobile" className="app-form-control" />
              </div>
              <div className="app-form-group">
                <input type="password" placeholder="Password" className="app-form-control" />
              </div>
              <div className="app-form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="app-form-control"
                />
              </div>
              <div className="app-h-mt-6">
                <div className="app-checkbox">
                  <input type="checkbox" id="useSocial" />
                  <label htmlFor="useSocial">Use social networks</label>
                </div>
              </div>
            </>
          )}
          {localAuthType === "login" ? (
            <button className="app-btn app-btn--regular app-h-w100 app-h-mt-6">
              <span className="app-btn__text">Login</span>
            </button>
          ) : (
            <button className="app-btn app-btn--regular app-h-w100 app-h-mt-6">
              <span className="app-btn__text">Registration</span>
            </button>
          )}
        </form>
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

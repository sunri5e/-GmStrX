"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import { setToastState } from "@/store/features/authSlice";

import Link from "next/link";
import AuthModal from "@/components/AuthModal/AuthModal";
import Toast from "@/components/Toast";
import { AuthType } from "@/utils/types";

export default function Home() {
  const isUserLogged = useSelector((state: RootState) => state.auth.isUserLogged);
  const toastWasShown = useSelector((state: RootState) => state.auth.toastWasShown);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState<AuthType>("login");
  const [toast, setToast] = useState<boolean>(false);
  const dispatch = useDispatch();

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3400); // 400ms animation + 3s view
  };

  useEffect(() => {
    if (isUserLogged && !toastWasShown) {
      showToast();
      dispatch(setToastState(true));
    }
  }, [isUserLogged, toastWasShown]);

  return (
    <>
      <div className="app-btn-group app-h-ph-7 app-h-mt-40">
        <button
          className="app-btn app-btn--regular app-btn--w100"
          onClick={() => {
            setIsModalOpen(true);
            setAuthType("signUp");
          }}
        >
          <span className="app-btn__text">Registration</span>
        </button>
        <button
          className="app-btn app-btn--regular app-btn--w100"
          onClick={() => {
            setIsModalOpen(true);
            setAuthType("login");
          }}
        >
          <span className="app-btn__text">Login</span>
        </button>
      </div>
      <div className="app-h-mt-10">
        <Link href="/orders" className="app-btn app-btn--regular app-btn--w100 app-btn--nav">
          <span className="app-btn__text">Orders</span>
        </Link>
      </div>
      <AuthModal isOpen={isModalOpen} authType={authType} onClose={() => setIsModalOpen(false)} />
      {toast && <Toast />}
    </>
  );
}

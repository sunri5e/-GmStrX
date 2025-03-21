"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

import Link from "next/link";
import AuthModal from "@/components/AuthModal/AuthModal";
import { AuthType } from "@/utils/types";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState<AuthType>("login");
  const isUserLogged = useSelector((state: RootState) => state.auth.isUserLogged);

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
        <Link
          href="/orders"
          className={`app-btn app-btn--regular app-btn--w100 app-btn--nav ${isUserLogged ? "" : "app-btn--disabled"}`}
        >
          <span className="app-btn__text">Orders</span>
        </Link>
      </div>
      <AuthModal isOpen={isModalOpen} authType={authType} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

import { AuthType } from "@/utils/types";

export default function Switcher({
  onFormSwitch,
  authType,
}: {
  onFormSwitch: (type: AuthType) => void;
  authType: AuthType;
}) {
  const [activeMethod, setActiveMethod] = useState<AuthType>(authType);
  const haloRef = useRef<HTMLSpanElement>(null);
  const loginRef = useRef<HTMLButtonElement>(null);
  const signUpRef = useRef<HTMLButtonElement>(null);

  const onMethodChange = (type: AuthType) => {
    setActiveMethod(type);
    onFormSwitch(type);
  };

  useEffect(() => {
    setActiveMethod(authType);
  }, [authType]);

  useEffect(() => {
    const itemRef = activeMethod === "login" ? loginRef : signUpRef;

    if (itemRef.current && haloRef.current) {
      const item = itemRef.current;
      const halo = haloRef.current;

      halo.style.width = `${item.offsetWidth}px`;
      halo.style.left = `${item.offsetLeft}px`;
    }
  }, [activeMethod]);

  return (
    <div className="app-switcher">
      <span className="app-switcher__halo" ref={haloRef}></span>
      <button
        className={`app-switcher__item ${authType === "login" ? "app-switcher__item--active" : ""}`}
        onClick={() => onMethodChange("login")}
        ref={loginRef}
      >
        Login
      </button>
      <button
        className={`app-switcher__item ${authType === "signUp" ? "app-switcher__item--active" : ""}`}
        onClick={() => onMethodChange("signUp")}
        ref={signUpRef}
      >
        Registration
      </button>
    </div>
  );
}

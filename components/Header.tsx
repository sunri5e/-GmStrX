import Link from "next/link";
import Image from "next/image";

import Dropdown from "./Dropdown";
import { currencyData, countriesData } from "@/utils/helpersAndConsts";

export default function Header() {
  return (
    <header className="app-header">
      <nav className="app-l-flex-row app-l-flex-row__space-between app-h-w100">
        <Link href="/" className="app-header__logo" aria-label="Home"></Link>
        <div className="app-l-flex-row app-header-group">
          <Dropdown items={currencyData} />
          <Dropdown items={countriesData} />
          <div className="app-header__btn">
            <Image src="/GB.svg" alt="GB icon" width={20} height={20} />
          </div>
        </div>
      </nav>
    </header>
  );
}

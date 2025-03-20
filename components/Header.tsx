import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="app-header">
      <nav className="app-l-flex-row app-l-flex-row__space-between app-h-w100">
        <Link href="/" className="app-header__logo"></Link>
        <div className="app-l-flex-row app-header-group">
          <div className="app-header__btn app-h-pr-4">
            <Image src="/usd.svg" alt="USD icon" width={20} height={20} />
            USD
          </div>
          <div className="app-header__btn app-h-pr-4">
            <Image src="/GB.svg" alt="GB icon" width={20} height={20} />
            EN
          </div>
          <div className="app-header__btn">
            <Image src="/GB.svg" alt="GB icon" width={20} height={20} />
          </div>
        </div>
      </nav>
    </header>
  );
}

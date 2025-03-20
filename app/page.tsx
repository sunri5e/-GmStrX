import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="app-btn-group app-h-ph-7 app-h-mt-40">
        <button className="app-btn app-btn--regular app-btn--w100">
          <span className="app-btn__text">Registration</span>
        </button>
        <button className="app-btn app-btn--regular app-btn--w100">
          <span className="app-btn__text">Login</span>
        </button>
      </div>
      <div className="app-h-mt-10">
        <Link href="/orders" className="app-btn app-btn--regular app-btn--w100 app-btn--nav">
          <span className="app-btn__text">Orders</span>
        </Link>
      </div>
    </>
  );
}

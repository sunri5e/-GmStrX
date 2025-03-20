import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="app-l-main">
      <Header />
      <main className="app-l-container app-h-pt-13">
        <div className="app-btn-group app-h-ph-7 app-h-mt-40">
          <button className="app-btn app-btn--w100">
            <span className="app-btn__text">Registration</span>
          </button>
          <button className="app-btn app-btn--w100">
            <span className="app-btn__text">Login</span>
          </button>
        </div>
        <div className="app-h-mt-10">
          <button className="app-btn app-btn--w100 app-btn--nav">
            <span className="app-btn__text">Orders</span>
          </button>
        </div>
      </main>
    </div>
  );
}

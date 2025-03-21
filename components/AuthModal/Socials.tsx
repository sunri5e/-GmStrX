import Image from "next/image";

export default function Socials() {
  return (
    <div className="app-socials app-h-mh-a app-l-flex-row__justify-center app-h-mt-3">
      <button>
        <Image src="/google.svg" alt="google login" width={32} height={32} />
      </button>
      <button>
        <Image src="/apple.svg" alt="apple login" width={32} height={32} />
      </button>
      <button>
        <Image src="/fb.svg" alt="facebook login" width={32} height={32} />
      </button>
      <button>
        <Image src="/discord.svg" alt="discord login" width={32} height={32} />
      </button>
      <button>
        <Image src="/telegram.svg" alt="telegram login" width={32} height={32} />
      </button>
    </div>
  );
}

import { useState } from "react";
import { AuthModal, type AuthMode } from "@/components/navigation/AuthModal";

export type AuthButtonsProps = {
  containerVariant: string;
  buttonVariant: string;
};

export const AuthButtons = (props: AuthButtonsProps) => {
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);

  return (
    <div
      className={`box-border caret-transparent outline-[3px] no-underline ${props.containerVariant}`}
    >
      <button
        type="button"
        onClick={() => setAuthMode("login")}
        className={`bg-neutral-800 caret-transparent text-sm font-semibold leading-[21px] outline-[3px] text-center no-underline px-[18px] py-[9px] rounded-[10px] hover:bg-zinc-800 ${props.buttonVariant}`}
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => setAuthMode("register")}
        className={`bg-green-500 caret-transparent text-sm font-semibold leading-[21px] outline-[3px] text-center no-underline px-[18px] py-[9px] rounded-[10px] hover:bg-green-600 ${props.buttonVariant}`}
      >
        Registration
      </button>

      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onModeChange={setAuthMode}
        />
      )}
    </div>
  );
};

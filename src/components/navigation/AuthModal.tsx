import { useEffect, useState } from "react";
import { X, Phone, Mail, Lock, ChevronDown, Shield } from "lucide-react";

export type AuthMode = "login" | "register";

export type AuthModalProps = {
  mode: AuthMode;
  onClose: () => void;
  onModeChange: (mode: AuthMode) => void;
};

type Method = "phone" | "email";

export const AuthModal = (props: AuthModalProps) => {
  const { mode, onClose, onModeChange } = props;
  const isLogin = mode === "login";

  const [method, setMethod] = useState<Method>("phone");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only — no backend wired up yet.
    console.log("[v0] auth submit", { mode, method, contact });
  };

  const socials = [
    { key: "google", label: "Google", node: <span className="text-lg font-bold">G</span> },
    { key: "vk", label: "VK", node: <span className="text-base font-extrabold tracking-tight">VK</span> },
    { key: "telegram", label: "Telegram", node: <TelegramIcon /> },
    { key: "yandex", label: "Yandex", node: <span className="text-lg font-bold">Я</span> },
    { key: "walletconnect", label: "WalletConnect", node: <WalletConnectIcon /> },
    { key: "metamask", label: "MetaMask", node: <MetaMaskIcon /> },
    { key: "shield", label: "Wallet", node: <Shield className="h-5 w-5" fill="currentColor" strokeWidth={0} /> },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={isLogin ? "Login" : "Register"}
      onClick={onClose}
    >
      <div
        className="relative mt-2 w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:mt-0 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-neutral-900">
            {isLogin ? "Login" : "Register"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Phone / Email toggle */}
        <div className="mt-6 grid grid-cols-2 gap-2 rounded-2xl bg-neutral-100 p-1.5">
          <button
            type="button"
            onClick={() => setMethod("phone")}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 text-base font-semibold transition-colors ${
              method === "phone"
                ? "bg-blue-600 text-white"
                : "text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            <Phone className="h-5 w-5" fill="currentColor" strokeWidth={0} />
            Phone
          </button>
          <button
            type="button"
            onClick={() => setMethod("email")}
            className={`flex items-center justify-center gap-2 rounded-xl py-3 text-base font-semibold transition-colors ${
              method === "email"
                ? "bg-blue-600 text-white"
                : "text-neutral-900 hover:bg-neutral-200"
            }`}
          >
            <Mail className="h-5 w-5" fill="currentColor" strokeWidth={0} />
            <span className={method === "email" ? "text-white" : "text-neutral-900"}>
              Email
            </span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          {/* Contact field */}
          {method === "phone" ? (
            <div className="flex items-center gap-2 rounded-2xl bg-neutral-100 px-4 py-4">
              <button
                type="button"
                className="flex items-center gap-1.5 text-neutral-700"
                aria-label="Select country"
              >
                <span className="text-xl leading-none" aria-hidden="true">
                  🇮🇳
                </span>
                <ChevronDown className="h-5 w-5" />
              </button>
              <span className="h-6 w-px bg-neutral-300" aria-hidden="true" />
              <span className="font-bold text-neutral-900">+91</span>
              <input
                type="tel"
                inputMode="numeric"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="00000 00000"
                className="min-w-0 flex-1 bg-transparent text-lg font-medium text-neutral-900 placeholder:text-neutral-400 outline-none"
              />
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-2xl bg-neutral-100 px-4 py-4">
              <Mail className="h-5 w-5 shrink-0 text-neutral-500" />
              <span className="h-6 w-px bg-neutral-300" aria-hidden="true" />
              <input
                type="email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Email"
                className="min-w-0 flex-1 bg-transparent text-lg font-medium text-neutral-900 placeholder:text-neutral-400 outline-none"
              />
            </div>
          )}

          {/* Password field */}
          <div className="flex items-center gap-3 rounded-2xl bg-neutral-100 px-4 py-4">
            <Lock className="h-5 w-5 shrink-0 text-neutral-500" />
            <span className="h-6 w-px bg-neutral-300" aria-hidden="true" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="min-w-0 flex-1 bg-transparent text-lg font-medium text-neutral-900 placeholder:text-neutral-400 outline-none"
            />
          </div>

          {/* Confirm password (register only) */}
          {!isLogin && (
            <div className="flex items-center gap-3 rounded-2xl bg-neutral-100 px-4 py-4">
              <Lock className="h-5 w-5 shrink-0 text-neutral-500" />
              <span className="h-6 w-px bg-neutral-300" aria-hidden="true" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="min-w-0 flex-1 bg-transparent text-lg font-medium text-neutral-900 placeholder:text-neutral-400 outline-none"
              />
            </div>
          )}

          {isLogin && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-base font-semibold text-blue-600 hover:text-blue-700"
              >
                Forgot your password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="mt-1 rounded-2xl bg-green-500 py-4 text-lg font-bold text-white hover:bg-green-600"
          >
            {isLogin ? "Log in" : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-neutral-200" aria-hidden="true" />
          <span className="text-base font-medium text-neutral-500">or</span>
          <span className="h-px flex-1 bg-neutral-200" aria-hidden="true" />
        </div>

        {/* Social logins */}
        <div className="flex items-center justify-between gap-2">
          {socials.map((s) => (
            <button
              key={s.key}
              type="button"
              aria-label={`Continue with ${s.label}`}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
            >
              {s.node}
            </button>
          ))}
        </div>

        {/* Switch mode */}
        <p className="mt-8 text-center text-lg text-neutral-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <br />
          <button
            type="button"
            onClick={() => onModeChange(isLogin ? "register" : "login")}
            className="mt-1 text-lg font-semibold text-blue-600 hover:text-blue-700"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.14-3.06-1.99 1.93c-.23.23-.42.42-.83.42z" />
  </svg>
);

const WalletConnectIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M6.09 8.6c3.26-3.2 8.56-3.2 11.82 0l.39.39c.16.16.16.42 0 .58l-1.34 1.32c-.08.08-.21.08-.3 0l-.54-.53c-2.28-2.23-5.97-2.23-8.24 0l-.58.57c-.08.08-.21.08-.3 0L5.36 9.6a.41.41 0 010-.58l.73-.42zm14.6 2.72l1.19 1.17c.16.16.16.42 0 .58l-5.38 5.27c-.16.16-.43.16-.59 0l-3.82-3.74a.11.11 0 00-.15 0l-3.82 3.74c-.16.16-.43.16-.59 0L2.12 13.07a.41.41 0 010-.58l1.19-1.17c.16-.16.43-.16.59 0l3.82 3.74c.04.04.11.04.15 0l3.82-3.74c.16-.16.43-.16.59 0l3.82 3.74c.04.04.11.04.15 0l3.82-3.74c.17-.16.43-.16.6 0z" />
  </svg>
);

const MetaMaskIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M21 3l-7.5 5.5 1.4-3.3L21 3zm-18 0l7.4 5.6L9.1 5.2 3 3zm15.4 12.5l-2 3.1 4.3 1.2 1.2-4.2-3.5-.1zm-16.9.1L1.8 19.8 6 18.6l-2-3.1-1.5.1zM8.8 10.6l-1.2 1.8 4.2.2-.1-4.5-2.9 2.5zm6.4 0l-3-2.6-.1 4.6 4.2-.2-1.1-1.8zM9.1 18.6l2.5-1.2-2.2-1.7-.3 2.9zm3.3-1.2l2.5 1.2-.3-2.9-2.2 1.7z" />
  </svg>
);

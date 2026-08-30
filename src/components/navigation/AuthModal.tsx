import { useEffect, useState } from "react";

export type AuthMode = "login" | "register";

export type AuthModalProps = {
  mode: AuthMode;
  onClose: () => void;
  onModeChange: (mode: AuthMode) => void;
};

export const AuthModal = (props: AuthModalProps) => {
  const { mode, onClose, onModeChange } = props;
  const isLogin = mode === "login";

  const [email, setEmail] = useState("");
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
    console.log("[v0] auth submit", { mode, email });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={isLogin ? "Login" : "Registration"}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-neutral-900 border border-white/10 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-white/10 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-white">
          {isLogin ? "Log in" : "Create account"}
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          {isLogin
            ? "Welcome back! Enter your details to continue."
            : "Sign up to get started."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-neutral-300">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="rounded-lg bg-neutral-800 px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-green-500"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-neutral-300">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-lg bg-neutral-800 px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-green-500"
            />
          </label>

          {!isLogin && (
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-neutral-300">
                Confirm password
              </span>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="rounded-lg bg-neutral-800 px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-green-500"
              />
            </label>
          )}

          <button
            type="submit"
            className="mt-2 rounded-[10px] bg-green-500 px-[18px] py-2.5 text-sm font-semibold text-white hover:bg-green-600"
          >
            {isLogin ? "Log in" : "Create account"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-neutral-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => onModeChange(isLogin ? "register" : "login")}
            className="font-semibold text-green-500 hover:text-green-400"
          >
            {isLogin ? "Register" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

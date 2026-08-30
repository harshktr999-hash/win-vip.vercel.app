import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Supabase env vars are injected with the NEXT_PUBLIC_ prefix and exposed to
// the client via Vite's envPrefix config (see vite.config.ts).
const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = (import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) as string;

let client: SupabaseClient | null = null;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Singleton browser client to avoid multiple GoTrue instances.
export const supabase: SupabaseClient = (() => {
  if (client) return client;
  client = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "", {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
  return client;
})();

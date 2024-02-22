import { createClient } from '@supabase/supabase-js'
import { VITE_SUPABASE_URL } from '$lib/config.js';
import { VITE_SUPABASE_ANON_KEY } from '$lib/config.js';

const supabaseUrl = VITE_SUPABASE_URL
const supabaseAnonKey = VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

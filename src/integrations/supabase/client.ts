
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fpdckdnrntglfxqaaifp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZGNrZG5ybnRnbGZ4cWFhaWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5OTk3MjAsImV4cCI6MjA1NzU3NTcyMH0.2fgjrmprY6ee5mFAWQwxaB9Dm4aCmxmsVeHjoSLv4mI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

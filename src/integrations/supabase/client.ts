// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bpljkjvxqturnvxkhvqg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwbGpranZ4cXR1cm52eGtodnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NDcyMjAsImV4cCI6MjA2NDEyMzIyMH0.wqA0Uiws7RA2IGKi23B5Ee7uiCfHF1iz-Lq3JvdhRMo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
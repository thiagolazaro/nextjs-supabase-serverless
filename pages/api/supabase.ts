import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://iseqkvzpeprxogyrnqos.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyODA5MjU0LCJleHAiOjE5NTgzODUyNTR9.FEY1tTUF1YJKKX9dpjWgeyyDwExkkyKWRCnn4q4klxY"
);

export default supabase;
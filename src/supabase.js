//fichier pour connexion supabase
import { createClient } from '@supabase/supabase-js';

const supabaseProjectUrl = process.env.NEXT_PUBLIC_PROJECT_URL;
const supabaseAnonymKey = process.env.NEXT_PUBLIC_PUBLISH_KEY;

export const supabase = createClient(supabaseProjectUrl, supabaseAnonymKey);

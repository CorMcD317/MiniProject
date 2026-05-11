const SUPABASE_URL = "https://cvjdmccwopblebapnbcq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2amRtY2N3b3BibGViYXBuYmNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyMzE3ODUsImV4cCI6MjA5MTgwNzc4NX0.muiYFkCNxojvIwlhx-LhDubRUK7OpLpp0e5zwRznInE";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const { data, error } = await db
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false });
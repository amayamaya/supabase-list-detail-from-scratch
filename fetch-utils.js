const SUPABASE_URL = 'https://yhletbviclmzgnzikzpu.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobGV0YnZpY2xtemduemlrenB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTUzMjIsImV4cCI6MTk2Nzg3MTMyMn0.NSJ1Tw-LlfLsXJF4Y_nS3pwZV2TB7Ru8jvAsLxQLJWg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getStones() {
    // from the dogs table, select all items
    const resp = await client.from('stones').select('*');
    // console.log(resp);
    // and return the response
    return resp.data;
}

export async function getStone(stoneId) {
    // console.log(dogId);
    // from the dogs table, select a single dog who has the matching id
    const resp = await client.from('stones').select('*').match({ id: stoneId }).single();
    // console.log(resp.data);
    return resp.data;
}

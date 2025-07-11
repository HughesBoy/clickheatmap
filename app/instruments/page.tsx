import { createClient } from '@/lib/supabase/server';
import { addInstrument } from './actions'
export default async function Instruments() {
  const supabase = await createClient(); // ✅ await here

  const { data: instruments, error } = await supabase
    .from('instruments')
    .select();

  if (error) {
    return <pre>Error: {JSON.stringify(error, null, 2)}</pre>;
  }

  return(
    <div>
      <pre>{JSON.stringify(instruments, null, 2)}</pre>

      <div>
        <form action={addInstrument}>
          <input name='name' type='text' placeholder='saxaphone' />
          <button type='submit'>add instrument</button>
        </form>
      </div>
    </div>
  )
}
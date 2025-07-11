"use server"
import { createClient } from "@/lib/supabase/server";

export async function addInstrument(formData: FormData){
  
  const name = formData.get('name') as string;
  if (!name) return {error: "name is required"}
  
  const supabase = await createClient();

  const { error } = await supabase.from('instruments').insert({name})
  
  if(error){
    return {error: error.message}
  }
  return {success: true}
}
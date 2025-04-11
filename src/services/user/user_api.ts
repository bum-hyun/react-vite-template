import supabase from '@/utils/supabase/client';

const database = '';

export const getUser = async (id: number): Promise<IUser> => {
  const { data, error } = await supabase.from(database).select('*').eq('id', id).single();

  if (error) {
    throw new Error(`GET Error: ${error.message}`);
  }

  return data;
};

import { supabase } from '@/supabase';

const postDB = 'post_info';

export const insertPostBase = async (
  userName,
  description,
  categorie,
  publicUrl,
) => {
  const { data, error } = await supabase.from(postDB).insert([
    {
      user_name: userName,
      description: description,
      categorie: categorie,
      image_url: publicUrl,
    },
  ]);
  if (error) throw error;
  return data;
};

export const selectAllPost = async () => {
  const { data, error } = await supabase
    .from(postDB)
    .select('*')

    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const selectPostBase = async (categorie) => {
  const { data, error } = await supabase
    .from(postDB)
    .select('*')
    .eq('categorie', categorie)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const uploadImage = async (file) => {
  const fileName = `${Date.now()}-${file.name}`;

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('photo')
    .upload(fileName, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage.from('photo').getPublicUrl(fileName);
  return data.publicUrl;
};

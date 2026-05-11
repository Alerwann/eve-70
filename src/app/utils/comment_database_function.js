import { supabase } from '@/supabase';

const commentDB = 'comment';

export const insertCommentBase = async (userName, content, post_id) => {
  const { data, error } = await supabase.from(commentDB).insert([
    {
      user_name: userName,
      content: content,
      post_id: post_id,
    },
  ]);
  if (error) throw error;
  return data;
};

export const selectCommentBase = async (idPost) => {
  const { data, error } = await supabase
    .from(commentDB)
    .select('*')
    .eq('post_id',idPost)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};

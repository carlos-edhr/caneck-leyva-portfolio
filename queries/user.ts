"use server";

import { db } from "@/lib/db";
import { createClient } from "@/supabase/server";

export const getUser = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return null;
  }

  return user;
};

export const currentUser = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return null;
  }

  const userEmail = user?.email;

  const userProfile = await db.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  return userProfile;
};

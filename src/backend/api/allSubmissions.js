// src/backend/api/allSubmissions.js
import { supabase } from "../supabaseClient";

/**
 * Fetches all submissions from the database.
 *
 * @returns {Array|null} - List of submissions or null if an error occurs.
 */
export const getAllSubmissions = async () => {
  const { data, error } = await supabase.from("submissions").select(
    `
    *,
    profile(
        email
    )
    `
  );

  if (error) {
    console.error("Error fetching submissions:", error.message);
    return null;
  }

  return data;
};

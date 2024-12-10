// src/backend/api/sliderQuestionScore.js

import { supabase } from "../supabaseClient";

// Returns number of submissions for an specific formId

/**
 * Returns the number of submissions for a specific formId.
 *
 * @param {string} formId - The ID of the form.
 * @returns {number|null} - The count of submissions or null if an error occurs.
 */

export const getSliderQuestionScore = async (formId, field) => {

  const { count, error } = await supabase
    .from('submissions')
    .select('*', { count: 'exact', head: true })
    .eq('form_id', formId);

  if (error) {
    console.error("Error fetching submissions count:", error.message);
    return null;
  }

  return count;
};
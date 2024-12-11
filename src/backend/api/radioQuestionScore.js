// src/backend/api/radioQuestionScore.js

import { supabase } from "../supabaseClient";

/**
 * Returns the frequency distribution of a specific slider field for a given formId.
 *
 * @param {string} formId - The ID of the form.
 * @param {string} field - The slider field to analyze.
 * @returns {object|null} - An object with frequencies of values in the radio field, or null on error.
 */
export const getRadioQuestionScore = async (formId, field) => {
  try {
    const { data, error } = await supabase
      .from("submissions")
      .select(`responses->>${field}`, { count: "exact" })
      .eq("form_id", formId);

    if (error) {
      console.error("Error fetching submissions count:", error.message);
      return null;
    }

    // Initialize a frequency object (assuming slider values range from 1 to 5)
    const frequencies = {
      0: 0, // Yes
      1: 0, // No
    };

    // Calculate frequencies for the slider field
    data.forEach((entry) => {
      const value = Number(entry[field]);
      // Check in range of slider
      if (value >= 0 && value <= 1) {
        frequencies[value] += 1;
      }
    });

    return frequencies;
  } catch (error) {
    console.error("Unexpected error fetching slider question score:", error);
    return null;
  }
};

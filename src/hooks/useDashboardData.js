// src/hooks/useDashboardData.js

import { useState, useEffect } from "react";
import { getNumberOfSubmissions } from "../backend/api/numberOfSubmissions";
import { supabase } from "../backend/supabaseClient";
import { getScore } from "../utils/getScore";

const useDashboardData = (formId, formQuestions) => {
  const [submissionCount, setSubmissionCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [radioFrequencies, setRadioFrequencies] = useState([]);
  const [sliderFrequencies, setSliderFrequencies] = useState([]);
  const [maxScore, setMaxScore] = useState(0);
  const [sumScore, setSumScore] = useState(0);

  const [sectionLevel, setSectionLevel] = useState({});

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);

      try {
        // Fetch the number of submissions
        const count = await getNumberOfSubmissions(formId);

        if (count !== null) {
          setSubmissionCount(count);
        } else {
          setError("Failed to fetch the number of submissions.");
        }

        // Fetch frequencies for radio and slider questions
        const newRadioFrequencies = {
          "Sí": 0,
          "No": 0,
        };
        const newSliderFrequencies = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        };

        if (count){
          const {data, error} = await supabase
            .from('submissions')
            .select('responses')
            .eq('form_id', formId)
            .order("created_at", { ascending: false }) // Obtener la más reciente
            .limit(1)
            .single(); // Obtener un solo registro


          let curMaxScore = 0;
          let curSumScore = 0;

          for (const question of formQuestions) {

            if (question.type === "radio" && question.options.length === 2
              && question.options.includes("Sí") && question.options.includes("No")
            ) {
              const answer = data.responses[question.name];
              curMaxScore += 1;
              if(answer) {
                if(answer === "Sí") {
                  curSumScore += 1;
                  newRadioFrequencies["Sí"] += 1;
                }
                if(answer === "No") {
                  newRadioFrequencies["No"] += 1;
                }
              }
            } else if (question.type === "slider") {
              const answer = data.responses[question.name];
              curMaxScore += 4;
              if(answer) {
                curSumScore += answer;
                newSliderFrequencies[answer + 1] += 1;
              }
            }
          }

          setRadioFrequencies([
            { id: "Sí", label: "Sí", value: newRadioFrequencies["Sí"] ? newRadioFrequencies["Sí"] : 0 },
            { id: "No", label: "No", value: newRadioFrequencies["No"] ? newRadioFrequencies["No"] : 0 },
          ]);
          setSliderFrequencies( Object.entries(newSliderFrequencies || {}).map(([Puntaje, count]) => ({ Puntaje, Frecuencia: count })) );

          // Compute section level using getScore utility
          setMaxScore(curMaxScore);
          setSumScore(curSumScore);
          const score = getScore(1, curMaxScore, curSumScore);
          if (score !== null) {
            setSectionLevel(score);

          } else {
            setError("Failed to compute score of the section.");
          }
        }
        else{

          setRadioFrequencies([
            { id: "Sí", label: "Sí", value: 0 },
            { id: "No", label: "No", value: 0 },
          ]);
          setSliderFrequencies( Object.entries(newSliderFrequencies || {}).map(([Puntaje, count]) => ({ Puntaje, Frecuencia: count })) );

        }
      } catch (err) {
        setError("An unexpected error occurred.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [formId, formQuestions]);

  return {
    submissionCount,
    radioFrequencies,
    sliderFrequencies,
    sectionLevel,
    maxScore,
    sumScore,
    loading,
    error,
  };
};

export default useDashboardData;

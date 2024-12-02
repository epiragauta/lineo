import { useState, useEffect } from "react";

const useFormPersistence = (localStorageKey, initialState, userId) => {
  const uniqueKey = `${localStorageKey}_${userId}`; // Unique key for each user


  const [formData, setFormData] = useState(() => {
    if (!userId) return initialState; // If no user is logged in, use initial state
    const savedData = localStorage.getItem(uniqueKey);
    return savedData ? JSON.parse(savedData) : initialState;
  });

  useEffect(() => {
    if (userId) {
      localStorage.setItem(uniqueKey, JSON.stringify(formData));
    }
  }, [formData, uniqueKey, userId]);

  return [formData, setFormData];
};

export default useFormPersistence;

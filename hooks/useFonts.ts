// hooks/useFonts.ts
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

// Tipos para las fuentes
type FontMap = {
  [key: string]: string; // Ruta al archivo de fuente
};

type FontLoadingResult = {
  loading: boolean;
  error: Error | null;
  loaded: boolean;
};

const useFonts = (fontMap: FontMap): FontLoadingResult => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync(fontMap);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadFonts();
  }, [fontMap]);

  return {
    loading,
    error,
    loaded: !loading && !error
  };
};

export default useFonts;
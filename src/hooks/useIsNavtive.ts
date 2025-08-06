import { useEffect, useState } from "react";

export function useIsNative(): boolean {
  const [isMyApp, setIsMyApp] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsMyApp(navigator.userAgent.includes("FilarmonikiApp"));
    }
  }, []);
  return isMyApp;
}
// nativefier --user-agent "FilarmonikiApp/1.0 (Nativefier)" http://localhost:3000
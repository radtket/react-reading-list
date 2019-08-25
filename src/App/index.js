import React, { lazy, Suspense, useEffect } from "react";
import { useUser } from "../context/user-context";

// Components
import { FullPageSpinner } from "../components";

const loadAuthenticatedApp = () => import("./AuthenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import("./UnauthenticatedApp"));

const App = () => {
  const user = useUser();
  // pre-load the authenticated side in the background while the user's
  // filling out the login form.
  useEffect(() => {
    loadAuthenticatedApp();
  }, []);
  return (
    <Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
};

export default App;

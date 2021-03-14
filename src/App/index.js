import React, { lazy, Suspense, useEffect } from "react";

// Components
import { FullPageSpinner } from "../components";

// Context
import { useUser } from "../context/user-context";

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

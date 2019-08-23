import React, { lazy, Suspense, useEffect } from "react";
import { useUser } from "./context/user-context";
import { FullPageSpinner } from "./components/lib";

const loadAuthenticatedApp = () => import("./authenticated-app");
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import("./unauthenticated-app"));

function App() {
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
}

export default App;

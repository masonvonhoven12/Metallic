import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "../i18n.js";
import "../style/index.css";
import "../proxy.js";
import Background from "../components/background.js";
import SettingsLayout from "../SettingsLayout.js";
import { ObfuscateLayout } from "../components/obfuscate";

var Home = React.lazy(() => import("./home.js"));
var SettingsAppearance = React.lazy(() => import("./settings/appearance.js"));
var SettingsSearch = React.lazy(() => import("./settings/search.js"));
var SettingsTab = React.lazy(() => import("./settings/tab.js"));
var SettingsUI = React.lazy(() => import("./settings/ui.js"));
var Apps = React.lazy(() => import("./apps.js"));
var Games = React.lazy(() => import("./games.js"));
var Support = React.lazy(() => import("./support.js"));
var Credits = React.lazy(() => import("./credits.js"));
var Privacy = React.lazy(() => import("./privacy.js"));
var Error = React.lazy(() => import("./error.js"));

function App() {
  return (
    <>
      <ObfuscateLayout />
      <Background />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<></>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/settings/appearance.html"
          element={
            <SettingsLayout>
              <Suspense fallback={<></>}>
                <SettingsAppearance />
              </Suspense>
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/search.html"
          element={
            <SettingsLayout>
              <Suspense fallback={<></>}>
                <SettingsSearch />
              </Suspense>
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/tab.html"
          element={
            <SettingsLayout>
              <Suspense fallback={<></>}>
                <SettingsTab />
              </Suspense>
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/ui.html"
          element={
            <SettingsLayout>
              <Suspense fallback={<></>}>
                <SettingsUI />
              </Suspense>
            </SettingsLayout>
          }
        />
        <Route
          path="/apps.html"
          element={
            <Suspense fallback={<></>}>
              <Apps />
            </Suspense>
          }
        />
        <Route
          path="/games.html"
          element={
            <Suspense fallback={<></>}>
              <Games />
            </Suspense>
          }
        />
        <Route
          path="/support.html"
          element={
            <Suspense fallback={<></>}>
              <Support />
            </Suspense>
          }
        />
        <Route
          path="/credits.html"
          element={
            <Suspense fallback={<></>}>
              <Credits />
            </Suspense>
          }
        />
        <Route
          path="/privacy.html"
          element={
            <Suspense fallback={<></>}>
              <Privacy />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<></>}>
              <Error />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;

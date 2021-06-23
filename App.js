import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPPRoJEXOY_baxhM83Cn5krJJQN7-oGg0",
  authDomain: "mealstogo-68347.firebaseapp.com",
  projectId: "mealstogo-68347",
  storageBucket: "mealstogo-68347.appspot.com",
  messagingSenderId: "915716772956",
  appId: "1:915716772956:web:dde417ef281bc95dc08299",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

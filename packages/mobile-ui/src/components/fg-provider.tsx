import React, { useEffect } from "react";
import { View, ViewProps } from "react-native";
import { useColorScheme } from "nativewind";
import { OverlayProvider } from "@gluestack-ui/core/overlay/creator";
import { ToastProvider } from "@gluestack-ui/core/toast/creator";
import { config } from "../../components/ui/gluestack-ui-provider/config";
import type { ModeType } from "../../components/ui/gluestack-ui-provider";

let warnedAboutDarkMode = false;

export function FGUIProvider({
  mode = "light",
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps["style"];
}) {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    try {
      setColorScheme(mode);
    } catch (err) {
      if (!warnedAboutDarkMode) {
        warnedAboutDarkMode = true;
        console.warn(
          "[FGUIProvider] NativeWind could not switch color scheme. " +
            "Make sure your tailwind.config.js has `darkMode: \"class\"` at the top level. " +
            "Falling back to system color scheme. Original error:",
          err
        );
      }
      try {
        setColorScheme("system");
      } catch {
        /* ignore — last resort */
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const effectiveScheme = (colorScheme ?? "light") as "light" | "dark";

  return (
    <View
      style={[
        config[effectiveScheme],
        { flex: 1, height: "100%", width: "100%" },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}

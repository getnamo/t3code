import { createFileRoute } from "@tanstack/react-router";
import { PrivacySettingsPanel } from "../components/settings/PrivacySettingsPanel";

export const Route = createFileRoute("/_chat/settings/privacy")({
  component: PrivacySettingsPanel,
});

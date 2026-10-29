import { Switch } from "../ui/switch";
import { SettingsPageContainer, SettingsRow, SettingsSection } from "./settingsLayout";
import { searchableSetting } from "./settingsSearch";

export function PrivacySettingsPanel() {
  return (
    <SettingsPageContainer>
      <SettingsSection id="privacy" title="Privacy">
        <SettingsRow
          {...searchableSetting("privacy-telemetry")}
          description="Product analytics and relay tracing are off by default in this build."
          control={
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Off</span>
              <Switch checked={false} disabled aria-label="Telemetry" />
            </div>
          }
        />
      </SettingsSection>
    </SettingsPageContainer>
  );
}

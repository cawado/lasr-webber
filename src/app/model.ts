import { FormControl } from "@angular/forms";
import { Axis } from "../../projects/web-chart/src/lib/web-chart.model";

export const QUALITY_GOALS = [
    "Wartbarkeit", "Portierbarkeit","Kompatibilität", "Skalierbarkeit", "Betreibbarkeit", 
    "Funktionale Eignung", "Performanz", "Zuverlässigkeit", "Benutzbarkeit", "Sicherheit", 
    "Safty", "Nachhaltigkeit", "Kosteneffizienz", "Auditierbarkeit"
].sort();

export interface Risk extends Axis {
    goal: number,
    lasrPoints: number,
    color?: string; 
}
export type RiskForm = {[K in keyof Risk]: FormControl<Risk[K]>}
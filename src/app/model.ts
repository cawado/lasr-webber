import { Axis } from "../../projects/web-chart/src/lib/web-chart.model";

export interface Risk extends Axis {
    expected: number,
    current: number,
    color?: string; 
}

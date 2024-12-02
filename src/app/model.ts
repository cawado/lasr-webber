import { Axis } from "./web/web.model";

export interface Risk extends Axis {
    expected: number,
    current: number,
    color: string; 
}

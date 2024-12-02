import { DEFAULT_AXIS_STYLE_OPTIONS, DEFAULT_STYLE_OPTIONS } from "./web.default";
import { Point, WebAxisStyleType, WebInputType, WebValueStyleType } from "./web.model";

export function optionsTransform<T>(fullValue:T) {
    return (parts: Partial<T>):T => ({
        ...fullValue,
        ...parts
    });
}

export const optionsStyleTransform = (input: WebInputType<WebValueStyleType> ): WebValueStyleType => ({
    ...DEFAULT_STYLE_OPTIONS, 
    ...input,
    lineColor: input.lineColor || input.color || DEFAULT_STYLE_OPTIONS.lineColor,
    pointColor: input.pointColor || input.color || DEFAULT_STYLE_OPTIONS.pointColor,
});

export const axisStyleOptionsTransform = (input: WebInputType<WebAxisStyleType> ): WebAxisStyleType => ({
    ...DEFAULT_AXIS_STYLE_OPTIONS, 
    ...input,
    lineColor: input.lineColor || input.color || DEFAULT_AXIS_STYLE_OPTIONS.lineColor,
    axisColor: input.axisColor || input.color || DEFAULT_AXIS_STYLE_OPTIONS.axisColor,
});


export function pointOnCycle(angle: number, center: Point, radius: number):Point {
    const radian = angle * (Math.PI / 180);
    return {
        x: center.x + radius * Math.cos(radian),
        y: center.y + radius * Math.sin(radian),
        rotation: angle
    }
}

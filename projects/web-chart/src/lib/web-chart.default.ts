import { WebAxisStyleType, WebValueStyleType } from "./web-chart.model"

export const DEFAULT_AXIS_CONFIG_OPTIONS = {
    center:{x: 110,y: 110},
    startDegree:270,
    degreePerAxis:72,
    max:100,
    steps:[25,50,75,100],
}

export const DEFAULT_AXIS_STYLE_OPTIONS: WebAxisStyleType = {
    axisColor: 'currentColor', 
    axisOpacity: 1,
    axisWidth: 2, 
    lineColor: 'currentColor',
    lineOpacity: 0.25,
    lineWidth: 1
}

export const DEFAULT_STYLE_OPTIONS: WebValueStyleType = {
    lineWidth: 1.25,
    lineColor: 'currentColor', 
    lineOpacity: 0.25, 
    pointWidth: 2.5,
    pointColor: 'currentColor',
    pointOpacity: 1, 
}

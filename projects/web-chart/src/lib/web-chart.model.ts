type Prefixed<T,P extends string> = {
    [K in keyof T as `${P}${Capitalize<string & K>}`]: T[K];
  };
  
type StyleOptions = { width: number, color: string, opacity: number }
export type WebAxisStyleType = Prefixed<StyleOptions,'axis'> & Prefixed<StyleOptions,'line'>; 
export type WebValueStyleType = Prefixed<StyleOptions,'line'> & Prefixed<StyleOptions,'point'>; 
export type WebInputType<T> = Partial<T> & {color: string}

export type AllStyleOptionType = {
    web: WebAxisStyleType, 
    current: WebValueStyleType,
    expected: WebValueStyleType
    difference: WebValueStyleType
}
export type AllStyleOptionInputType = {
    [K in keyof AllStyleOptionType]: WebInputType<AllStyleOptionType[K]>;
};

export type WebHighlights = {
    current: boolean, 
    expected: boolean,
    difference: boolean
}
export type WebAxisConfig = {
    center:Point,
    startDegree:number,
    degreePerAxis:number,
    max:number,
    steps:number[],
}

export interface Axis {
    active: boolean; 
    label: string;
    endPoint?: Point 
}

export interface ValuedAxis extends Axis {
    expected: number,
    current: number,
    color?: string; 
}

export interface Point {
    x: number; 
    y:number; 
    rotation ?: number;
}
export type Line = {
    start: Point; 
    end: Point;
}
export type Point = {x: number, y: number};
export type Vector = {v: number, w: number};
export type Trio<U> = [U, U, U];
export type Verticies = Trio<Point>;


export function rotate(c: Point, p: Point, angle: number): Point {
    let radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (p.x - c.x)) + (sin * (p.y - c.y)) + c.x,
        ny = (cos * (p.y - c.y)) - (sin * (p.x - c.x)) + c.y;
    return {x: nx, y: ny};
}

export function squaredDistance(start: Point, end: Point): number {
    let dx = start.x - end.x,
        dy = start.y - end.y;

    return (dx ** 2) + (dy ** 2); 
}

export function distance(start: Point, end: Point): number {
    return Math.sqrt(squaredDistance(start, end));
}

export function inverseCosine(a: [number, number | undefined], b: [number, number | undefined], c: number): number {
    return Math.acos(((a[1] ?? (a[0] ** 2)) + (b[1] ?? (b[0] ** 2)) - c) / (2 * a[0] * b[0]));
}


export class Line {

    static fromPointAndVector(p: Point, v: Vector) {
        return this.fromPoints(p, {
            x: p.x + v.v,
            y: p.y + v.w,
        });
    }

    static fromPoints(start: Point, end: Point): Line {
        let m = (end.y - start.y) / (end.x - start.x),
        c = start.y - (start.x * m);

        return new Line(m, c);
    }

    m: number;
    c: number;
    constructor(m: number, c: number) {
        this.m = m;
        this.c = c;
    }

    public intercept(line: Line): Point | void {
        if (line.c == this.c) return;

        let x = (this.c - line.c) / (line.m - this.m),
            y = this.m * x + this.c;

        return {x: x, y: y};
    }
}
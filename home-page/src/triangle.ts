import { distance, Point, rotate, Trio, Verticies } from "./geometry";

export class Triangle {
    static equilateral(c: Point, r: number, phi: number): Triangle {
        let top = {x: c.x, y: c.y + r},
            first = rotate(c, top, phi);

        return new Triangle([
            first,
            rotate(c, first, 120),
            rotate(c, first, 240),
        ]);
    }
    
    points: Verticies;
    constructor(points: Verticies) {
        this.points = points;
    }

    // ? HELPER METHODS !

    // ? CENTRE

    public get centre (): Point {
        return {
            x: this.x.reduce((p, c, _) => p + c) / 3,
            y: this.y.reduce((p, c, _) => p + c) / 3
        }
    }

    // ? Y-axis.

    public get y (): Trio<number> {
        return this.points.map((point, _) => point.y) as Trio<number>;
    }

    public get minY (): number {
        return Math.min(...this.y);
    }

    public get maxY (): number {
        return Math.max(...this.y);
    }

    // ? X-axis

    public get x (): Trio<number> {
        return this.points.map((point, _) => point.y) as Trio<number>;
    }

    public get minX (): number {
        return Math.min(...this.x);
    }

    public get maxX (): number {
        return Math.max(...this.x);
    }

    // ? Function to determine the wether
    // ? a point lies within the bounds of
    // ? the triangle.

    // public pointInTriangle(point: Point): boolean {

    //     let s_bc = squaredDistance(this.points[0], this.points[1]), // a
    //         s_cd = squaredDistance(this.points[0], point),          // cd / b
    //         s_bd = squaredDistance(this.points[1], point),
    //         bc = Math.sqrt(s_bc),
    //         cd = Math.sqrt(s_cd),
    //         cbd = inverseCosine([bc, s_bc], [cd, s_cd], s_bd),
    //         s_ab = squaredDistance(this.points[1], this.points[2]),
    //         ab = Math.sqrt(s_ab),
    //         s_ca = squaredDistance(this.points[0], this.points[2]),
    //         cba = inverseCosine([ab, s_ab], [bc, s_bc], s_ca),
    //         ceb = 180 - (cba + cbd),
    //         ce = (Math.sin(cba) * bc) / Math.sin(ceb);

    //     console.log(cbd);
    //     return ce > cd && cd < bc;
    // }

    public distanceTo(point: Point): number {
        return distance(this.centre, point);
    }

}


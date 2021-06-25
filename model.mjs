function* next() {
    while(t){
        "IOTSZJL".split().forEach((e,i,a) => {
        const n =(a.length-i)*random()
        yield a[n]
        a[n]= e
    })}
}
const rot = [[1,0,0,1],[0,1,-1,0],[-1,0,0,-1],[0,-1,1,0]]
export default model = {
    lines:0,
    level:0,
    pieces:0,
    score:0,
    floor: (new Array()).fill([],0,10),
    hardDrop : (shapes, e, f ,rotation) => shapes.reduce( (a,[x,y]) => {
        const
        [a,b,c,d] = rot[rotation]
        xp = a*x + c*y + e,
        yp = b*x + d*y + f
        return max(a,this.floor[xp].length - yp)
    }),
    freeze: (shapes, e, f, rotation) =>{
        this.pieces++
        const [a,b,c,d] = rot[rotation]
        let ymax = 0, ymin= 20
        for( const [x,y] of shapes) {
            const
                xp = a*x + c*y + e,
                yp = b*x + d*y + f
            ymin = min(yp, ymin)
            ymax = max(yp, ymax)
            this.floor[xp][yp] = true
        }
        const rows = this.floor.slice(ymin, ymax+1).filter( row => this.floor.every(col => col[row]))
        this.lines += rows.length
        this.level = this.line / 10 | 0
        //score = 40 * (n + 1)	100 * (n + 1)	300 * (n + 1)	1200 * (n + 1)

        // update score, lines etc
        for( const row of rows) {
            for( const col of this.floor) {
                col.splice(row) // remove row
                // update score
            }
        }
        for( const col of this.floor )
                // adjust any column to remove trailing undefined (holes)
            while(!col.at(-1) && col.length)col.length--
        return rows
    },

    check: (shapes, e, f, rotation) => {
        const [a,b,c,d] = rot[rotation]
        return shapes.every(([x,y]) => {
            const 
                xp = a*x +c*y + e,
                yp = b*x +d*y + f
            yp>= 0 && this.floor[xp] &&  this.floor[xp][yp]
        })
    }
}

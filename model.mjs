
let lines = 0, level = 0
const shapeQue = []
function* next() {
    while(t){
        "IOTSZJL".split().forEach((e,i,a) => {
        const n =(a.length-i)*random()
        yield a[n]
        a[n]= e
    })}
}

freeze = (shapes, [a,b,c,d,e,f]) =>{

    let ymax = 0, ymin= 20
    for( const [x,y] of shapes) {
        const
        xp = a*x + b*y + c,
        yp = d*x + e*y + f
        ymin = min(yp, ymin)
        ymax = max(yp, ymax)
        floor[xp][yp] = true
    }
    const rows = floor.slice(ymin, ymax+1).filter( row => floor.every(col => col[row]))
    lines += rows.length
    level = line / 10 | 0
    //score = 40 * (n + 1)	100 * (n + 1)	300 * (n + 1)	1200 * (n + 1)

    // update score, lines etc
    for( const row of rows) {
        for( const col of floor) {
            col.splice(row) // remove row
            // update score
        }
    }
    for( const col of floor )
            // adjust any column to remove trailing undefined (holes)
        while(!col.at(-1) && col.length)col.length--
    return rows

},

check = (shapes, [a,b,c,d, e, f]) => {
    shapes.every(([x,y]) => {
        const xp = a*x +b*y + c,
        yp = d*x +e*y + f
        yp>= 0 && floor[xp] &&  floor[xp][yp]
    })
}

blocks = {
    'I': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'O': {blocks:[[-1,-1], [0,-1],  [-1, 0], [0, 0]], spawn:0},
    'T': {blocks:[[-1, 0], [ 0, 0], [1,  0], [0,-1]], spawn:0},
    'S': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'Z': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'J': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'L': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0}
}
let lines = 0, level = 0
const shapeQue = []
function* next() {
    if( shapeQue.length < 6)
        shapeQue.concat("IOTSZJL".split().map((e,i,a) => {
        const n =(a.length-i)*random(),
        t = a[n]
        a[n] = a[i]
        a[i] = t
    }))
    yield shapeQue.shift() 
}

freeze = () =>{
    let ymax = 0, ymin= 20
    for( const [x,y] of shape.blocks) {
        if(rotation|1) [y,x]=[x,y]
        x = active.x + rotation | 2 ? -x : x
        y = active.y + rotation ^ 3 ? -y : y
        ymin = min(y, ymin)
        ymax = max(y, ymax)
        floor[x][y] = true
    }
    const rows = floor.slice(ymin, ymax+1).filter( row => floor.every(col => col[row]))
    lines += rows.length
    level = line / 10 | 0
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

}

function check(){
    active.shape.blocks.every(([x,y]) => {
        if(rotation|1) [y,x]=[x,y]
        x = active.x + rotation | 2 ? -x : x
        y = active.y + rotation ^ 3 ? -y : y
        y>= 0 && floor[x] &&  floor[x][y]
    })
}
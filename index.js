
const model = {
    floor: Array(10).fill([]),
    active: {orient: 0, x: 5,y: 21, shape: undefined},

    move : 
}
move(rotation, xy){

}
document.addEventListener('keydown', event => {
    event.code
    case 'ArrowRight': 
    if( MSF)

    key
})
function tick(){
    if( model.move(down)) shape.y += 1
    else delay(500).then( () => {
        rows = freeze()
        removeRows(rows)

        for( const b of theFloor.querySelectorAll('rect')) {
            if(row.includes(b.y)) theFloor.removeChild(b)
            else {
                b.y += rows.reduce((acc,e)=> acc + b.y > e)
        }
        // score ?
        if( ! spawn() )gameOver()
    })
}

function newBlock() {
    active = game.createElement('g')
    active.innerHTML =
    block.blocks.map( ([x,y]) =>
        `<rect x="${x}" y="${y}" class="${name}" />`
    ).join()
}



function computeN(){
    return min(...realPos().map(([x,y]) => floor[x].length - y))
}

score = 40 * (n + 1)	100 * (n + 1)	300 * (n + 1)	1200 * (n + 1)

setInterval(() => {
    if( drop != 0 ) y++
    else {
        delay(500).then(()=>
            freeze pieces
            active = next
            new next
            drop = check(0,0,0)
            if( drop == 0 )endGame()

        )
    }
    if( no active) makepiece || endgame
    movepiece down
    check grounded
}, 1);

 check = () => realPos().every(([x,y]) => !board[x]?.[y])

    function movex(n){
        if check(n){
            active.x += n
            active.svg.x += n;
            update()
        }
    }
    function rotate(n){
        check() {
            active.svg.transform =
            update()
        }
    }

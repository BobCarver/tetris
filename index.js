const board = []
let piece = []
frontier ? = ()

[0,-2],[0,-1],[0,0],[0,1]

freeze(){
active.parentElement.removeChild(active)
x.forEach(b => '<use x= y= href="#sq" />')
}
removeRow = n => {
    board.forEach(col => {
        col.splice(n)
        while(col.length > 0 && col[col.length])
            col.pop()
    })
    for( const b of document.querySelectorAll('.sq'))
        if(b.y === n ) b.parentElement.removeChild(b)
        if(b.y > n) b.y += 1
}

drop = () => {
    piece.y = ??
}

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
drop
rotate
move
piece.
endGame(){

}
piece.some({x,y} => board[y+1][x])
settle = piece => piece.forEach(({x,y}) => board[y][x] = true)
tick = piece => piece.forEach(l => l.y+repeat); piece.y++

{/* <g id="n">
			<use id="0" y="24" x="120" xlink:href="#x"/>
			<use x="24" xlink:href="#0"/>
			<use x="48" xlink:href="#0"/>
		</g>
<g id' */}

update2 =
if( n === 0) {
    remove lines
    update score
    computer new frontier // will need holes
    if !spawn gameover
} else {
    n--; active.y - 1
}
check() {
    b = x.map((x,y) => [x+basex, y+basey])
    r90: x.map([y,x] => )
    180: x,y => [y+basex+1, x+bsey+1]
    drop = min(...b.map(([,y]) => y-board[x].length))
    return b.every(([x,y]) => !board[x]?.[y])
}
pieces = {
    'I': [[ 0, -2],[ 0, -1],[ 0, 0],[ 0, 1]],
    'L': [[ 0, 0],[-1, 0],[ 0, 1],[ 0, 2]],
    'Lm':[[ 0, 0],[ 0, 1],[ 0, 2],[-1, 2]],
    'O': [[ 0, 0],[ 0, 1],[-1, 0],[-1, 1]],
    'S': [[ 0, 0],[ 0, 1],[-1, 1],[-1, 2]],
    'P': [[ 0, 0],[ 0, 1],[ 0, 2],[-1, 1]],
    'Z': [[-1, 0],[-1, 1],[ 0, 1],[ 0, 2]]
    }

    board = [20][10]
    update = _ => {
        if( am.some(p => board[p[0]][p[1]])) {
            delay(.5)
            am.forEach(p => board[p[0]][p[1]] = true)
            // remove full lines
            (17, 18, 19, 20).forEach(n=>{
                if( board[n].every(e=>e)){
                    board.splice(n,1)
                    board.shift(10[])
                    n++
                }
                window up n lines
            })
            // spawn
            if(am.some(p => board[p[0]][p[1]]))
            return false
        }
        am.forEach(p => ++p[0])
        active.style.y += 1
        return true
    }

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

    m = n => {if( movex(n) ){
        active.forEach(p => p[1] += n)
        active.style.x += n
    }}

    drop = () => {
        n = min(...active.map(p=>{
            for()
        }))
        add n to all pieces maybe in update ?
    }

    rotate = cw =>
    for each orientation
    a[] offset from 0,0

    n = min(... a.map(p => b[p.y]-p.y))

function settle (){
    for( line of ative[rotation].xx){
        floor.push(...line)
    }
    // check for full lines
    for
        if( board.every[])
}
check(){
    pos =
    pos.every(line =>{
        line.every(b=>board[lnumber]?.[b])
    })
}
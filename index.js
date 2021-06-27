const shapes = {
    'I': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'O': {blocks:[[-1,-1], [0,-1],  [-1, 0], [0, 0]], spawn:0},
    'T': {blocks:[[-1, 0], [ 0, 0], [1,  0], [0,-1]], spawn:0},
    'S': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'Z': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'J': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'L': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0}
},
rot = [[1,0,0,1],[0,1,-1,0],[-1,0,0,-1],[0,-1,1,0]],
foo = {
    'ArrowRight':   [ 1, 0, 0],
    'ArrowLeft':    [-1, 0, 0],
    'ArrowUp':      [ 0, 0, 1],
    'X':            [ 0, 0, 1],
    'Ctrl':         [ 0, 0,-1],
    'Z':            [ 0, 0,-1]
},
state = {shape: '',x: 0,y: 0,rotation:0, rate: 1, drop: 20,delay:500},
floor = [[],[],[],[],[],[],[],[],[],[]]

let lines=0,
    level = 0,
    pieces = 0,
    score = 0


function check(e, state) {
    switch(e.key.code){
    case 'ArrowDown':// soft drop
        shape.style.speed = state.rate;
        return
    case ' ':// hard drop
        shape.setAttribute('y', state.drop)
        state.delay = 0
        return
    case 'C': case 'Shift':
            [hold.href, shape.href] =[shape.href, hold.href]
            if( ! shape.href ) sequence.next()
            // need to set y value so drop starts over
            Object.assign(state, {shape: shape.href(1), x:0, y:0, rotation:0})
        return
    default: if( !foo[key.code]) return
        foobar(...foo[key.code], dy, state)
    }
}

function foobar(dx,dr,dy, state){
    const
        xp = state.x + dx,
        yp = state.y,
        rotation = (state.rotation + dr +4)%4,
        [a,b,c,d] = rot[rotation]

    let drop = 20
    for( s of shapes[state.shape].blocks){
        const
        x = a*xp +c*yp + dx,
        y = b*xp +d*yp + dy
        if ( x < 0 || x >=10 || floor[x][y])return
        drop = min(drop, 20-floor[x].length - y)
    }
    shape.setAttribute('x', x)
    shape.setAttribute('y', y)
    shape.setAttribute('transform',`rotate(${90*rotation})`)
    Object.assign(state, {x,y,rotation, drop})
}
function freeze(){
    pieces++
    const [a,b,c,d] = rot[rotation]
    let ymax = 0, ymin= 20
    for( const [xp,yp] of shapes[shape].blocks) {
        const
            x = a*xp + c*yp + e,
            y = b*xp + d*yp + f
        ymin = min(y, ymin)
        ymax = max(y, ymax)
        floor[x][y] = true
    }
    const rows = floor.slice(ymin, ymax+1).filter( row => floor.every(col => col[row]))
    lines += rows.length
    level = line / 10 | 0
    score += [0,40,100,300,1200][rows.length] * (level+ 1)

    // update score, lines etc
    for( const row of rows) {
        for( const col of floor) {
            col.splice(row) // remove row
        }
    }
    for( const col of floor )
            // adjust any column to remove trailing undefined (holes)
        while(!col.at(-1) && col.length)col.length--
    return rows
}

const run = async () => {
    while(true) {
        // await new Promise(r=>startGame.addEventListener('click', r, {once:true}))
        // model.reset()
        sequence = makeSequence()
        for ( const shape of sequence) {

            await dropPiece(shape)
            const rows = model.freeze(shape)
            //add block to theFloor
            theFloor.lastElementChild.outerHTML += // is x,y correct ?
                shapes[shape.shape].blocks.map(([x,y]) => `<rect x=${x+piece.x} y="${y} fill="${svg[c].fill}" />`)

            // remove complete lines
            for( const b of theFloor.querySelectorAll('rect'))
                if(row.includes(b.y)) theFloor.removeChild(b) // remove full lines
                else b.y += rows.reduce((acc,e)=> acc + b.y > e, 0) // move remaining down
            // update score, level & lines
            ['score','level','lines','pieces'].forEach(l =>
                window[l].textContent = model[l]
            )
        }
        alert("Game Over")
    }
}

const dropPiece =(state) => new Promise( r => {
    const f = event => doClick(event.key, state)

    document.addEventListener('keyup', f)
    document.addEventListener('keydown', (event) => {
        if(event.code == 'ArrowDown')// end soft drop
            shape.style.setProperty(rate, model.rate)
    })

    shape.ontransitionend = event => {
        console.log('transition end')
        shape.y.baseVal.value += 1
        if( model.check(piece, x, y, rotation)) piece.y += 1;
        // on hardrop we don't need to wait
        else setTimeout(() => {
            // clean-up
            document.removeEventListener('keyup', f)
            r() // resolve promise
        }, 500) // wait 1/2 sec
    }
    shape.y.baseVal.value = state.y = 1
})

function *makeSequence(){
    while(true) {
        const letters = 'IOTSZJL'.split()
        for(i=0; i < 7; i++) {
            const c = queue.firstChild.getAttribute("href")[1]
            if( !model.check({shape:c, x:0, y:-1, rotation:0}))return
            queue.removeChild(queue.firstChild)

            const n = i+ (a.length-i)*random() | 0
            const el = document.createElement('use')
            el.setAttribute('x', 12)
            el.setAttribute('y', 24)
            el.setAttribute('href', `#${letters[n]}`)
            queue.apendChild(el)

            for( const el of queue.children) el.y.baseVal.value -= 3

            letters[n] = letters[i]
            yield {shape:c, x:0, y:0, rotation:0}
        }
    }
}
queue.innerHTML ='IOTSZJL'.split('').map((e,i,a) => {
    const n =i+(a.length-i)*Math.random() | 0,
    t = a[n]
    a[n] = a[i]
    return `<use href='#${t}' x='12' y='${i*3}' />`
}).join('\n')

run()


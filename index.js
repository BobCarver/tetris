shapes = {
    'I': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'O': {blocks:[[-1,-1], [0,-1],  [-1, 0], [0, 0]], spawn:0},
    'T': {blocks:[[-1, 0], [ 0, 0], [1,  0], [0,-1]], spawn:0},
    'S': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'Z': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'J': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0},
    'L': {blocks:[[-2,-1], [-1,-1], [0, -1], [1,-1]], spawn:0}
}

let holdAvail = true, transform, timer
function startGame() {
    sequence =
    for(7) sequence
    nextPiece()
    timer = setInterval()
}

sequence =sequence.slice(0,7)+ getSelection.next()

function nextPiece(){
    transform = [1,0,0,0,1,1]
    sequence.forEach( (c,i) => windows[`shape${i}`].href = `#${c}`)
}

function endGame() {
    clearInterval(timer)
    alert("Game Over")
    document.removeEventListener('keyup', x)
    document.removeEventListener('keypress', y)
}
 document.addEventListener('keyup', event => {
    if(event.code == 'ArrowDown')// end soft drop
    clearInterval(timer)
    timer = setInterval(tick, model.interval)
    // adjust tick
 })

document.addEventListener('keypress', event => {

    switch (event.code) {
        case 'ArrowDown':// soft drop
            clearInterval(timer)
            timer = setInterval(tick, model.interval/2)
            return;

        case ' ':// hard drop
            transform = model.hardDrop(theShape, transform)
            return

        case 'C': case 'Shift':// hold
            if( holdAvail ){
                holdAvail = false
                transform = [1,0,0,0,1,0]
                [shape0.href, hold.href] = [hold.href, theShape.shape0]
                shape0.href != '' || nextBlock()
            }// reset holdAvail in finalize
            return
        // the following cases are for movement of
        // the shape.  They all set a transform that is
        // used after the switch
        // right
        case 'ArrowRight': M = [a,b,c+1,d,e,f]; break;
        //left
        case 'ArrowLeft': M =[a,b,c-1,d,e,f]; break;
        // rotate clockwise
        case 'ArrowUp': case 'X': M = [-b,a,c,e,d,f]; break;
        // rotate counter-clockwise
        case 'Ctrl': case 'Z':M = [b,a,c,e,-d,f];
    }
    if(model.check(theShape, M)) { // ?? twist and kicks
        transform = M
        shape0.transform = `M`
    }
})

function tick(){
    transform[5] += 1
    if( !model.check(theShape, transform)) {
        delay(500).then(finalize)
    } else shape0.y += 1
}

function finalize() {
    holdAvail = true
    clearInterval(timer)
    const rows = model.freeze(theShape, transform)
    // update UI
    theFloor.lastElementChild.outerHTML += // is x,y correct ?
    svg[c].blocks.map(([x,y]) => `<rect x=${x} y="${y} fill="${svg[c].fill}" />`)
    for( const b of theFloor.querySelectorAll('rect'))
        if(row.includes(b.y)) theFloor.removeChild(b) // remove full lines
        else b.y += rows.reduce((acc,e)=> acc + b.y > e) // move remaining down
    // update score, level & lines
    ['score','level','lines','pieces'].forEach(l =>
        window[i].textContent = model[l]
    )
    // adjust tick
    nextPiece()
}

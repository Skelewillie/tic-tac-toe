function getWinner(board,player1,player2){
    
    for(x in board){
        //checks rows
        let arr = board[x].join('')

        if((arr == player1.marker.repeat(3))){
            return player1.name

        }else if((arr == player2.marker.repeat(3))){
            return player2.name
        }

        //checks columns
        arr = ''
        for(let i=0; i<3;i++){
            arr += board[i][0]
        }

        if((arr == player1.marker.repeat(3))){
            return player1.name

        }else if((arr == player2.marker.repeat(3))){
            return player2.name
        }

        //checks diagonals
        arr = ''
        
        for(let i = 0;  i< 3;i++){
            arr += board[i][3-1-i]  
        }

        if((arr == player1.marker.repeat(3))){
            return player1.name

        }else if((arr == player2.marker.repeat(3))){
            return player2.name
        }

        arr = ''
        
        for(let i = 0;  i< 3;i++){
            arr += board[i][i]  
        }

        if((arr == player1.marker.repeat(3))){
            return player1.name

        }else if((arr == player2.marker.repeat(3))){
            return player2.name
        }
    }
}

function createPlayer(marker, name){
    return {name,marker}
}



function createBoard(){
    const controller = new AbortController();
    const signal = controller.signal;

    let board = [['','',''],['','',''],['','','']]
    const container = document.querySelector('.container');

    let player1 = createPlayer('X','Mark');
    let player2 = createPlayer('O','Nolan')

    let counter = 0
    let isPressed = true
    let winner;
    for(x in board){
        for(y in board[x]){
            counter++
            const cell = document.createElement('div');
            cell.setAttribute('class','cell');
            cell.setAttribute('id',`${counter}`);

            container.appendChild(cell);

            cell.addEventListener('click',(e)=>{
                if(isPressed){
                    cell.textContent = player1.marker
                    isPressed = false
                }else{
                    cell.textContent = player2.marker
                    isPressed = true
                }

                let id = cell.getAttribute('id');
                
                if(id < 4){
                    board[0][id-1] =cell.textContent;
                }else if((id >=4) && (id < 7)){
                    board[1][id-4] = cell.textContent;
                }else{
                    board[2][id-7] = cell.textContent;
                }

                winner = getWinner(board,player1,player2)
                if(winner){
                    alert(`${winner} wins`)
                    controller.abort()
                }

            },{once:true,signal:signal})
        }
    }
}



createBoard()




/*for(x in game.board){
    //checks rows
    let arr = game.board[x].join('')
    if((arr == 'xxx')){
        console.log('you win')
        break
    }

    //checks columns
    let column = ''
    for(let i=0; i<3;i++){
        column += game.board[i][0]
    }

    if(column == 'xxx'){
        console.log('you win', column)
        break
    }else{
        column = ''
    }

    //checks diagonals
    let diag = ''
    
    for(let i = 0;  i< 3;i++){
        diag += game.board[i][3-1-i]  
    }

    if(diag == 'xxx'){
        console.log('you win', diag)
        break
    }else{
        console.log(diag)
        diag = ''
    }

    diag = ''
    
    for(let i = 0;  i< 3;i++){
        diag += game.board[i][i]  
    }

    if(diag == 'xxx'){
        console.log('you win', diag)
        break
    }else{
        console.log(diag)
        diag = ''
    }

}*/
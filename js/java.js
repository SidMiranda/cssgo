var player = 1

function mark(id){
   
    if (document.getElementById(id).innerHTML == '') {
        if (player == 1) {
            document.getElementById(id).innerHTML = "X"
            player = 2
            document.getElementById("msg").innerHTML = "É a vez do Player 2"
        } else {
            document.getElementById(id).innerHTML = "O"
            player = 1
            document.getElementById("msg").innerHTML = "Agora é o Player 1"
        }
    }
}
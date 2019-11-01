function climbingLeaderboard(scores, alice) {
    let newScores = []
    scores.forEach( s => {
        if(!newScores.includes(s)){
            newScores.push(s)
        }
    })

    for(let i = 0; i < alice.length; i++){
        if(newScores.includes(alice[i])){
            alice[i] = newScores.findIndex( s => alice[i] === s) + 1
        } else if (alice[i] < newScores[newScores.length - 1]){
            alice[i] = newScores.length + 1
        } else if (alice[i] > newScores[0]){
            alice[i] = 1
        } else{
            alice[i] = newScores.findIndex( s => alice[i] > s) + 1
        }
    }
    return alice
}
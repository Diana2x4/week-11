let currentTurn= "X"
function initializeCell(cellId){
    const cellElement = $(`#${cellId}`)
    console.log(cellId)
    cellElement.text("-")
    cellElement.on("click", () => {
        //turn the space
        console.log("change cell to ",currentTurn)
        cellElement.text(currentTurn)
        //change the turn
        currentTurn = currentTurn == "X" ? "O" : "X"
        //display new turn
        $("#currentTurn").text(currentTurn)
})}


const cells= ["UL","UM","UR","ML","MM","MR","ML","BL","BM","BR"]
cells.forEach((cellId) => {
    initializeCell(cellId)
})

$("#restart").on("click", () => {
    $(".gameCell").text("-")
})


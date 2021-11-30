//retrieve scores from local storage and
//sort array from highest to lowest
let scores = JSON.parse(localStorage.getItem("scores"))  || [];
scores.sort(function (a1,b1) {
    return b1.score - a1.score
});

//for each item in the scores array, display initials and score
//append list item to unordered list 
scores.forEach(function (score) {
    let liEl = document.createElement("li");
    liEl.textContent = score.initials + " - " + score.score;
    let ulEl = document.getElementById("scoresList");
    ulEl.appendChild(liEl);
})

//function to erase all scores from local storage
function clearScores() {
    localStorage.removeItem("scores");
    window.location.reload();
}

//event listener for clear scores button
let clearEl = document.getElementById("clearScores");
clearEl.onclick = clearScores;
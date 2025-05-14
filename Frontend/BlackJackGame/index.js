let sum;
function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1;
}
function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    document.getElementById("sum").innerText = "Sum: " + sum;
    document.getElementById("cards").innerText = "Cards: " + firstCard + ", " + secondCard;
    if (sum === 21) {
        document.getElementById("message-el").innerText = "Blackjack! You win!";
    } else if (sum > 21) {
        document.getElementById("message-el").innerText = "You lose!";
    } else {
        document.getElementById("message-el").innerText = "Do you want to draw a new card?";
    }
}
function newCard() {
    let card = getRandomCard();
    if (card > 10) {
        card = 10;
    } else if (card === 1) {
        card = 11;
    }
    sum += card;
    document.getElementById("sum").innerText = "Sum: " + sum;
    document.getElementById("cards").innerText += ", " + card;
    if (sum > 21) {
        document.getElementById("message-el").innerText = "You lose!";
    } else if (sum === 21) {
        document.getElementById("message-el").innerText = "Blackjack! You win!";
    } else {
        document.getElementById("message-el").innerText = "Do you want to draw a new card?";
    }
}
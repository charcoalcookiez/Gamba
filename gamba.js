const lose = 0
const drawn = 0
const deck = 
[2,3,4,5,6,7,8,9,10,10,10,10,11];
const discard = [];
const currentCount = 0;
const buttonElement = document.getElementById('myButton');
buttonElement.addEventListener('click', () => {
    const drawn = deck[Math.floor(Math.random() * deck.length)];
    function check(){
        const currentCount = currentCount + drawn
            if (currentCount => 21) {
                const lose = 1
            }
}
    document.getElementById("currentCount").innerText = currentCount;
});
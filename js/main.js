
// ç³ã®è¡¨ç¤º
const disp = function(num) {
    let stone = '';
    for(let i=1; i <= num; i++) {
        stone += 'ðª¨';
        if(i % 10 == 0) {
            stone += '<br>';
        }
    }
    document.getElementById('stone').innerHTML = stone;
    document.getElementById('total').textContent = (num);
}

const firstStoneNum = 30;
disp(firstStoneNum);

//ãã¿ã³ãæ¼ãããã¨ãã®ã¤ãã³ãå¦ç
document.getElementById('btn').addEventListener('click', function() {
    const total = Number(document.getElementById('total').textContent);
    const num = Number(document.getElementById('num').value);
    let player = document.getElementById('player').textContent;
    if(player === 'A') {
        player = 'B';
    } else {
        player = 'A';
    }
//totalã®åæ°ã0ããå¤§ããå ´åãã¬ã¤ã¤ã¼ã®å¤æ´
    if(total - num > 0) {
        disp(total - num);
        document.getElementById('player').textContent = player;
    } 
//ç³ã0ã«ãªã£ããåå©ãããã¬ã¤ã¤ã¼ãè¡¨ç¤º
    else {
        document.getElementById('stone').textContent = '';
        document.getElementById('total').textContent = '0';
        document.getElementById('winner').textContent = player + 'ããã®åå©ï¼'
    }
});
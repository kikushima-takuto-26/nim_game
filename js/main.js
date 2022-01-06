
// 石の表示
const disp = function(num) {
    let stone = '';
    for(let i=1; i <= num; i++) {
        stone += '🪨';
        if(i % 10 == 0) {
            stone += '<br>';
        }
    }
    document.getElementById('stone').innerHTML = stone;
    document.getElementById('total').textContent = (num);
}

const firstStoneNum = 30;
disp(firstStoneNum);

//ボタンが押されたときのイベント処理
document.getElementById('btn').addEventListener('click', function() {
    const total = Number(document.getElementById('total').textContent);
    const num = Number(document.getElementById('num').value);
    let player = document.getElementById('player').textContent;
    if(player === 'A') {
        player = 'B';
    } else {
        player = 'A';
    }
//totalの個数が0より大きい場合プレイヤーの変更
    if(total - num > 0) {
        disp(total - num);
        document.getElementById('player').textContent = player;
    } 
//石が0になったら勝利したプレイヤーを表示
    else {
        document.getElementById('stone').textContent = '';
        document.getElementById('total').textContent = '0';
        document.getElementById('winner').textContent = player + 'さんの勝利！'
    }
});
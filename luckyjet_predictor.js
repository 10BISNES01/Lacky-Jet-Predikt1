async function fetchGameData() {
    const response = await fetch('https://example.com/api/luckyjet/history'); // <div id="history-item-0" class="sc-dcJsrY jqRLmb" type="high">22.78x</div>
    const data = await response.json();

    // Обработка полученных данных и вывод на страницу
    console.log(data);
    updateUI(data);
}

function updateUI(data) {
    // Обновление UI с использованием полученных данных
    const latestElement = document.getElementById('latest-coefficients');
    latestElement.innerHTML = data.map(value => `<p>Coefficient: ${value}</p>`).join('');
}

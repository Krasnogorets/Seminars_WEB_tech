const temperature = parseFloat(prompt('введите температуру в градусах Цельсия'));
fromCelciumToFahrenheit(temperature);
function fromCelciumToFahrenheit(t) {
    fahrenheitTemp = Math.floor((t * 9 / 5 + 32) * 100) / 100;
    alert(` Цельсий: ${t}, Фаренгейт: ${fahrenheitTemp}`);
}
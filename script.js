const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

document.getElementById('convert-btn').addEventListener('click', () => {
    const inputTemp = parseFloat(document.getElementById('input-temp').value);
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;

    let convertedTemp;

    if (isNaN(inputTemp)) {
        alert('Please enter a valid temperature.');
        return;
    }


    if (inputUnit === outputUnit) {
        convertedTemp = inputTemp;
    } else if (inputUnit === 'Celsius' && outputUnit === 'Fahrenheit') {
        convertedTemp = inputTemp * 9 / 5 + 32;
    } else if (inputUnit === 'Celsius' && outputUnit === 'Kelvin') {
        convertedTemp = inputTemp + 273.15;
    } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Celsius') {
        convertedTemp = (inputTemp - 32) * 5 / 9;
    } else if (inputUnit === 'Fahrenheit' && outputUnit === 'Kelvin') {
        convertedTemp = (inputTemp - 32) * 5 / 9 + 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'Celsius') {
        convertedTemp = inputTemp - 273.15;
    } else if (inputUnit === 'Kelvin' && outputUnit === 'Fahrenheit') {
        convertedTemp = (inputTemp - 273.15) * 9 / 5 + 32;
    }

    document.getElementById('output-temp').textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}`;
});

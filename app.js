function binaryToDecimal() {
    const binary = document.getElementById('binaryInput').value;
    if (binary === '') return alert('Enter a number:');
    binary.split('').map((i) => {
        if (i !== '0' && i !== '1') return alert('Enter a binary number:');
    });
    const decimal = parseInt(binary, 2);
    document.getElementById('decimal').value = decimal;
    return true;
}

function decimalToBinary() {
    const decimal = document.getElementById('decimal').value;
    if (decimal === '') return alert ('Enter a number:');
    const binary = (parseInt(decimal)).toString(2);
    document.getElementById('binaryInput').value = binary;
}

//Kaylyn Duncan
//June 20, 2025
//Top-Up A

window.onload = function () {
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            text-align: center;
            padding-top: 50px;
        }
        button {
            font-size: 16px;
            padding: 10px 20px;
            margin-top: 20px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #45a049;
        }
    `;
    document.head.appendChild(style);

    // Create heading
    const message = document.createElement('h1');
    message.textContent = 'Hello ';
    document.body.appendChild(message);

    // Create button
    const button = document.createElement('button');
    button.textContent = 'Professor';
    message.appendChild(button);

    // Add button click event
    button.addEventListener('click', function () {
        setTimeout(function () {
            alert('This is Kaylyn');
        }, 1000);
    });
};

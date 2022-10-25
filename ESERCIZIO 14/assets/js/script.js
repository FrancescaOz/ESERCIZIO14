var btn = document.getElementById('bottone');

btn.addEventListener('click', () => {

    document.getElementById('totale').innerHTML = '';
    var budget = 1000;

    while (budget > 200) {
        let speso = Math.floor(Math.random() * 100);

        if (speso > budget) {
            speso = budget;
        }

        budget -= speso;

        document.getElementById('totale').innerHTML += `<p>Hai speso ${speso}&euro;</p>`;

        if (budget < 200) {
            document.getElementById('totale').innerHTML += '<p><b>Attento, sei vicino al tuo limite di spesa</b></p>';
        }

        document.getElementById('totale').innerHTML += `<p><i>Ti rimangono ${budget}&euro;</i></p>`;
    }
});

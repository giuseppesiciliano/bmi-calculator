// Valori minimi e massimi per ALTEZZA e PESO
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');

const minHeight = 100;
const maxHeight = 270;
const minWeight = 40;
const maxWeight = 300;

heightInput.min = minHeight;
heightInput.max = maxHeight;

weightInput.min = minWeight;
weightInput.max = maxWeight;

// Gestione dei display
const backDisplay = document.getElementById('back-display');
const forwardDisplay = document.getElementById('forward-display');
const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');

// Impostazione di default
display1.classList.remove('hidden');
display2.classList.add('hidden');

// Gestione dell'avanzamento e del ritorno tra i display
forwardDisplay.addEventListener('click', () => {
    const heightValue = parseFloat(heightInput.value);
    const weightValue = parseFloat(weightInput.value);

    // Controlla se il valore di heightValue è valido
    if (isNaN(heightValue) || heightValue < minHeight || heightValue > maxHeight) {
        alert(`Devi immettere un'altezza compresa tra ${minHeight} e ${maxHeight}`);
        return; // Esci dalla funzione se il valore non è valido
    }

    // Controlla se il valore di weightValue è valido
    if (isNaN(weightValue) || weightValue < minWeight || weightValue > maxWeight) {
        alert(`Devi immettere un peso compreso tra ${minWeight} e ${maxWeight}`);
        return; // Esci dalla funzione se il valore non è valido
    }

    // Se entrambi i valori sono validi, alterna la visibilità di display1 e display2
    display1.classList.add('hidden');
    display2.classList.remove('hidden');

    // Calcola e aggiorna il BMI
    updateBMI(weightValue, heightValue);
});

backDisplay.addEventListener('click', () => {
    // Alterna la visibilità di display1 e display2
    display1.classList.remove('hidden');
    display2.classList.add('hidden');
});




// Calcolo del BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

const bmiDisplay = document.getElementById('result');
const descrizione = document.getElementById('description');

function updateBMI(weight, height) {
    const heightInMeters = height / 100; // Converti l'altezza in metri
    const bmi = calculateBMI(weight, heightInMeters);
    const bmiDisplay = document.getElementById('result');
    const descrizione = document.getElementById('description');
    const bmiTack = document.getElementById('bmi-tack');

    bmiDisplay.textContent = bmi.toFixed(2);

    if (bmi < 18.50) {
        descrizione.textContent = "Sei sottopeso. Il tuo indice di massa corporea indica che hai un peso inferiore alla media per la tua altezza. Potrebbe essere utile consultare un medico o un nutrizionista per valutare la tua dieta e la tua salute complessiva.";
    } else if (bmi >= 18.50 && bmi < 25.00) {
        descrizione.textContent = "Sei normopeso. Il tuo indice di massa corporea è nella fascia sana e raccomandata per la tua altezza. Mantieni uno stile di vita equilibrato e continua a seguire una dieta sana per preservare il tuo benessere.";
    } else if (bmi >= 25.00 && bmi < 30.00) {
        descrizione.textContent = "Sei sovrappeso. Il tuo BMI indica che il tuo peso è superiore alla media per la tua altezza. Considera di apportare modifiche alla tua dieta e al tuo regime di esercizio fisico per migliorare la tua salute.";
    } else if (bmi >= 30.00 && bmi < 35.00) {
        descrizione.textContent = "Sei obeso di primo grado. Il tuo BMI indica un eccesso di peso significativo. È consigliabile consultare un medico per sviluppare un piano di gestione del peso personalizzato e per valutare i potenziali rischi per la salute.";
    } else {
        descrizione.textContent = "Sei obeso di secondo grado o più. Il tuo indice di massa corporea suggerisce un livello di obesità maggiore. È essenziale cercare supporto medico per affrontare seriamente la tua salute e considerare interventi per la gestione del peso.";
    }

    // Posizionamento della tacca del BMI
    const barWidth = 250; // larghezza della barra in px
    const minBMI = 10; // BMI minimo per il calcolo 
    const maxBMI = 40; // BMI massimo per il calcolo 
    const bmiPercentage = (bmi - minBMI) / (maxBMI - minBMI);
    const tackPosition = Math.min(barWidth, Math.max(0, bmiPercentage * barWidth));

    bmiTack.style.left = `${tackPosition}px`;
}


// Calcola inizialmente il BMI se possibile
const initialHeight = parseFloat(heightInput.value);
const initialWeight = parseFloat(weightInput.value);
if (!isNaN(initialHeight) && !isNaN(initialWeight)) {
    updateBMI(initialWeight, initialHeight);
}

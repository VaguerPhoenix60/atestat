document.getElementById('configurator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne trimiterea formularului

    // Preia valorile din formular
    const motor = document.getElementById('motor').value;
    const transmisie = document.getElementById('transmisie').value;
    const culoare = document.getElementById('culoare').value;
    const jante = document.getElementById('jante').value;

    // Afișează un mesaj cu configurația selectată
    alert(`Configurația ta:\nMotor: ${motor}\nTransmisie: ${transmisie}\nCuloare: ${culoare}\nJante: ${jante} inch`);

    // Aici poți adăuga logica pentru a trimite datele pe server sau pentru a le salva local
});

const piston = document.getElementById('piston');
const foc = document.getElementById('foc');
const intakeValve = document.getElementById('intake-valve');
const exhaustValve = document.getElementById('exhaust-valve');
const cycleTitle = document.getElementById('cycle-title');
const cycleDescription = document.getElementById('cycle-description');

let cycle = 0;

function animateMotor() {
    if (cycle === 0) {
        // Aspirație
        piston.classList.remove('move-down');
        piston.classList.add('move-up');
        intakeValve.classList.add('open');
        exhaustValve.classList.remove('open');
        foc.classList.remove('active');
        cycleTitle.textContent = 'Aspirație';
        cycleDescription.textContent = 'Aerul și combustibilul sunt aspirați în cilindru.';
        cycle = 1;
    } else if (cycle === 1) {
        // Compresie
        piston.classList.remove('move-up');
        piston.classList.add('move-down');
        intakeValve.classList.remove('open');
        exhaustValve.classList.remove('open');
        foc.classList.remove('active');
        cycleTitle.textContent = 'Compresie';
        cycleDescription.textContent = 'Aerul și combustibilul sunt comprimați.';
        cycle = 2;
    } else if (cycle === 2) {
        // Explozie
        piston.classList.remove('move-down');
        piston.classList.add('move-up');
        intakeValve.classList.remove('open');
        exhaustValve.classList.remove('open');
        foc.classList.add('active'); // Activează efectul de foc
        cycleTitle.textContent = 'Explozie';
        cycleDescription.textContent = 'Combustibilul este aprins, producând explozie.';
        cycle = 3;
    } else if (cycle === 3) {
        // Evacuare
        piston.classList.remove('move-up');
        piston.classList.add('move-down');
        intakeValve.classList.remove('open');
        exhaustValve.classList.add('open');
        foc.classList.remove('active'); // Dezactivează efectul de foc
        cycleTitle.textContent = 'Evacuare';
        cycleDescription.textContent = 'Gazele arse sunt evacuate din cilindru.';
        cycle = 0;
    }
}

setInterval(animateMotor, 2000); // Schimbă starea la fiecare 2 secunde

document.getElementById('configurator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne trimiterea formularului

    // Preia valorile din formular
    const motor = document.getElementById('motor').value;
    const transmisie = document.getElementById('transmisie').value;
    const culoare = document.getElementById('culoare').value;
    const jante = document.getElementById('jante').value;

    // Actualizează imaginea mașinii în funcție de culoare
    const carImage = document.getElementById('car-image');
    carImage.src = `golf5-${culoare}.jpg`;

    // Actualizează imaginea jantelor
    const wheelImage = document.getElementById('wheel-image');
    wheelImage.src = `jante-${jante}.png`;

    // Afișează un mesaj cu configurația selectată
    alert(`Configurația ta:\nMotor: ${motor}\nTransmisie: ${transmisie}\nCuloare: ${culoare}\nJante: ${jante} inch`);
});

document.getElementById('configurator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne trimiterea formularului

    // Preia valorile din formular
    const motor = document.getElementById('motor').value;
    const transmisie = document.getElementById('transmisie').value;
    const culoare = document.getElementById('culoare').value;
    const jante = document.getElementById('jante').value;

    // Actualizează culoarea caroseriei
    const carBody = document.getElementById('car-body');
    carBody.style.backgroundColor = getColorCode(culoare);

    // Actualizează dimensiunea jantelor
    const wheels = document.querySelectorAll('.wheel');
    wheels.forEach(wheel => {
        wheel.style.width = `${jante}px`;
        wheel.style.height = `${jante}px`;
    });

    // Afișează un mesaj cu configurația selectată
    alert(`Configurația ta:\nMotor: ${motor}\nTransmisie: ${transmisie}\nCuloare: ${culoare}\nJante: ${jante} inch`);
});



// Actualizare parametri fizici
function updatePhysics() {
    const motor = document.getElementById('motor').value;
    const transmisie = document.getElementById('transmisie').value;
    
    const physicsData = {
        '1.4 TSI': { acc: '9.2s', speed: '190 km/h', consum: '6.2L' },
        '2.0 TDI': { acc: '8.5s', speed: '210 km/h', consum: '5.8L' },
        'V6 R32': { acc: '6.5s', speed: '250 km/h', consum: '10.5L' }
    };

    if(transmisie === 'dsg') {
        physicsData['1.4 TSI'].acc = '8.9s';
        physicsData['2.0 TDI'].acc = '8.1s';
        physicsData['V6 R32'].acc = '6.2s';
    }

    document.getElementById('acceleration').textContent = physicsData[motor].acc;
    document.getElementById('topSpeed').textContent = physicsData[motor].speed;
    document.getElementById('consum').textContent = physicsData[motor].consum;
}

// Actualizare culoare
function updateColor(color) {
    document.getElementById('car-body').style.backgroundColor = color;
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.style.borderColor = opt.style.backgroundColor === color ? '#ff4500' : 'transparent';
    });
}

// Actualizare jante
function updateWheels() {
    const size = document.getElementById('jante').value;
    document.querySelectorAll('.wheel').forEach(wheel => {
        wheel.style.width = `${size}px`;
        wheel.style.height = `${size}px`;
    });
}


// Animatie hover pentru previzualizare
document.querySelector('.car-preview').addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    document.getElementById('car-body').style.transform = 
        `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.querySelector('.car-preview').addEventListener('mouseleave', () => {
    document.getElementById('car-body').style.transform = 'none';
});

// Actualizare parametri fizici
function updatePhysics() {
    const motor = document.getElementById('motor').value;
    const transmisie = document.getElementById('transmisie').value;
    
    const physicsData = {
        '1.4 TSI': { acc: '9.2s', speed: '190 km/h', consum: '6.2L' },
        '2.0 TDI': { acc: '8.5s', speed: '210 km/h', consum: '5.8L' },
        'V6 R32': { acc: '6.5s', speed: '250 km/h', consum: '10.5L' }
    };

    if(transmisie === 'dsg') {
        physicsData['1.4 TSI'].acc = '8.9s';
        physicsData['2.0 TDI'].acc = '8.1s';
        physicsData['V6 R32'].acc = '6.2s';
    }

    document.getElementById('acceleration').textContent = physicsData[motor].acc;
    document.getElementById('topSpeed').textContent = physicsData[motor].speed;
    document.getElementById('consum').textContent = physicsData[motor].consum;
}

// Initializare
updatePhysics();
updateColor('#fff');
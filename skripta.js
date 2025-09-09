document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('raspored');

    // Funkcija za učitavanje podataka iz localStorage-a
    const loadSchedule = () => {
        const savedData = localStorage.getItem('scheduleData');
        if (savedData) {
            table.innerHTML = savedData;
        }
    };

    // Funkcija za spremanje podataka u localStorage
    const saveSchedule = () => {
        localStorage.setItem('scheduleData', table.innerHTML);
    };

    // Slušanje događaja 'input' na cijeloj tablici
    // Svaki put kad promijenite tekst, podaci će se spremiti
    table.addEventListener('input', saveSchedule);

    // Učitaj raspored kad se stranica učita
    loadSchedule();
});
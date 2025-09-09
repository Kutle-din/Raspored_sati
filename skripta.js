document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('raspored');
    const title = document.getElementById('podnaslov');

    const loadData = () => {
        const savedSchedule = localStorage.getItem('scheduleData');
        const savedTitle = localStorage.getItem('titleData');

        if (savedSchedule) {
            table.innerHTML = savedSchedule;
        }
        if (savedTitle) {
            title.innerText = savedTitle;
        } else {
            title.innerText = "Kliknite ovdje za unos naslova";
        }
    };

    const saveData = () => {
        localStorage.setItem('scheduleData', table.innerHTML);
        localStorage.setItem('titleData', title.innerText);
    };

    table.addEventListener('input', saveData);
    title.addEventListener('input', saveData);

    loadData();
});
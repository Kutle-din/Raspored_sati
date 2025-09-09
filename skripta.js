document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('#raspored td[contenteditable="true"]');
    const title = document.getElementById('podnaslov');

    const loadData = () => {
        // Učitavanje naslova
        const savedTitle = localStorage.getItem('titleData');
        if (savedTitle) {
            title.innerText = savedTitle;
        } else {
            title.innerText = "Kliknite ovdje za unos naslova";
        }

        // Učitavanje sadržaja tablice
        cells.forEach(cell => {
            const savedContent = localStorage.getItem(cell.id);
            if (savedContent) {
                cell.innerText = savedContent;
            }
        });
    };

    const saveData = () => {
        // Spremanje naslova
        localStorage.setItem('titleData', title.innerText);

        // Spremanje sadržaja tablice
        cells.forEach(cell => {
            localStorage.setItem(cell.id, cell.innerText);
        });
    };

    // Dodavanje "listenere" (listeners) za praćenje promjena
    title.addEventListener('input', saveData);
    cells.forEach(cell => {
        cell.addEventListener('input', saveData);
    });

    loadData();
});

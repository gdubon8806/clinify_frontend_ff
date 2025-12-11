// view.js - Renderizado de vistas para Clientes, Doctores y Citas

class ClinifyView {
    static renderTable(headers, rows, actions = []) {
        const table = document.createElement('table');
        table.className = 'table';
        const thead = document.createElement('thead');
        const trHead = document.createElement('tr');
        headers.forEach(h => {
            const th = document.createElement('th');
            th.textContent = h;
            trHead.appendChild(th);
        });
        if (actions.length) {
            const th = document.createElement('th');
            th.textContent = 'Acciones';
            trHead.appendChild(th);
        }
        thead.appendChild(trHead);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        rows.forEach(row => {
            const tr = document.createElement('tr');
            headers.forEach(h => {
                const td = document.createElement('td');
                td.textContent = row[h] ?? '';
                tr.appendChild(td);
            });
            if (actions.length) {
                const td = document.createElement('td');
                actions.forEach(action => {
                    const btn = ButtonFactory.createButton(action.type, action.text, () => action.onClick(row));
                    td.appendChild(btn);
                });
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        return table;
    }

    static renderSection(title, ...elements) {
        const section = document.createElement('section');
        const h2 = document.createElement('h2');
        h2.textContent = title;
        section.appendChild(h2);
        elements.forEach(el => section.appendChild(el));
        return section;
    }

    static renderMessage(msg, type = 'info') {
        const div = document.createElement('div');
        div.textContent = msg;
        div.className = `msg msg-${type}`;
        return div;
    }
}

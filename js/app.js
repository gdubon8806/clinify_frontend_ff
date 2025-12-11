// app.js - Inicialización y enrutamiento simple para la app de citas médicas

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('app-main');
    const navLinks = document.querySelectorAll('nav a');

    function setActiveNav(hash) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    }

    function renderView() {
        const hash = window.location.hash || '#clientes';
        setActiveNav(hash);
        switch (hash) {
            case '#clientes':
                window.clinifyController.renderClientes(main);
                break;
            case '#doctores':
                window.clinifyController.renderDoctores(main);
                break;
            case '#citas':
                window.clinifyController.renderCitas(main);
                break;
            default:
                main.innerHTML = '<h2>Página no encontrada</h2>';
        }
    }

    window.addEventListener('hashchange', renderView);

    // Inicialización global del controlador
    window.clinifyController = new ClinifyController();
    renderView();
});

// model.js - Modelos y lógica de datos para Clientes, Doctores y Citas


// const API_BASE_URL = 'https://URL_DE_TU_API_AQUI/api'; // <-- Reemplaza con la URL real de tu API .NET

class ClienteModel {
    static async getAll() {
        const res = await fetch(`https://localhost:7049/clientes`);
        return res.json();
        // const res = await fetch('clientes.json');
        // return res.json();
    }
    static async create(data) {
        // const res = await fetch(`${API_BASE_URL}/clientes`, { ... });
        // return res.json();
        alert('Solo lectura demo: No se puede crear clientes en modo demo.');
        return null;
    }
    static async update(id, data) {
        // const res = await fetch(`${API_BASE_URL}/clientes/${id}`, { ... });
        // return res.json();
        alert('Solo lectura demo: No se puede editar clientes en modo demo.');
        return null;
    }
    static async delete(id) {
        // await fetch(`${API_BASE_URL}/clientes/${id}`, { method: 'DELETE' });
        alert('Solo lectura demo: No se puede eliminar clientes en modo demo.');
    }
}

class DoctorModel {
    static async getAll() {
        const res = await fetch(`https://localhost:7049/Doctores`);
        return res.json();
        // const res = await fetch('doctores.json');
        // return res.json();
    }
    static async create(data) {
        // const res = await fetch(`${API_BASE_URL}/doctores`, { ... });
        // return res.json();
        alert('Solo lectura demo: No se puede crear doctores en modo demo.');
        return null;
    }
    static async update(id, data) {
        // const res = await fetch(`${API_BASE_URL}/doctores/${id}`, { ... });
        // return res.json();
        alert('Solo lectura demo: No se puede editar doctores en modo demo.');
        return null;
    }
    static async delete(id) {
        // await fetch(`${API_BASE_URL}/doctores/${id}`, { method: 'DELETE' });
        alert('Solo lectura demo: No se puede eliminar doctores en modo demo.');
    }
}

class CitaModel {
    static async getAll() {
        const res = await fetch(`https://localhost:7049/Citas`);

        // return res.json();
        // const res = await fetch('citas.json');
        return res.json();
    }
    static async create(data) {
        // const res = await fetch(`${API_BASE_URL}/citas`, { ... });
        // return res.json();
        alert('Solo lectura demo: No se puede crear citas en modo demo.');
        return null;
    }
    static async update(id, data) {
        // const res = await fetch(`${API_BASE_URL}/citas/${id}`, { ... });
        // return res.json();
        alert('Solo lectura demo: No se puede editar citas en modo demo.');
        return null;
    }
    static async delete(id) {
        // await fetch(`${API_BASE_URL}/citas/${id}`, { method: 'DELETE' });
        alert('Solo lectura demo: No se puede eliminar citas en modo demo.');
    }
}

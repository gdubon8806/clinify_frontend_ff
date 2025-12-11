// model.js - Modelos y lógica de datos para Clientes, Doctores y Citas

const API_BASE_URL = 'https://URL_DE_TU_API_AQUI/api'; // <-- Reemplaza con la URL real de tu API .NET

class ClienteModel {
    static async getAll() {
        const res = await fetch(`${API_BASE_URL}/clientes`);
        return res.json();
    }
    static async create(data) {
        const res = await fetch(`${API_BASE_URL}/clientes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    }
    static async update(id, data) {
        const res = await fetch(`${API_BASE_URL}/clientes/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    }
    static async delete(id) {
        await fetch(`${API_BASE_URL}/clientes/${id}`, { method: 'DELETE' });
    }
}

class DoctorModel {
    static async getAll() {
        const res = await fetch(`${API_BASE_URL}/doctores`);
        return res.json();
    }
    static async create(data) {
        const res = await fetch(`${API_BASE_URL}/doctores`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    }
    static async update(id, data) {
        const res = await fetch(`${API_BASE_URL}/doctores/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    }
    static async delete(id) {
        await fetch(`${API_BASE_URL}/doctores/${id}`, { method: 'DELETE' });
    }
}

class CitaModel {
    static async getAll() {
        const res = await fetch(`${API_BASE_URL}/citas`);
        return res.json();
    }
    static async create(data) {
        const res = await fetch(`${API_BASE_URL}/citas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    }
    static async update(id, data) {
        const res = await fetch(`${API_BASE_URL}/citas/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return res.json();
    }
    static async delete(id) {
        await fetch(`${API_BASE_URL}/citas/${id}`, { method: 'DELETE' });
    }
}

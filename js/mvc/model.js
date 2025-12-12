// model.js - Modelos y lógica de datos para Clientes, Doctores y Citas


// const API_BASE_URL = 'https://URL_DE_TU_API_AQUI/api'; // <-- Reemplaza con la URL real de tu API .NET

class ClienteModel {
    static _data = null;
    static async getAll() {
        if (!this._data) {
            const res = await fetch(`https://localhost:7049/clientes`); // Cambia la URL según tu backend
            this._data = await res.json();
        }
        return [...this._data];
    }
    static async create(data) {
        if (!this._data) await this.getAll();
        const id = this._data.length ? Math.max(...this._data.map(c => c.id)) + 1 : 1;
        const nuevo = { ...data, id };
        this._data.push(nuevo);
        return nuevo;
    }
    static async update(id, data) {
        if (!this._data) await this.getAll();
        const idx = this._data.findIndex(c => c.id == id);
        if (idx !== -1) {
            this._data[idx] = { ...this._data[idx], ...data };
            return this._data[idx];
        }
        return null;
    }
    static async delete(id) {
        if (!this._data) await this.getAll();
        this._data = this._data.filter(c => c.id != id);
    }
}

class DoctorModel {
    static _data = null;
    static async getAll() {
        if (!this._data) {
            const res = await fetch(`https://localhost:7049/doctores`); // Cambia la URL según tu backend
            this._data = await res.json();
        }
        return [...this._data];
    }
    static async create(data) {
        if (!this._data) await this.getAll();
        const id = this._data.length ? Math.max(...this._data.map(d => d.id)) + 1 : 1;
        const nuevo = { ...data, id };
        this._data.push(nuevo);
        return nuevo;
    }
    static async update(id, data) {
        if (!this._data) await this.getAll();
        const idx = this._data.findIndex(d => d.id == id);
        if (idx !== -1) {
            this._data[idx] = { ...this._data[idx], ...data };
            return this._data[idx];
        }
        return null;
    }
    static async delete(id) {
        if (!this._data) await this.getAll();
        this._data = this._data.filter(d => d.id != id);
    }
}

class CitaModel {
    static _data = null;
    static async getAll() {
        if (!this._data) {
            const res = await fetch(`https://localhost:7049/citas`); // Cambia la URL según tu backend
            this._data = await res.json();
        }
        return [...this._data];
    }
    static async create(data) {
        if (!this._data) await this.getAll();
        const id = this._data.length ? Math.max(...this._data.map(c => c.id)) + 1 : 1;
        const nuevo = { ...data, id };
        this._data.push(nuevo);
        return nuevo;
    }
    static async update(id, data) {
        if (!this._data) await this.getAll();
        const idx = this._data.findIndex(c => c.id == id);
        if (idx !== -1) {
            this._data[idx] = { ...this._data[idx], ...data };
            return this._data[idx];
        }
        return null;
    }
    static async delete(id) {
        if (!this._data) await this.getAll();
        this._data = this._data.filter(c => c.id != id);
    }
}

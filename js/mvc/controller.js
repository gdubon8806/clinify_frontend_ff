// controller.js - Controlador principal para manejar la lógica de Clientes, Doctores y Citas

class ClinifyController {
    constructor() {
        this.view = ClinifyView;
        this.builder = FormBuilder;
        this.buttonFactory = ButtonFactory;
    }

    // CLIENTES
    async renderClientes(container) {
        container.innerHTML = '';
        const section = document.createElement('div');
        // Formulario de nuevo cliente
        const form = new this.builder()
            .setId('form-cliente')
            .addField({ label: 'Nombre', name: 'nombre', required: true })
            .addField({ label: 'Correo', name: 'correo', type: 'email', required: true })
            .addField({ label: 'Teléfono', name: 'telefono', type: 'tel' })
            .build(async data => {
                await ClienteModel.create(data);
                this.renderClientes(container);
            });
        section.appendChild(this.view.renderSection('Nuevo Cliente', form));
        // Tabla de clientes
        const clientes = await ClienteModel.getAll();
        const headers = ['id', 'nombre', 'correo', 'telefono'];
        const table = this.view.renderTable(headers, clientes, [
            { type: 'primary', text: 'Editar', onClick: row => this.editCliente(row, container) },
            { type: 'danger', text: 'Eliminar', onClick: async row => { await ClienteModel.delete(row.id); this.renderClientes(container); } }
        ]);
        section.appendChild(this.view.renderSection('Lista de Clientes', table));
        container.appendChild(section);
    }

    editCliente(cliente, container) {
        container.innerHTML = '';
        const form = new this.builder()
            .setId('form-edit-cliente')
            .addField({ label: 'Nombre', name: 'nombre', value: cliente.nombre, required: true })
            .addField({ label: 'Correo', name: 'correo', type: 'email', value: cliente.correo, required: true })
            .addField({ label: 'Teléfono', name: 'telefono', type: 'tel', value: cliente.telefono })
            .build(async data => {
                await ClienteModel.update(cliente.id, data);
                this.renderClientes(container);
            });
        container.appendChild(this.view.renderSection('Editar Cliente', form));
    }

    // DOCTORES
    async renderDoctores(container) {
        container.innerHTML = '';
        const section = document.createElement('div');
        // Formulario de nuevo doctor
        const form = new this.builder()
            .setId('form-doctor')
            .addField({ label: 'Nombre', name: 'nombre', required: true })
            .addField({ label: 'Especialidad', name: 'especialidad', required: true })
            .build(async data => {
                await DoctorModel.create(data);
                this.renderDoctores(container);
            });
        section.appendChild(this.view.renderSection('Nuevo Doctor', form));
        // Tabla de doctores
        const doctores = await DoctorModel.getAll();
        const headers = ['id', 'nombre', 'especialidad'];
        const table = this.view.renderTable(headers, doctores, [
            { type: 'primary', text: 'Editar', onClick: row => this.editDoctor(row, container) },
            { type: 'danger', text: 'Eliminar', onClick: async row => { await DoctorModel.delete(row.id); this.renderDoctores(container); } }
        ]);
        section.appendChild(this.view.renderSection('Lista de Doctores', table));
        container.appendChild(section);
    }

    editDoctor(doctor, container) {
        container.innerHTML = '';
        const form = new this.builder()
            .setId('form-edit-doctor')
            .addField({ label: 'Nombre', name: 'nombre', value: doctor.nombre, required: true })
            .addField({ label: 'Especialidad', name: 'especialidad', value: doctor.especialidad, required: true })
            .build(async data => {
                await DoctorModel.update(doctor.id, data);
                this.renderDoctores(container);
            });
        container.appendChild(this.view.renderSection('Editar Doctor', form));
    }

    // CITAS
    async renderCitas(container) {
        container.innerHTML = '';
        const section = document.createElement('div');
        // Obtener clientes y doctores para el formulario
        const [clientes, doctores] = await Promise.all([
            ClienteModel.getAll(),
            DoctorModel.getAll()
        ]);
        // Formulario de nueva cita
        const form = new this.builder()
            .setId('form-cita')
            .addField({ label: 'Cliente', name: 'clienteId', type: 'select', required: true, options: clientes.map(c => ({ value: c.id, label: c.nombre })) })
            .addField({ label: 'Doctor', name: 'doctorId', type: 'select', required: true, options: doctores.map(d => ({ value: d.id, label: d.nombre })) })
            .addField({ label: 'Fecha', name: 'fecha', type: 'date', required: true })
            .addField({ label: 'Hora', name: 'hora', type: 'time', required: true })
            .build(async data => {
                await CitaModel.create(data);
                this.renderCitas(container);
            });
        section.appendChild(this.view.renderSection('Nueva Cita', form));
        // Tabla de citas
        const citas = await CitaModel.getAll();
        const headers = ['id', 'clienteId', 'doctorId', 'fecha', 'hora'];
        const table = this.view.renderTable(headers, citas, [
            { type: 'primary', text: 'Editar', onClick: row => this.editCita(row, container, clientes, doctores) },
            { type: 'danger', text: 'Eliminar', onClick: async row => { await CitaModel.delete(row.id); this.renderCitas(container); } }
        ]);
        section.appendChild(this.view.renderSection('Lista de Citas', table));
        container.appendChild(section);
    }

    editCita(cita, container, clientes, doctores) {
        container.innerHTML = '';
        const form = new this.builder()
            .setId('form-edit-cita')
            .addField({ label: 'Cliente', name: 'clienteId', type: 'select', required: true, value: cita.clienteId, options: clientes.map(c => ({ value: c.id, label: c.nombre })) })
            .addField({ label: 'Doctor', name: 'doctorId', type: 'select', required: true, value: cita.doctorId, options: doctores.map(d => ({ value: d.id, label: d.nombre })) })
            .addField({ label: 'Fecha', name: 'fecha', type: 'date', value: cita.fecha, required: true })
            .addField({ label: 'Hora', name: 'hora', type: 'time', value: cita.hora, required: true })
            .build(async data => {
                await CitaModel.update(cita.id, data);
                this.renderCitas(container);
            });
        container.appendChild(this.view.renderSection('Editar Cita', form));
    }
}

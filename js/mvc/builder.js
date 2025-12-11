// builder.js - Builder Pattern para formularios dinámicos

class FormBuilder {
    constructor() {
        this.fields = [];
        this.formId = '';
    }

    setId(id) {
        this.formId = id;
        return this;
    }

    addField({ label, name, type = 'text', options = [], value = '', required = false }) {
        this.fields.push({ label, name, type, options, value, required });
        return this;
    }

    build(onSubmit) {
        const form = document.createElement('form');
        if (this.formId) form.id = this.formId;
        this.fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = field.label;
            label.htmlFor = field.name;
            form.appendChild(label);
            let input;
            if (field.type === 'select') {
                input = document.createElement('select');
                input.name = field.name;
                field.options.forEach(opt => {
                    const option = document.createElement('option');
                    option.value = opt.value;
                    option.textContent = opt.label;
                    if (opt.value === field.value) option.selected = true;
                    input.appendChild(option);
                });
            } else {
                input = document.createElement('input');
                input.type = field.type;
                input.name = field.name;
                input.value = field.value;
            }
            if (field.required) input.required = true;
            form.appendChild(input);
        });
        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = 'Guardar';
        submitBtn.className = 'btn btn-primary';
        form.appendChild(submitBtn);
        form.onsubmit = function (e) {
            e.preventDefault();
            const data = {};
            new FormData(form).forEach((v, k) => data[k] = v);
            onSubmit(data);
        };
        return form;
    }
}

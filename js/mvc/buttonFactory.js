// buttonFactory.js - Factory Method para crear diferentes tipos de botones

class ButtonFactory {
    static createButton(type, text, onClick) {
        let btn = document.createElement('button');
        btn.textContent = text;
        switch (type) {
            case 'primary':
                btn.className = 'btn btn-primary';
                break;
            case 'danger':
                btn.className = 'btn btn-danger';
                break;
            case 'secondary':
                btn.className = 'btn btn-secondary';
                break;
            default:
                btn.className = 'btn';
        }
        btn.type = 'button';
        if (onClick) btn.onclick = onClick;
        return btn;
    }
}

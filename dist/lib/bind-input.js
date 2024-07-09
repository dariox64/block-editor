class BindInput {
    constructor(element) {
        this.getValue = () => {
            switch (this.element.tagName) {
                case 'INPUT': return this.element.value;
                case 'TEXTAREA': return this.element.innerText;
                default: return null;
            }
        };
        this.setValue = (value) => {
            switch (this.element.tagName) {
                case 'INPUT':
                    this.element.value = value;
                    break;
                case 'TEXTAREA':
                    this.element.innerText = value;
            }
            this.element.dispatchEvent(new Event('change'));
        };
        if (!['INPUT', 'TEXTAREA'].includes(element.tagName)) {
            throw new Error('[BlockEditor] provided element should be an input or textarea element');
        }
        this.element = element;
    }
    getElement() {
        return this.element;
    }
}
export default BindInput;
//# sourceMappingURL=bind-input.js.map
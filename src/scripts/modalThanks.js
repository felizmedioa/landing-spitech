export class ModalThanks {
    constructor(IdModalThaks, IdCloseBtn) {
        this.modalThanks = document.getElementById(IdModalThaks);
        this.closeBtn = document.getElementById(IdCloseBtn);

        this.init();
    }

    init() {
        this.modalThanks.showModal();
        this.closeBtn.addEventListener("click", () => {
            this.modalThanks.close();
        });
    }
}
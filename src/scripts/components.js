// Componentes y Lógica de Interacción
// ====================================
// Este archivo maneja la lógica de componentes interactivos
// de tu landing page

/**
 * Funciones que puedes implementar aquí:
 * 
 * - Navegación móvil (toggle hamburger menu)
 * - Formulario de contacto (validación y envío)
 * - Modales/Popups
 * - Carruseles/Sliders
 * - Animaciones al hacer scroll
 * - Tabs, accordions
 * - Smooth scrolling para navegación
 * - Etc.
 * 
 * Ejemplo de estructura:
 * function initNavigation() { ... }
 * function initContactForm() { ... }
 * function initAnimations() { ... }
 */

export class modals {
    constructor(IdModal, IdButtonOpen, IdButtonClose = null) {
        this.modal = document.getElementById(IdModal);
        this.btnOpen = document.getElementById(IdButtonOpen);
        this.btnClose = IdButtonClose ? document.getElementById(IdButtonClose) : null;

        if (!this.modal || !this.btnOpen) {
            console.warn("No se encontró el modal o el botón de apertura");
            return;
        }

        this.initModal();
    }

    initModal() {
        this.btnOpen.addEventListener('click', () => {
            this.open();

            //Cierra el modal en caso de que exista un boton de cierre y sea pulsado
            if (this.btnClose) {
                this.btnClose.addEventListener('click', () => {
                    this.close(); //Definiremos los métodos close y open para que estos puedan ser reutilizados y llamados desde afuera
                })
            }
        })
    }

    open() {
        //Método reutilizable y que abre el modal al ser invocado
        this.modal.showModal();
    }

    close() {
        //Método reutilizable y que cierra el modal al ser invocado
        this.modal.close();
    }
}



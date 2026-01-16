// Punto de Entrada Principal
// ==========================
// Este es el archivo principal que inicia toda la aplicación

/**
 * Este archivo se encarga de:
 * 
 * 1. Inicializar todos los componentes cuando el DOM esté listo
 * 2. Llamar a las funciones de setup desde components.js
 * 3. Configurar event listeners globales
 * 
 * Ejemplo básico:
 * 
 * document.addEventListener('DOMContentLoaded', () => {
 *     console.log('Página cargada');
 *     // Aquí inicializas tus componentes
 *     // initNavigation();
 *     // initContactForm();
 *     // etc.
 * });
 */
import { modals } from "./components.js";
import { priceCalculator } from "./priceCalculator.js";
import { ModalThanks } from "./modalThanks.js";

document.addEventListener("DOMContentLoaded", () => {
    const modalFormsBuy = new modals("dialog-compra", "btn-open-forms", "btn-close-forms");
    const formsPriceBuy = new priceCalculator("dialog-compra", "total", "subtotal", "envio", "descuento-cantidad", "producto-extra-cubo", "descuento-cubo");

    const UrlSheets = "https://script.google.com/macros/s/AKfycbxlWFv-1c72MCmnjQX_wIdZjFOccoArW9cUpN1DaJ383CCBw-S2Xj055exEYkvHiH3M/exec";

    const formBuy = document.getElementById("form-buy");
    const btnSubmit = document.getElementById("btn-submit");

    formBuy.addEventListener("submit", (e) => {
        e.preventDefault();//Desactivamos cualquier comportamiento inesperado
        btnSubmit.disabled = true; //Desactivamos el boton para prevenir clicks ansiosos

        let producto = document.querySelector('input[name="product"]:checked'); let nombreProduct
        if (producto.id === "product-1") nombreProduct = "Auriculares S/129.00"; else nombreProduct = "Auriculares S/238.00";

        let envio = document.querySelector('input[name="tipo-envio"]:checked'); let tipoEnvio;
        if (envio.id === "envio-gratis") tipoEnvio = "Envio Gratis S/.00"; else tipoEnvio = "Envio Express S/.20";

        let cubo = document.querySelector('input[name="producto-extra"]'); let pedidoCubo;
        if (cubo.checked === true) pedidoCubo = "Cubo de 19"; else pedidoCubo = "No";

        console.log(document.getElementById("departamento").value);
        console.log(document.getElementById("provincia").value);
        const ubicacion = `${document.getElementById("departamento").value} - ${document.getElementById("provincia").value}`;

        if (document.querySelector('input[name="terms"]').checked !== true) {
            alert("Debes aceptar los términos y condiciones");
            btnSubmit.disabled = false;
        }

        const dataClient = {
            nombre: document.getElementById("name").value,
            dni: document.getElementById("dni").value,
            telefono: document.getElementById("telefono").value,
            departamento: ubicacion,
            direccion: document.getElementById("referencia").value,
            producto: nombreProduct,
            envio: tipoEnvio,
            extra: pedidoCubo
        }

        console.log(dataClient);

        fetch(UrlSheets, {
            method: "POST",
            body: JSON.stringify(dataClient),
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors",
        })
            .then(() => {
                formBuy.reset();
                modalFormsBuy.close();
                const modalThanksBuy = new ModalThanks("thanks-compra", "btn-close-thanks");

            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                btnSubmit.disabled = false;

            })
    });

});





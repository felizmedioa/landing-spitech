// Utilidades JavaScript
// =====================
// Este archivo contiene funciones auxiliares reutilizables
// que puedes usar en toda tu aplicación

/**
 * Ejemplos de funciones útiles que puedes implementar:
 * 
 * - debounce(func, wait) - Retrasar ejecución de funciones
 * - throttle(func, limit) - Limitar frecuencia de ejecución
 * - scrollToElement(id) - Scroll suave a un elemento
 * - validateEmail(email) - Validar emails
 * - formatDate(date) - Formatear fechas
 * - Storage helpers (localStorage)
 * - Etc.
 */


function formatPrice(price) {

    const priceText = "S/." + price.toString() + ",00";

    return priceText;
}
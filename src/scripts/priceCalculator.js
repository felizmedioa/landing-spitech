export class priceCalculator {
    constructor(IdSelector, IdTotalPrice, IdSubPrice, IdShpngPrice, IdImpuestosPrice, IdDctPrice = null, IdCubo = null, IdCuboPrice = null) {
        this.selector = document.getElementById(IdSelector);
        this.showTotalPrice = document.getElementById(IdTotalPrice);
        this.showSubPrice = document.getElementById(IdSubPrice);
        this.showShippingPrice = document.getElementById(IdShpngPrice);
        this.showImpuestosPrice = document.getElementById(IdImpuestosPrice);

        this.showDiscountPrice = IdDctPrice ? document.getElementById(IdDctPrice) : null;
        this.showCubePrice = IdCuboPrice ? document.getElementById(IdCuboPrice) : null;

        this.cubeInput = IdCubo ? document.getElementById(IdCubo) : null;

        this.initCalculator();


        this.subPrice = 129.00;
        this.shippingPrice = 0;
        this.impuestosPrice = 19.68;
        this.cubePrice = 0;
        this.discountPrice = 0;

        if (!this.selector) {
            console.warn("No se encontró el selector");
            return;
        }

        this.initCalculator();
    }

    initCalculator() {

        const productInputs = this.selector.querySelectorAll('input[name="product"]');
        productInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.updateProduct(e.target);
            });
        });

        const shippingInputs = this.selector.querySelectorAll('input[name="tipo-envio"]');
        shippingInputs.forEach(element => {
            element.addEventListener('change', (e) => {
                this.updateShipping(e.target);
            });
        });

        if (this.cubeInput) {
            this.cubeInput.addEventListener('change', (e) => {
                this.updateCube(e.target);
            });
        }
    }

    updateProduct(input) {
        if (input.id === "product-1") {
            this.subPrice = 129.00;
            this.discountPrice = 0;
            const lineDiscount = document.getElementById("promo-cantidad");
            lineDiscount.style.display = "none";
        } else if (input.id === "product-2") {
            this.subPrice = 258.00;
            this.discountPrice = 20.00;
            const lineDiscount = document.getElementById("promo-cantidad");
            lineDiscount.style.display = "flex";
        }
        this.showSubPrice.textContent = formatPrice(this.subPrice);
        this.showDiscountPrice.textContent = formatPrice(this.discountPrice);
        this.updateTotal();
    }

    updateShipping(input) {
        if (input.id === "envio-gratis") {
            this.shippingPrice = 0;
            this.showShippingPrice.textContent = "Gratis";
        } else if (input.id === "envio-express") {
            this.shippingPrice = 20.00;
            this.showShippingPrice.textContent = formatPrice(this.shippingPrice);
        }
        this.updateTotal();
    }

    updateCube(input) {
        const lineCubo = document.getElementById("promo-cubo");
        if (input.checked) {
            this.cubePrice = 19.00;
            lineCubo.style.display = "flex";
        } else {
            this.cubePrice = 0;
            lineCubo.style.display = "none";
        }
        this.showCubePrice.textContent = formatPrice(this.cubePrice);
        this.updateTotal();
    }

    updateTotal() {
        const total = this.subPrice + this.shippingPrice + this.cubePrice - this.discountPrice;
        this.showTotalPrice.textContent = total.toFixed(2);
    }

}
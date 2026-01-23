export class notify {
    constructor(idNotif, IdCloseNotif, time) {
        this.names = [
            "Valentina", "Sebastián", "Luciana", "Matías", "Renata",
            "Joaquín", "Ximena", "Dante", "Micaela", "Leonardo",
            "Fiorella", "Bruno", "Rodrigo", "Camila",
            "Enzo", "Fabián", "Romina", "Marcelo", "Valeria",
            "Alonso", "Miranda", "Adrián", "Bianca", "Diego",
            "Julieta", "Emilio", "Tatiana", "Gael", "Isabella"
        ];
        this.distritos = [
            "Ancón", "Ate", "Barranco", "Breña", "Carabayllo", "Chaclacayo",
            "Chorrillos", "Cieneguilla", "Comas", "El Agustino", "Independencia",
            "Jesús María", "La Molina", "La Victoria", "Lima (Cercado)", "Lince",
            "Los Olivos", "Lurigancho-Chosica", "Lurín", "Magdalena del Mar",
            "Miraflores", "Pachacámac", "Pucusana", "Pueblo Libre", "Puente Piedra",
            "Punta Hermosa", "Punta Negra", "Rímac", "San Bartolo", "San Borja",
            "San Isidro", "San Juan de Lurigancho", "San Juan de Miraflores",
            "San Luis", "San Martín de Porres", "San Miguel", "Santa Anita",
            "Santa María del Mar", "Santa Rosa", "Santiago de Surco", "Surquillo",
            "Villa El Salvador", "Villa María del Triunfo"
        ];
        this.popUp = document.getElementById(idNotif);
        this.closePopUp = document.getElementById(IdCloseNotif);
        this.timeInterval = time * 1000;
        this.nameNotiBuy = document.getElementById("name-noti-buy");
        this.distritoNotiBuy = document.getElementById("noti-distrito");
        this.init();
    }

    init() {
        setTimeout(() => {
            this.nameNotiBuy.textContent = this.selectName();
            this.distritoNotiBuy.textContent = this.selectDistrito();
            this.popUp.classList.add("active");

            this.closePopUp.addEventListener('click', () => {
                this.actionClose()
            })

            setTimeout(() => {
                this.actionClose()
            }, this.timeInterval);

        }, this.timeInterval);
    }

    actionClose() {
        this.popUp.classList.remove("active");
        this.init();
    }

    selectName(nameAnt = null) {
        let name = this.names[Math.floor(Math.random() * this.names.length)];
        while (nameAnt === name) {
            name = this.names[Math.floor(Math.random() * this.names.length)];
        }
        return name;
    }

    selectDistrito(distritoAnt = null) {
        let distrito = this.distritos[Math.floor(Math.random() * this.distritos.length)];
        while (distritoAnt === distrito) {
            distrito = this.distritos[Math.floor(Math.random() * this.distritos.length)];
        }
        return distrito;
    }
}

class MaDate 
{
    static ageDepartRetraite = 67;
    static ageMajorite = 18;
    /**
     * constructeur
     * @param {Date} _date la date de naissance 
     */
    constructor(_date) {
        this.dateAujourdhui = new Date();
        this.dateNaissance = _date;
    }

    /**
     * retourne vrai si la date de naissance est dans le passé
     * @returns {boolean} Vrai si la date est dans le passé sinon faux
     */
    estDansLePasse() {
        return this.dateAujourdhui > this.dateNaissance;
    }

    /**
     * retourne Le nombre d'année entre aujourd'hui et la date de naissance
     * @returns {Number} Le nombre d'année entre aujourd'hui et la date de naissance
     */
    intervalleDates() {
        let diffDates = this.dateAujourdhui - this.dateNaissance;
        return parseInt(diffDates/(1000*3600*24*365));
    }
}

export { MaDate }


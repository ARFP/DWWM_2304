class Participant 
{
    constructor(_participantFromJson) {
        this.lastName = '';
        this.firstName = '';
        this.country = _participantFromJson.pays;
        this.time = _participantFromJson.temps;
        this.minutes = 0;
        this.seconds = 0;
        this.setFirstNameAndLastNameFromFullName(_participantFromJson.nom);
        this.setTime();
    }

    setFirstNameAndLastNameFromFullName(_name) {
        let myName = _name.split(' ') // ['Grande', 'Léo']
        this.lastName = myName[0];
        this.firstName = myName[1];
    }

    setTime() {
        this.minutes = parseInt(this.time / 60);
        this.seconds = this.time % 60;

        if(this.seconds < 10) {
            this.seconds = "0" + this.seconds;
        }
    }
}

export { Participant }
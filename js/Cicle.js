export class Cicle{
    constructor(nom, categoria, numAlumnes, abreviatura){
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0;
        this.darreraModificacioCicle = "";
        this.moduls = []; // array de moduls buida
    }

    setNumEdicions(){
        this.numEdicions += 1;
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let data = `${day} / ${month+1} / ${year}`;
        this.darreraModificacioCicle = data;
    }

    toString(){
        let moduls = "Mòduls del cicle: ";
        for(let i=0; i<this.moduls.length; i++){
            moduls += this.moduls[i].modul_nom + ', ';
        }
        let dades_cicle = `Nom: ${this.nom}, Categoria: ${this.categoria}, Num. de alumnes: ${this.numAlumnes}, Abreviatura: ${this.abreviatura}, Num. editat: ${this.numEdicions}, Darrera modificacio cicle: ${this.darreraModificacioCicle}, Mòduls del cicle: ${moduls}.`;
        return dades_cicle;
    }


    afegirModul(modul){
        this.moduls.push(modul);
    }

    horesCicle(){
        let horesTotals = 0;
        for (let i=0; i<this.moduls.length; i++){
            horesTotals += this.moduls[i].modul_hores;
        }
        return horesTotals;
    }
}

export class Produit {
    forme: string;
    categorie: string;
    nom: string;
    description: string;
    prix: number;
    image: string;

    constructor(forme: string, categorie: string, nom: string, description: string, prix: number, image: string) {
        this.forme = forme;
        this.categorie = categorie;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.image = image;
    }
}
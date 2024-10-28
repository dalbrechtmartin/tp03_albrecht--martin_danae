export class Produit {
    forme: string;
    catégorie: string;
    nom: string;
    description: string;
    prix: number;
    image: string;

    constructor(forme: string, catégorie: string, nom: string, description: string, prix: number, image: string) {
        this.forme = forme;
        this.catégorie = catégorie;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.image = image;
    }
}
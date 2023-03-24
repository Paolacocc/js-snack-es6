// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


const bike = [
    {
        nome: "Pippo",
        peso: 10
    },
    {
        nome: "Pluto",
        peso: 56
    },
    {
        nome: "Pallo",
        peso: 34
    },
    {
        nome: "Pinco",
        peso: 16
    },
    {
        nome: "Giulia",
        peso: 12
    }
];

const [firstB, secondB, thirdB, fourthB, fifthB] = bike;

const ligthB = `la bicicletta piu leggera e' quella di ${firstB.nome} e pesa ${firstB.peso}`;

const result = document.querySelector("h1");
result.innerHTML = ligthB;

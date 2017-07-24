// tworzymy naszego budowniczego
class Builder1 {
    constructor() {
        this.name = '';
        this.weight = 0;
    }

    step1() {
        console.log('krok 1');
        this.key = 'builder1';
    }

    step2() {
        console.log('krok 2');
        this.weight = 34;
    }

    generate() {
        return {key: this.key, weight: this.weight};
    }
}

// tworzymy kolejnego budowniczego
// obie klasy muszą mieć wspólne metody
// w naszym przypadku są to step1(), step2() i generate()
class Builder2 {
    constructor() {
        this.name = '';
        this.age = 0;
    }

    step1() {
        console.log('inny krok 1');
        this.name = 'builder2';
    }

    step2() {
        console.log('inny krok 2');
        this.age = 22;
    }

    generate() {
        return {name: this.name, age: this.age};
    }
}

// mamy klasę udostępniającą metodę,
// do które przekazujemy naszego budowniczego
class App {

    // w tej metodzie wykonujemy odpowiednie kroki,
    // w których ustawiamy niezbędne wartości
    createItem(builder) {
        builder.step1();
        builder.step2();

        // zwracany obiekt, który w żaden sposób
        // nie musi być podobny do poprzedniego
        return builder.generate();
    }
}

const b1 = new Builder1();
const b2 = new Builder2();

const app = new App();
const item1 = app.createItem(b1);
const item2 = app.createItem(b2);

console.log(item1, item2);

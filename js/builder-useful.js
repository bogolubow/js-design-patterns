// tworzymy naszego budowniczego
class InputBuilder {

    setLabel(text) {
        this.label = document.createElement('label');
        this.label.textContent = text ? text : this.input.name;
        this.label.setAttribute('for', this.input.id);
    }

    setWrapper() {
        this.wrapper = document.createElement('div');
    }

    setOptions(opts) {
        this.input = document.createElement('input');

        this.setName(opts.name);
        this.setId(opts.id);
    }

    setId(id) {
        this.input.setAttribute('id', id);
    }

    setName(name) {
        this.input.name = name;
    }

    // metoda zwrcająca obiekt na podstawie danych,
    // które wcześniej zostały ustawione
    generate() {
        this.wrapper.appendChild(this.label);
        this.wrapper.appendChild(this.input);

        return this.wrapper;
    }
}

// inny budowniczy
class TextAreaBuilder {
    // dowolne rozwiązanie z jednym warunkiem
    // należy zdeifniować metody, które są wykorzystywanie
    // przy tworzeniu nowego obiektu
    // w naszym przypadku są to
    // setOptions(), setLabel(), setWrapper(), generate()
}

class Form {
    constructor() {
        this.fields = [];
    }

    addField(builder, opts) {
        // ustawiamy dane, na podstawie których
        // budowniczy zwróci odpowiedni obiekt
        builder.setOptions(opts);

        // kolejny krok ustawiania danych,
        // tym razem ustawiamy opis pola
        builder.setLabel(opts.label);

        // na koniec tworzymy rodzica
        // dla pola i opisu
        builder.setWrapper();

        // po zebraniu danych budowniczy
        // zwraca nam obiekt z odpowiednimi właściwościami
        const field = builder.generate();

        this.fields.push(field);
    }
}

const form = new Form();
form.addField(new InputBuilder, {label: 'Podaj nazwę', name: 'nazwa', value: 'wartosc', 'id': 'name'});

console.log(form.fields, form.fields[0]);


// tworzymy klasy z innych kategorii,
// ale o podobnych cechach
class DeveloperFrontend {
    constructor(name) {
        this.name = name;
        this.type = 'frontend';
        this.skills = ['javascript', 'react'];
    }
}

class DeveloperBackend {
    constructor(name) {
        this.name = name;
        this.type = 'backend';
        this.skills = ['php', 'symfony'];
    }
}


// tym razem tworzę klasę, która będzie zarządzać
// całym procesem generowania obiektów (nasza fabryka)
class HumanResources {
    constructor() {

        // zmienna przechowująca konstruktory,
        // za pomocą, których będziemy tworzyć obiekty
        this.devConstructors = [];
    }

    // metoda rejestrująca nowe konstruktory
    // dzięki niej nie będziemy musieli przebudowywać implementacji
    // wystarczy zarejestrować nowy konstruktor i można będzie
    // generować nowe instancje obiektów
    registerDev(type, constructor) {
        this.devConstructors[type] = constructor;
    }

    // metoda tworząca (zwracająca) obiekt na podstawie
    // zarejestrowanego wcześniej konstruktora
    getDev(type, name) {
        const constructor = this.devConstructors[type];

        let dev;

        // sprawdzam czy konstruktor został
        // wcześniej zarejestrowany
        if(constructor) {
            dev = new constructor(name);
        }

        return dev;
    }
}

// tworzę instancję obiektu
const hr = new HumanResources();

// rejestruje odpowiednie konstruktory
hr.registerDev('frontend', DeveloperFrontend);
hr.registerDev('backend', DeveloperBackend);

// spis naszych programistów
const developers = [];

// dzięki fabryce mogę w łatwy sposób tworzyć
// nasz zespół programistów
developers.push(hr.getDev('frontend', 'Ania'));
developers.push(hr.getDev('frontend', 'Marcin'));
developers.push(hr.getDev('backend', 'Kasia'));

developers.forEach(dev => {
    console.log(dev.type, dev.name, dev.skills.join(', '));
})

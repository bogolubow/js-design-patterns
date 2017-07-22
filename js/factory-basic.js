
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

// tworzymy jednostkę (w tym przypadku funkcję),
// która tworzy nam obiekt na podstawie danych przekazanych w parametrze
// to będziesz nasza 'fabryka'
const createDeveloper = (type, name) => {

    // zmienna przechowująca instancję obiektu
    let developer;

    // jaki obiekt stworzyć determinuje nam parametr type
    switch(type) {
        case 'frontend':
            developer = new DeveloperFrontend(name);
            break;
        case 'backend':
            developer = new DeveloperBackend(name);
            break;
        // tutaj wprowadzamy kolejne rodzaje developerów
        // to jest wąskie gardło naszej implementacji
        // musimy modyfikować tą część kodu za każdym razem
        // jak pojawi się nowy rodzaj programisty
        // postaramy się rozwiązać ten problem  w wersji
        // rozszerzonej naszego wzorca
    }

    return developer;
}

// spis naszych programistów
const developers = [];

// dzięki fabryce mogę w łatwy sposób tworzyć
// nasz zespół programistów
developers.push(createDeveloper('frontend', 'Ania'));
developers.push(createDeveloper('frontend', 'Marcin'));
developers.push(createDeveloper('backend', 'Kasia'));

developers.forEach(dev => {
    console.log(dev.type, dev.name, dev.skills.join(', '));
})

// JavaScript nie posiada słowa kluczowego interface,
// jak większośc obiektowych języków programowania
// dlatego musimy stworzyć własne rozwiązanie oparte
// o kacze typowanie (ang. duck typing)
class Interface {

    // do konstrktora przekazujemy nazwę interfejsu,
    // oraz metody i właściwości, które powinny być zaimplementowane
    // w obiekcie, który będziemy sprawdzać
    constructor(name, methods, props = []) {
        this.name = name;

        // sprawdzam czy przekazane elementy w tablicy
        // to ciągi znaków (łańcuchy)
        this.methods = methods.filter( m => {
            return typeof m === 'string';
        });

        // podobnie tutaj
        this.props = props.filter( p => {
            return typeof p === 'string';
        });
    }

    // tworzę metodę, która będzie sprawdzać czy przekazany
    // w parametrze obiekt posiada przekazane w konstrukrorze
    // metody i właściwośći
    isImplementedBy(obj) {
        if(typeof obj === 'object') {

            // jeśli obiekt nie posiada jakieś metody
            // to odrazu zwracam false
            if(!this.checkMethods(obj)) {
                return false;
            }

            // podobnie z właściwościami
            if(!this.checkProps(obj)) {
                return false;
            }

            return true;
        }

        return false;
    }

    checkMethods(obj) {
        const len = this.methods.length;
        for(let i = 0; i<len; i++) {
            const m = this.methods[i];

            // sprawdzam czy obiekt nie posiada takiej właściwości
            // oraz czy przypadkiem jest to funkcją
            // jeśli tak to zwracam false
            if(!obj[m] || typeof obj[m] !== 'function') {
                return false;
            }
        };

        return true;
    }

    checkProps(obj) {
        const len = this.props.length;
        for(let i = 0; i<len; i++) {
            const p = this.props[i];

            // sprawdzam czy obiekt nie posiada takiej właściwości
            // oraz czy przypadkiem nie jest ona funkcją
            // jeśli tak to zwracam false
            if(!obj[p] || typeof obj[p] === 'function') {
                return false;
            }
        };

        return true;
    }
}


// klasa potrzebna do przykładu
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

// klasa potrzebna do przykładu
class Car {
    constructor(color, model) {
        this.color = color;
        this.model = model
    }
}

// tworzę instancję obiektów na podstawie konstruktorów
const person = new Person('Michał', 'Kowalski');
const car = new Car('black', 'A5');

// tworzę interfejs, który wymaga metody `getFullName`
const IPerson = new Interface('IPerson', ['getFullName']);
if(IPerson.isImplementedBy(person)) {
    // dzięki interfajsowi wiem, że taka metoda istnieje
    // więc mogę z niej skorzystać
    console.log(person.getFullName());
}

if(!IPerson.isImplementedBy(car)) {
    // na obiekcie `car` nie możemy użyć metody `getFullName`,
    // ponieważ nie została ona zaimplementowana
    console.log('Obiekt `car` nie posiada metody `getFullName`');
}

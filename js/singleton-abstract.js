// deklaruje zmienną Singleton za pomocą słowa kluczowego const,
// dzięki czemu zmienna ta nie może zostać nadpisana
const Singleton = (function() { // wykorzystuje IIFE - samo wywołującą się funkcję

    // zmienna dostępna jedynie z zakresie IIFE,
    // przechowuje instancję obiektu
    let instance;

    // deklarujemy funkcję, która zwraca nam instancję obiektu
    // wystepującego tylko raz w całej naszej aplikacji
    function createInstance() {

        // dowolna implementacja klasy,
        // którą potrzebujemy w naszej aplikacji
        class MyClass {
            constructor() {

                // zmienna wykorzystywana do sprawdzenia czy faktycznie
                // to ta sama instancja naszego obiektu
                this.number = Math.random();
            }
        }

        return new MyClass();
    }

    return {
        // do zmiennej Singleton przypisujemy obiekt,
        // który posiada właściwość getInstnace
        getInstnace: function() {
            // sprawdzamy czy zmienna instance posiada już
            // instancję naszego obiektu
            if(!instance) {
                instance = createInstance();
            }

            // zwracamy instancję naszego obiektu
            return instance;
        }
    }
})();


const s1 = Singleton.getInstnace();
const s2 = Singleton.getInstnace();

console.log(s1 === s2, s1.number === s2.number, s1, s2);

const Config = (function() {

    let instance;

    function createInstance() {

        class Config {
            constructor() {

                this.version = '1.2.3';
                this.database = 'localstorage';

            }
        }

        return new Config();
    }

    return {

        getInstnace: function() {

            if(!instance) {
                instance = createInstance();
            }

            return instance;
        }
    }
})();


const config = Config.getInstnace();

console.log(config);

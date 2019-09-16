import Route from '@ember/routing/route';

const importObject = {
    imports: {
        imported_func: function(arg) {
          console.log(arg);
        }
      }
    };

export default Route.extend({
    init() {
        WebAssembly.instantiateStreaming(fetch('number_adder.wasm'), importObject).then((obj) => {
            console.log(obj);
            let foo = obj.instance.exports.add_number(1, 2);
            alert(foo);
        })
    }
});



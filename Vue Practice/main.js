const app = new Vue({
    el: '#app',
    data: {
        titulo: "Hello World with Vue",
        frutas: [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Naranja', cantidad: 0},
            {nombre: 'Banana', cantidad: 11}
        ],
        nuevaFruta: ""
    },
    methods: {
        // agregarFruta: function(){
        agregarFruta () {
            this.frutas.push({nombre: this.nuevaFruta, cantidad: 0});
            console.log("Elemento Agregado");
        }
    }
});

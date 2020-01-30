const app = new Vue({
    el: '#app',
    data: {
        titulo: "Hello World with Vue",
        fondo: "bg-danger",
        color: true,
        frutas: [
            {nombre: 'Manzana', cantidad: 10},
            {nombre: 'Naranja', cantidad: 0},
            {nombre: 'Banana', cantidad: 11}
        ],
        nuevaFrutaNombre: "",
        nuevaFrutaCantidad: 0,
        total: 0,
    },
    methods: {
        // agregarFruta: function(){
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFrutaNombre,
                cantidad: this.nuevaFrutaCantidad
            });
            console.log("Elemento Agregado");
            this.nuevaFrutaNombre = "";
            this.nuevaFrutaCantidad = 0;
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for(fruta of this.frutas) {
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
});

const app= new Vue({
    el: '#app',
    data: {
        titulo: "Verduleria ",
        //array de items
        frutas: [
            {nombre: 'Manzana', cant: 10 },
            {nombre: 'Pera', cant: 0 },
            {nombre: 'Naranja', cant: 10 }
        ],
        nuevaFruta: '',
        nuevaCant: '',
        total: 0
    },

    methods:{
        //metodo para cargar item a mi array
        agregarFruta (){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cant: this.nuevaCant
            })
        this.nuevaFruta= ''
        this.nuevaCant= ''
        },

        computed: {
            sumarCant (){
                this.total= 0;
                for(item of this.frutas){
                    this.total = this.total + item.cant;
                    console.log(this.total)
                }
                return this.total;
            }
        }
    }
})

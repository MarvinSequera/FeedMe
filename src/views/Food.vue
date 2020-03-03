<template>
    <div>
        <h1>Stock de Alimentos</h1>
        <h3>Consulta los detalles de Stock, precios y origen de nuestros alimentos.</h3>
        <FoodTable v-if="food" :food="food"/>
    </div>
</template>
<script>
import axios from 'axios'
import FoodTable from '../components/FoodTable.vue'
export default {
    name:'Food',
    components:{
        FoodTable
    },
    data() {
        return {
            food:[]
        }
    },
    mounted: function () {
        axios.get('https://react-webinar.herokuapp.com/')
        .then(res => {return this.food = res.data})
        .catch(err => console.log(err))
    },
    methods: {
        onDBCLick() {
            console.log("hola")
        }
    }
}
</script>
<style scoped>
div{
  margin-left: 50px;
  margin-top: 80px;
  margin-right: 50px;
}
h1{
  margin-bottom: 20px;
  margin-left: 50px;
}
h3{
  margin-bottom: 30px;
  margin-left: 50px;
}
</style>

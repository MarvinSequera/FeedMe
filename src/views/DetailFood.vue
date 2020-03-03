<template>
    <b-container v-if="oneFood.img">
        <b-row>
            <b-col lg="4">
                <h2>{{oneFood.name}}</h2>
                <img :src="require(`../../public/img/${oneFood.img}`)" alt="Food">
            </b-col>
            <b-col lg="8">
                <h2>Especificaciones</h2>
                <h5>{{oneFood.description}}</h5>
                <hr>
                <h5>Precio: {{oneFood.price}} Eur</h5>
                <p v-if="oneFood.importTax">Ya incluye los impuestos de importación</p>
                <b-card no-body>
                    <b-tabs card>
                        <b-tab title="Nutricional" active>
                            <b-card-text>Información nutricional</b-card-text>
                            <hr>
                            <p>Aporte nutricional por 100g:</p>
                            <ul>
                                <li>Calorías: {{oneFood.kcal}}</li>
                                <li>Proteinas: {{oneFood.protein}}</li>
                                <li>Grasa: {{oneFood.fat}}</li>
                                <li>Carbohidratos: {{oneFood.carbs}}</li>
                            </ul>
                        </b-tab>
                        <b-tab title="Origen">
                            <b-card-text>Origen</b-card-text>
                            <hr>
                            <p>{{oneFood.name}} procedente de:</p>
                            <ul>
                                <li v-for="(country, index) in oneFood.origin" :key="index">{{country}}</li>
                            </ul>
                        </b-tab>
                        <b-tab title="Stock" active>
                            <b-card-text>Stock</b-card-text>
                            <hr>
                            <p>Stock actula: {{oneFood.stock}} unidades en stock</p>
                        </b-tab>
                    </b-tabs>
                </b-card>
                <b-button class="button" as router-link to="/food">Volver al índice</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import axios from 'axios'

export default {
    name:'DetailFood',
    data () {
        return {
            oneFood:{},
        }
    },
    mounted: function() {
        axios.get(`https://react-webinar.herokuapp.com/${this.$route.query.id}`)
        .then(one => {return this.oneFood=one.data})
        .catch(err => console.log(err))
    }
}
</script>
<style scoped>
img{
    height: 150px;
}
.button {
    margin-top: 15px;
}
h2{
    margin-top: 15px;
}
</style>
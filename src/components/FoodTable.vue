<template>
    <div>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                  <th scope="col">Imagen</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Detalles</th>
                </tr>
            </thead>
            <tbody>
               <tr v-for="one in food" :key="one._id">
                   <td><img :src="require(`../../public/img/${one.img}`)" alt="food"></td>
                   <td>{{one.name}}</td>
                   <td>{{one.price}} Euros</td>
                   <td>{{one.stock}}</td>
                   <td><b-button as router-link :to="`/food/one?id=${one._id}`" variant="success">Ver</b-button></td>
                </tr> 
            </tbody>
        </table>
    </div>
</template>

<script>
export default {    
    props: {
        food: Array
    }
}
</script>
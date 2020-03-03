<template>
    <div >
    <h1>FeedMe!!</h1>
    <h3>Una sencilla SPA hecha en Vue</h3>
    <b-button class="button" as router-link to ="/food" variant="success">Ver Alimentos</b-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
<style scoped>
div{
  margin-left: 150px;
  margin-top: 80px;
}
h1{
  margin-bottom: 20px;
}
h3{
  margin-bottom: 30px;
}
.button{
  font-size: 25px;
  padding: 20px 40px;
}
</style>

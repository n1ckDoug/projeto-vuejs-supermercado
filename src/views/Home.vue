<script setup>

import NavBar from '@/components/NavBar.vue';
import Home from '@/components/Home.vue';
import Sobre from '@/components/Sobre.vue';
import Oferta from '@/components/Oferta.vue';
import Comentarios from '@/components/Comentarios.vue';
import Rodape from '@/components/Footer.vue';

</script>

<template>

    <NavBar />
    <Home />
    <Sobre />
    <Oferta />
    <Comentarios />
    <Rodape />

</template>

<style scoped>
#produtos .card {
    border: none;
    background-color: hsl(0deg 0% 97.25%);
}

#produtos .card img {
    height: 300px;
}

#produtos .card .produtoEstoque {
    color: rgb(77 175 72);
}

#produtos .card input {
    background-color: transparent;
    border: none;
    width: 50px;
    text-align: center;
}

#produtos .btn-decrementar {
    background-color: hsl(46.23deg 100% 76.08%);
}

#produtos .btn-incrementar {
    background-color: hsl(117.89deg 70.37% 84.12%);
}
</style>
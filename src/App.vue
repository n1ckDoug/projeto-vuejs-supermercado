<script setup>
import { reactive } from 'vue';

import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import Sobre from './components/Sobre.vue';
import Oferta from './components/Oferta.vue';
import Produtos from './components/Produtos.vue';
import Comentarios from './components/Comentarios.vue';
import Rodape from './components/Footer.vue';

const produtos = reactive({
  mercadoria: [
    {
      productId: 1,
      nome: 'Carne',
      img: 'https://cdn.pixabay.com/photo/2016/11/10/16/29/beef-1814638_1280.png',
      addCarrinho: false,
      quantidade: 1,
      estoque: true,
      preco: '24,00/KG',
      avaliacoes: 122,
      tipo: 'Carne'
    },
    {
      productId: 2,
      nome: 'Leite',
      img: 'https://cdn.pixabay.com/photo/2024/09/01/09/15/milk-9013553_1280.png',
      addCarrinho: false,
      quantidade: 1,
      estoque: true,
      preco: '24,00/KG',
      avaliacoes: 122,
      tipo: 'Leite'
    },
    {
      productId: 3,
      nome: 'Brocolis',
      img: "https://cdn.pixabay.com/photo/2020/07/31/02/19/broccoli-5451720_960_720.png",
      addCarrinho: false,
      quantidade: 1,
      estoque: true,
      preco: '24,00/KG',
      avaliacoes: 122,
      tipo: 'Vegetal'
    },
    {
      productId: 4,
      nome: 'Peixe',
      img: "https://cdn.pixabay.com/photo/2016/04/01/09/57/animal-1299691_1280.png",
      addCarrinho: false,
      quantidade: 1,
      estoque: true,
      preco: '24,00/KG',
      avaliacoes: 122,
      tipo: 'Carnes'
    },
    {
      productId: 5,
      nome: 'Queijo',
      img: "https://cdn.pixabay.com/photo/2024/07/01/04/14/ai-generated-8864286_1280.png",
      addCarrinho: false,
      quantidade: 1,
      estoque: true,
      preco: '24,00/KG',
      avaliacoes: 122,
      tipo: 'Leites'
    },
    {
      productId: 6,
      nome: 'Tomate',
      img: "https://cdn.pixabay.com/photo/2013/07/12/18/19/tomato-153272_1280.png",
      addCarrinho: false,
      quantidade: 1,
      estoque: true,
      preco: '2,50',
      avaliacoes: 122,
      tipo: 'Vegetal'
    },
  ]
});

const getProdutos = () => {
  return produtos.mercadoria;
}

</script>

<template>

  <NavBar />
  <Home />
  <Sobre />
  <Oferta />
  <Produtos :mercadoria="getProdutos()" />
  <Comentarios />
  <Rodape />

</template>

<style scoped></style>
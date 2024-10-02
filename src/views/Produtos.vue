<script setup>

import { reactive } from 'vue';

import NavBar from '@/components/NavBar.vue';
import Rodape from '@/components/Footer.vue';
import Produtos from '@/components/Produtos.vue';

// Para pegar o valor da rota. EX: vai pegar o 12 de /produtos/12
// route.params.nomeDoObjeto
// import { useRoute } from 'vue-router';
// const route = useRoute();
// console.log(route.params.nome);

const produtos = reactive({
    filtro: 'todos',
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
            tipo: 'carne',
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
            tipo: 'leite',
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
            tipo: 'vegetal',
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
            tipo: 'carne',
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
            tipo: 'leite',
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
            tipo: 'vegetal',
        },
        {
            productId: 7,
            nome: 'Ovos',
            img: "https://cdn.pixabay.com/photo/2017/07/21/00/02/egg-2524267_1280.png",
            addCarrinho: false,
            quantidade: 1,
            estoque: true,
            preco: '20,00 - 30 ovos',
            avaliacoes: 122,
            tipo: 'outro',
            addHome: false
        },
        {
            productId: 8,
            nome: 'Pão',
            img: "https://cdn.pixabay.com/photo/2017/03/31/02/27/bread-2190249_1280.png",
            addCarrinho: false,
            quantidade: 1,
            estoque: true,
            preco: '8,00',
            avaliacoes: 122,
            tipo: 'outro'
        },
    ]
});

const getTipoCarne = () => {
    return produtos.mercadoria.filter(mercadoria => mercadoria.tipo === 'carne');
};

const getTipoLeite = () => {
    return produtos.mercadoria.filter(mercadoria => mercadoria.tipo === 'leite');
};

const getTipoVegetal = () => {
    return produtos.mercadoria.filter(mercadoria => mercadoria.tipo === 'vegetal');
};

const getTipoOutro = () => {
    return produtos.mercadoria.filter(mercadoria => mercadoria.tipo === 'outro');
};

const getProdutos = () => {
    const { filtro } = produtos;

    switch (filtro) {
        case 'carne':
            return getTipoCarne();
        case 'leite':
            return getTipoLeite();
        case 'vegetal':
            return getTipoVegetal();
        case 'outro':
            return getTipoOutro();
        default:
            return produtos.mercadoria;
    }
};
</script>

<template>

    <NavBar />
    <Produtos :filtro-alimento="e => produtos.filtro = e.target.value" :mercadoria="getProdutos()" />
    <Rodape />

</template>

<style scoped></style>
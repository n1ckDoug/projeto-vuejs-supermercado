import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('../views/Home.vue') },// Só carrega o componente quando clicar no link
    { path: '/sobre', component: () => import('../views/Sobre.vue') },// Só carrega o componente quando clicar no link
    { path: '/produtos', component: () => import('../views/Produtos.vue') },// Só carrega o componente quando clicar no link
    // /produtos/:id -- Para trabalhar com rotas dinâmicas. EX: /produtos/12
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'//active-link
});

export default router;
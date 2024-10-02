<script setup>
const props = defineProps(['mercadoria', 'filtroAlimento']);
</script>

<template>

    <section id="produtos" class="mt-5 mb-5 pt-5 pb-5">
        <div class="container">
            <div class="row">
                <form>
                    <div class="col-md-3">
                        <select @change="props.filtroAlimento" class="form-select">
                            <option value="todos">Todos</option>
                            <option value="carne">Carnes</option>
                            <option value="leite">Leite e derivados</option>
                            <option value="vegetal">Vegetais</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="row">
                <div class="col-lg-4" v-for="mercadoria in props.mercadoria">
                    <div :id="mercadoria.productId" class="card mt-5" style="width: 100%;">
                        <img :src="mercadoria.img" class="card-img-top" />
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <h5 class="card-title">{{ mercadoria.nome }}</h5>
                                <p><strong>R${{ mercadoria.preco }}</strong></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <p><span style="color: hsl(42.9deg 100% 59.41%);"><i class="bi bi-star-fill"></i> <i
                                            class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
                                            class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></span> ( {{
                                                mercadoria.avaliacoes }} )</p>
                                <div v-if="mercadoria.estoque">
                                    <p :class="{ produtoEstoque: mercadoria.estoque }" class="fw-bold">Em Estoque</p>
                                </div>
                                <div v-else>
                                    <p class="fw-bold" style="color: red;">Produto em falta</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <div style="background-color: #ccc;" class="rounded">
                                    <button @click="() => mercadoria.quantidade--" class="btn btn-decrementar me-3"
                                        type="button">-</button>
                                    <input type="number" :value="mercadoria.quantidade">
                                    <button @click="() => mercadoria.quantidade++" class="btn btn-incrementar ms-3"
                                        type="button">+</button>
                                </div>
                                <a href="#" class="nav-link fw-bold fs-3">
                                    <i class="bi bi-cart-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
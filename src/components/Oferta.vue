<script setup>

const dataDoEvento = new Date("Oct 1, 2024 18:30:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();

    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const diasAteOEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaEvento % horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaEvento % minutosEmMs) / segundosEmMs);

    document.querySelector('#contador_dia').innerHTML = `<strong>${diasAteOEvento}</strong> Dias`;
    document.querySelector('#contador_horas').innerHTML = `<strong>${horasAteOEvento}</strong> Horas`;
    document.querySelector('#contador_minutos').innerHTML = `<strong>${minutosAteOEvento}</strong> Minutos`;
    document.querySelector('#contador_segundos').innerHTML = `<strong>${segundosAteOEvento}</strong> Segundos`;

    if (distanciaEvento < 0) {
        clearInterval(contaAsHoras);
        document.querySelector('#contador').innerHTML = `A oferta chegou ao fim!`;
        document.querySelector('#contador').classList.add('bg-contador');
    }
}, 1000);

</script>

<template>
    <section id="oferta" class="mt-5 mb-5 pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="d-lg-flex align-items-center">
                    <div class="col-lg-6">
                        <img class="d-block w-100" src="../images/frutas.png" alt="">
                    </div>
                    <div style="color: white;" class="col-lg-6">
                        <h2>Ofertas Semanais</h2>
                        <h1 class="fw-bold">Confira a oferta do dia</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut, dolor maxime at ad
                            doloremque
                            eligendi delectus nobis nulla facilis.</p>
                        <div class="time-promotion">
                            <div id="contador">
                                <div class="row">
                                    <div class="col mb-3">
                                        <div id="contador_dia"></div>
                                    </div>
                                    <div class="col mb-3">
                                        <div id="contador_horas"></div>
                                    </div>
                                    <div class="col mb-3">
                                        <div id="contador_minutos"></div>
                                    </div>
                                    <div class="col mb-3">
                                        <div id="contador_segundos"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#oferta {
    background-color: rgb(77 175 72);
}

.bg-contador {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    color: #000;
    font-size: 20px;
    background-color: white;
}

#oferta .time-promotion #contador #contador_dia,
#oferta .time-promotion #contador #contador_horas,
#oferta .time-promotion #contador #contador_minutos,
#oferta .time-promotion #contador #contador_segundos {
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    color: #000;
    font-size: 30px;
    background-color: white;
}
</style>
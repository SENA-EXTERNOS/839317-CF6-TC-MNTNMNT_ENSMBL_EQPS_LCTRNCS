<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Reparación de fallas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t3/f1.png', alt='')
      .col-lg-8
        p El mantenimiento preventivo ayuda a evitar que los elementos de un equipo se desgasten o fallen, sin embargo en muchas ocasiones por diversos motivos esto no se puede asegurar y por ende surgen fallos o averías en los dispositivos que obligan a los profesionales encargados a realizar acciones diferentes a las vistas anteriormente. Estos procedimientos consisten en la reparación o reemplazo de las piezas comprometidas para que un aparato electrónico vuelva a operar (Bolinches, 2012). Para ampliar la información, se recomienda revisar el componente formativo diagnóstico de equipos electrónicos la sección “pruebas y mediciones” para conocer qué tipo de procedimientos existen y así comprobar el estado de un elemento eligiendo la mejor intervención a realizar para identificar qué elementos, áreas o piezas están comprometidas.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

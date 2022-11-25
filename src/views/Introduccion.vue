<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Apreciado aprendiz, sea bienvenido a este recurso educativo que está orientado al mantenimiento de equipos electrónica. Con el desarrollo del presente componente formativo se aprenderá sobre el 
          em software 
          | de equipos (instalación, funcionamiento, configuración fallas comunes, etc.), mantenimiento preventivo, reparación de fallas, manejo ambiental y eficiencia energética. Finalmente, se realizará una aproximación a los conceptos de programación; algoritmos y diagramas de flujo e introducción a los autómatas programables, que deberán ser contempladas cuando se realicen las actividades descritas.
        p En el siguiente video se conocerán de manera general los saberes que se desarrollarán en este componente formativo.
        p.cp: b Le deseamos una grata experiencia de aprendizaje.
      .col-lg-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/if1.png', alt='')

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

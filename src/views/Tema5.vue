<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Eficiencia energética 

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t5/f1.png', alt='')
      .col-lg-7
        p La eficiencia energética se puede entender como la cantidad de consumo que tiene un dispositivo electrónico para realizar una acción; también, se puede ver como el adecuado uso de la energía eléctrica para realizar un proceso determinado. Este factor es importante dentro de una organización ya que implica reducción de costos, por ende, es necesario enfocar cada uno de los procedimientos de mantenimiento a verificar el estado de los equipos para lograr preservar la eficiencia energética. Por ejemplo, en la sección de mantenimiento preventivo se observó como el polvo o suciedad dentro de un equipo electrónico provoca problemas de sobrecalentamientos en los equipos, en términos de eficiencia esto provoca que la energía destinada para producir un servicio se disipe de manera térmica (calor).
        .cajon.color-primario.p-4.mb-4
          p.mb-0 En términos ambientales la eficiencia energética busca reducir en lo posible la intensidad eléctrica generada para suplir la demanda de los usuarios que buscan satisfacer sus necesidades, esto repercute directamente en la reducción de las emisiones de CO2 responsables del efecto invernadero.

    p Para ampliar mejor el horizonte de la eficiencia energética se presenta el siguiente contenido.

    TabsA.color-acento-botones.mb-5(data-aos="flip-up")
      .row.align-items-center.justify-content-center.tarjeta.tarjeta--azul.p-4(titulo="Etiquetado", style="border: #138AF8 solid 5px; ")
        .col-lg-2.mb-3.mb-md-0.mb-lg-0.col-md-3
          figure
            img(src='@/assets/curso/temas/t5/f2.svg', alt='')
        .col-lg-10.col-sm-12
          p El etiquetado de un equipo electrónico de acuerdo con su eficiencia energética no es más que la clasificación o agrupamiento según el aprovechamiento de la energía. Este tipo de información proporciona a los usuarios una noción del consumo que puede representar el uso o funcionamiento de un equipo electrónico y obliga, motiva o incentiva a los fabricantes a desarrollar aparatos cada vez más eficientes. Todo lo anterior buscando siempre disminuir las emisiones de CO2 y demás sustancias peligrosas usadas en la construcción de los equipos electrónicos. Adicionalmente, los equipos electrónicos con una buena eficiencia energética disminuyen la demanda de energía eléctrica y por lo tanto su generación, contribuyendo de esta manera de forma positiva al medio ambiente.
      .row.align-items-center.justify-content-center.tarjeta.tarjeta--azul.p-4(titulo="Clasificación", style="border: #138AF8 solid 5px; ")
        .col-lg-2.mb-3.mb-md-0.mb-lg-0.col-md-3
          figure
            img(src='@/assets/curso/temas/t5/f3.svg', alt='')
        .col-lg-10.col-sm-12
          p Dependiendo del nivel de porcentaje de consumo con respecto a la media de los demás equipos electrónicos la clasificación de los dispositivos va desde la letra A hasta G, siendo el primer grupo los equipos con la mayor eficiencia energética y el segundo con la peor. En algunos países además de las etiquetas también puede encontrarse información asociada al nivel de ruido que emite el equipo o aparato electrónico y el consumo de agua o el gasto energético; información valiosa que ayuda a un cliente a generar conciencia a la hora de adquirir un equipo electrónico, todas las decisiones se deben realizar siempre en busca de ayudar a reducir el impacto ambiental a la hora de adquirir dispositivos.
      .row.align-items-center.justify-content-center.tarjeta.tarjeta--azul.p-4(titulo="Consideraciones", style="border: #138AF8 solid 5px; ")
        .col-lg-2.mb-3.mb-md-0.mb-lg-0.col-md-3
          figure
            img(src='@/assets/curso/temas/t5/f4.svg', alt='')
        .col-lg-10.col-sm-12
          p Ya que cada país tiene sus propias normativas que se deben cumplir en la comercialización de equipos electrónicos o importación de los mismos es necesario conocer este tipo de reglas o legislaciones dada la facilidad en la que hoy en día se pueden adquirir o diseñar equipos; a continuación se presenta un material complementario relacionado con esta información, en donde además se encuentran los links de los planes, leyes y resoluciones que giran en torno a la eficiencia energética en este país. (Área metropolitana Valle de Aburra, 2019).

</template>

<script>
export default {
  name: 'Tema2',
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

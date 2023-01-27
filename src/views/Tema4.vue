<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Manejo ambiental

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-left")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/f1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En aras de proteger y contribuir con el medio ambiente, es necesario conocer las normativas, legislaciones y demás acciones que den como resultado unas rutas a seguir o cumplir con todos los desperdicios electrónicos producidos en cada una de las intervenciones realizadas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p Este tipo de leyes u obligaciones, surgieron con el tiempo debido a que, en la actualidad, como consecuencia de los avances tecnológicos, la gran mayoría de los componentes o equipos electrónicos quedan obsoletos en muy pocos años, generando de esta manera miles de millones de residuos a lo largo de todo el mundo; como motivación a tratar de reducir este tipo de huella contaminante en el medio ambiente, se presenta una serie de conceptos necesarios a la hora de buscar la mejor manera para la disposición final de los desechos producidos por los procedimientos de mantenimiento y reparación de equipos electrónicos, veamos:
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t4/f2.svg', alt='')

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t4/f3.png', alt='')
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fcs80")
          div(titulo="Mantenimiento ambiental")
            p Los avances tecnológicos son los principales responsables de la producción de desechos electrónicos, no obstante, pese a esto gran parte de la tecnología que aún se considera funcional también termina llegando a los basureros gracias a los usos inadecuados o simplemente por el deseo de adquirir una versión mejorada. Sea cual sea el motivo por el cual se desechan los elementos o aparatos electrónicos resulta de gran importancia conocer qué tipo de sustancias contienen para realizar una adecuada manipulación o disposición. Dado lo anterior es importante aprender a conocer e interpretar la información que cada uno de los fabricantes suministran para la clasificación de sus productos de acuerdo con criterios como la toxicidad, reciclado etc.
          div(titulo="Hojas de datos de seguridad de materiales")
            p Este tipo de documento contiene o específica todos los materiales y sustancias que componen al elemento o equipo electrónico; su clasificación, las recomendaciones de uso, almacenaje, procedimientos, acciones a realizar frente a diversas situaciones, etc. Es decir, contiene una información mucho más detallada de la que se puede evidenciar en las etiquetas dispuestas en los dispositivos, de ahí la importancia de conocer cómo interpretar la información disponible en cada documento. (Martín, P., Oliva, J y Manjavacas, Z, 2014)
          div(titulo="Manipulación de residuos y componentes")
            p La manipulación de las sustancias asociadas a los componentes electrónicos en muchas ocasiones resulta altamente riesgosa tanto para el personal que lo va a manipular como al entorno en el cual se encuentra o se almacena. Las recomendaciones que se deben seguir son las establecidas por el fabricante para el tratamiento o disposición, por ende siempre se recomienda evitar entrar en contacto con cualquier sustancia a manipular y usar todos los elementos de seguridad (guantes, tapabocas, overol, gafas de protección, etc.) para evitar accidentes. Si por algún motivo se desconoce la composición de una sustancia o elemento se debe tratar como altamente peligrosa para evitar cualquier tipo de afectación tanto al entorno como al agente responsable de su manipulación. (Secretaría de Habitat Servicio de Higiene y Seguridad, s.f).
            p Cada país tiene sus propias normativas que buscan evitar daños o afectaciones a la salud o al medio ambiente. Con lo anterior se invita a consultar el siguiente sitio web del ministerio de ambiente y desarrollo sostenible para conocer en detalle las leyes, normas y decretos que giran en torno a la manipulación de residuos peligrosos. (Ministerio de ambiente y desarrollo sostenible, 2022)
          div(titulo="Disposición de residuos")
            p La disposición final de los residuos electrónicos es la búsqueda adecuada para la ubicación o almacenaje, para ello hasta el momento se ha suministrado la información para la clasificación, separación, manipulación y por último queda su disposición final. Esta fase busca confinar, aislar o separar los residuos peligrosos para evitar daños ambientales o de salud en los agentes que intervienen en el manejo ambiental de los desechos electrónicos. Para el almacenaje de cada uno de los residuos de los procesos de mantenimiento se deben seguir las recomendaciones suministradas por el fabricante, las cuales se pueden encontrar en la hoja de datos de seguridad de materiales para la respectiva disposición de acuerdo con las normativas vigentes. Para conocer más sobre las normas asociadas a la disposición de los residuos se puede revisar información en conjunto en los anexos disponibles (Ministerio de ambiente y desarrollo sostenible, s.f)

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

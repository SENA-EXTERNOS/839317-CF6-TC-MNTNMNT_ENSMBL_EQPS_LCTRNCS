<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mantenimiento preventivo

    .col-md-10.mx-auto.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-right")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t2/f1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Recuerde que el mantenimiento preventivo hace referencia a todas las acciones que se realizan con el fin de evitar que piezas o equipos sufran averías asociadas al desgaste; así mismo, este tipo de intervención busca reducir las posibles fallas de un aparato electrónico dentro de una organización, esto se refleja en la reducción de costos operativos y disminución de los tiempos de inoperatividad de un equipo.

    .row.justify-content-center.mb-5
      .col-lg-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t2/f2.svg', alt='')
      .col-lg-9
        p “El mantenimiento preventivo consiste en actuar sobre estos riesgos, evitándolos o disminuyéndolos (por ejemplo, limpiando el equipo, aparatándolo de fuentes generadoras de campos magnéticos, evitando la producción de calor en su interior, etc.)” (Bolinches, 2012). Para el caso de los <em>software</em>, el mantenimiento preventivo hace referencia a las actualizaciones del mismo, las copias y pruebas de seguridad, desfragmentación de discos, limpieza de archivos temporales y demás acciones que mantienen un sistema en óptimas condiciones, previendo, como ya se observó anteriormente, daños directos en los componentes por diversos factores:

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Frecuencia")
        .row.justify-content-around.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/f3.png', alt='')
          .col-md-6
            p En relación con lo visto en el componente de diagnóstico de equipos electrónicos, la frecuencia con la que se debe realizar un mantenimiento preventivo depende de las horas de uso que tenga el aparato dentro de una determinada zona, el tipo de trabajo, la disponibilidad de los profesionales encargados del proceso y el presupuesto designado al área de mantenimiento. Parámetros importantes que se deben tener en cuenta a hora de agendar los diferentes procedimientos.
      .py-4.py-md-5(titulo="Limpieza")
        .row.justify-content-around.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/f4.png', alt='')
          .col-md-6
            p La limpieza dentro de un equipo electrónico es fundamental para un correcto funcionamiento, ya que elementos como el polvo y demás residuos suelen tapar las zonas de ventilación provocando recalentamientos en los equipos, aumento en el consumo energético y el desgaste de componentes o piezas. Así mismo, el polvo acumulado puede llevar a errores en el uso de periféricos de un equipo debido a problemas de lectura y a cortocircuitos. Por todo lo anterior se recomienda que un aparato electrónico sea limpiado por lo menos dos veces al año en condiciones normales y más de dos veces en condiciones en donde el entorno de trabajo sea muy agresivo (acumulación de polvo excesivos). 
      .py-4.py-md-5(titulo="Lubricación")
        .row.justify-content-around.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/f4.png', alt='')
          .col-md-6
            p La lubricación dentro del mantenimiento preventivo resulta crucial en aquellos procesos en donde dos piezas siempre están en contacto, esto gracias a que el lubricante crea una película protectora sobre cada elemento. Esta intervención busca disminuir la fricción de las piezas y por ende el desgaste. Adicionalmente, la lubricación ayuda a reducir las pérdidas energéticas, disipar calor y aumentar la vida útil de los equipos. Dada la importancia de este proceso en la maquinaria de una empresa se debe prestar mucha atención a los cronogramas y recomendaciones del fabricante para evitar daños o fallas cruciales (LEVSA, s.f). Otro beneficio que posee la lubricación es la remoción de artefactos o contaminantes que puedan estar presentes a la hora de realizar un proceso de manera adicional y dependiendo del tipo de lubricación, sustancia a aplicar o mecanismo a lubricar se deben revisar los filtros de aceite para cambiarlos o limpiarlos, dado que es en estos en donde se depositan todas las impurezas o residuos “encontrados” por el aceite.
      .py-4.py-md-5(titulo="Recomendaciones")
        .row.justify-content-around.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/f5.png', alt='')
          .col-md-6
            p Dentro de los procesos del mantenimiento preventivo se suelen encontrar situaciones que pueden llegar a ser peligrosas sino se tiene cuidado; por ejemplo, manipular elementos de un equipo electrónico o realizar el desarmado del mismo con la fuente de alimentación conectada resulta en un riesgo muy alto sino se procede con cuidado. Otro ejemplo es la manipulación de fuentes de energía o de acumuladores que aún siguen conectados o en las cuales no se ha esperado lo suficiente para su respectiva descarga, causando electrocución, descargas eléctricas o averías en los elementos internos de un aparato electrónico. Para aquellos procesos en donde la lubricación sea en piezas mecánicas se debe no solo desconectar el equipo sino también esperar a que este disminuya su temperatura para poder manipularlo. Para más información sobre el tema se recomienda (Bolinches, 2012).
      .py-4.py-md-5(titulo="Funcionamiento del equipo")
        .row.justify-content-around.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/f6.png', alt='')
          .col-md-6
            p Una vez realizados todos los procesos de mantenimiento preventivo en un equipo es necesario verificar el funcionamiento de este, por esto se debe probar el desempeño del aparato electrónico asegurando las mejores condiciones en los bloques funcionales, componentes y demás elementos.

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

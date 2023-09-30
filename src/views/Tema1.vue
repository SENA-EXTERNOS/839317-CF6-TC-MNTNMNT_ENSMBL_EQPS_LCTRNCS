<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 
        em Software 
        | de equipos

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/f1.jpg')})`}", data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un dispositivo electrónico está compuesto por muchos elementos eléctricos y electrónicos que, en conjunto, permiten el funcionamiento adecuado de un dispositivo. No obstante, para que un aparato electrónico pueda realizar el proceso para el cual fue diseñado, en ocasiones se hace necesario una serie de instrucciones que deben ser seguidas por este conjunto para su correcto funcionamiento. Esta serie de instrucciones se conocen como <em>software</em>, el cual es el responsable de coordinar todas las acciones dentro de un equipo de manera precisa. 

    h3.my-5 Instalación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.zi2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t1/f2.svg', alt='')
      .col-lg-6.tarjeta.fcp20.tr_last.zi1
        p La instalación de un 
          em software 
          |  es el proceso por medio del cual las instrucciones o las acciones que debe realizar un equipo son cargadas al 
          em hardware
          | , por esta razón cada uno de los pasos necesarios para una adecuada instalación se deben seguir o ejecutar de acuerdo con el manual suministrado por el fabricante. 
        p Independientemente del fabricante, las etapas o secuencias que se deben realizar en este proceso, se presentan a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fcs80")
      .row.align-items-center.justify-content-center(titulo="Preinstalación")
        .col-md-7.mb-4.mb-md-0
          p Antes de comenzar con cualquier procedimiento de instalación se deben verificar algunos aspectos generales y propios de los equipos, dentro de los que se encuentran; seleccionar el <em>software</em> que mejor se ajuste a las necesidades de la organización y al equipo y verificar si el espacio disponible en el equipo es el suficiente para la instalación del mismo. Para el caso de realizar una actualización o sustitución de un <em>software</em> en un equipo ya en funcionamiento es necesario llevar a cabo copias de seguridad de la información antes de dar comienzo con la intervención; sin las anteriores condiciones mínimas garantizadas, el profesional debe abstenerse de dar inicio con la instalación del sistema elegido dado que un <em>software</em> inadecuado o una incorrecta instalación puede causar daños directos en los componentes o pérdida de la información en los dispositivos. Por último, cada uno de los fabricantes tienen condiciones adicionales que se deben asegurar antes de iniciar cualquier tipo de intervención, es por esto por lo cual también se debe tener a la mano toda la documentación relacionada con el proceso de instalación suministrada por el o los proveedores. 
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t1/f3.png', alt='Texto que describa la imagen')
      .row.align-items-center.justify-content-center(titulo="Instalación")
        .col-md-7.mb-4.mb-md-0
          p En la instalaci&oacute;n del 
            em software
            |  elegido para el equipo al cual se va a realizar el procedimiento se deben seguir las instrucciones que el mismo sistema proporcione. En la actualidad muchos de los 
            em softwares
            |  poseen una interfaz gr&aacute;fica de usuario que ayuda o asiste al profesional durante todo el proceso, con opciones como la selecci&oacute;n del idioma, la configuraci&oacute;n de horario y el tipo de instalaci&oacute;n, entre las m&aacute;s comunes; esta &uacute;ltima es fundamental ya que un proceso autom&aacute;tico significa que el mismo sistema realizar&aacute; y tomar&aacute; todas las decisiones del proceso de acuerdo con la detecci&oacute;n del 
            em hardware
            |  disponible o usado para &ldquo;depositar&rdquo; el sistema. Un caso contrario es la instalaci&oacute;n manual, la cual implica que todas las decisiones sean tomadas por el profesional encargado del proceso, es decir, el experto deber&aacute; intervenir en cada una de las acciones. Este tipo de instalaci&oacute;n suele ser com&uacute;n en equipos cuyo 
            em hardware
            |  ya tiene un par de a&ntilde;os y para los cuales el 
            em software
            |  no posee una opci&oacute;n autom&aacute;tica, resultando as&iacute; en una decisi&oacute;n fundamental el conocer todos los aspectos previos necesarios para llevar a cabo una correcta intervenci&oacute;n.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t1/f4.png', alt='Texto que describa la imagen')
      .row.align-items-center.justify-content-center(titulo="Post instalación")
        .col-md-7.mb-4.mb-md-0
          p Una vez el proceso de instalaci&oacute;n culmine con &eacute;xito es pertinente realizar una serie de pruebas para verificar el estado de la instalaci&oacute;n, el funcionamiento del equipo y la respuesta de este frente a situaciones controladas, esto con el fin de efectuar acciones de correcci&oacute;n a los posibles fallos o el inicio de una nueva instalaci&oacute;n en caso de ser necesario. Para cumplir con lo anterior se debe verificar si cada uno de los aspectos del 
            em hardware
            |  son reconocidos por el sistema o si la versi&oacute;n detectada por el 
            em software
            |  es la correcta; en el caso de que persistan los problemas es necesario volver a empezar con el proceso de instalaci&oacute;n y/o verificar si el 
            em hardware
            |  posee alg&uacute;n tipo de aver&iacute;a, la cual debe corregirse antes de iniciar cualquier otro procedimiento.

        .col-md-3
          figure
            img(src='@/assets/curso/temas/t1/f5.png', alt='Texto que describa la imagen')

    h3.my-5 Funcionamiento 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.zi2(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t1/f6.png', alt='')
      .col-lg-6.tarjeta.fcp20.tr_last.zi1
        p El funcionamiento del 
          em software
          |  y del equipo contenedor del mismo se debe verificar una vez se han realizado todas las correcciones y/o verificaci&oacute;n del estado de instalaci&oacute;n. A diferencia de la post instalaci&oacute;n en donde el objetivo principal es la b&uacute;squeda de aquellos modos u opciones que no se encuentren habilitados, as&iacute; como tambi&eacute;n aquellos controladores que no se hubiesen instalado de manera correcta.
        p A continuación, se presentan algunos de los elementos que deben ser considerados en la verificación y funcionamiento del 
          em software:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.fcac15.p-4(style="height:460px")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f7.svg' alt='icono relacionado')
        h4.text-center Objetivo
        p.text-center En el funcionamiento del 
          em software 
          | el objetivo es probar de manera práctica cada uno de los ajustes u opciones presentes en el equipo para corroborar si su respuesta es o no la esperada.
      .tarjeta.fcac15.p-4(style="height:460px")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f8.svg' alt='icono relacionado')
        h4.text-center Ejemplo
        p.text-center Si se tomó la decisión de instalar una versión cuyo funcionamiento no se ha verificado con anterioridad en el equipo o no hay suficiente documentación, el objetivo de este apartado siempre será verificar si el dispositivo opera de manera normal.
      .tarjeta.fcac15.p-4(style="height:460px")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f9.svg' alt='icono relacionado')
        h4.text-center Versión
        p.text-center Una versión no recomendada por el fabricante puede producir sobrecalentamientos, mal funcionamiento o averías graves en el 
          em hardware 
          | del aparato electrónico.
      .tarjeta.fcac15.p-4(style="height:460px")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t1/f10.svg' alt='icono relacionado')
        h4.text-center Importante
        p.text-center Se debe recalcar que todas las pruebas deben hacerse en un ambiente controlado, tomando todas las medidas de seguridad necesarias para evitar accidentes.

    h3.mb-5 Configuración

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t1/f11.png', alt='')
      .col-lg-7
        p Con los procesos anteriores ejecutados y teniendo la certeza de que el sistema o 
          em software 
          |  se encuentra instalado de manera correcta en el equipo electrónico y por ende el funcionamiento es el idóneo, seguiría el paso de realizar las configuraciones necesarias para el funcionamiento específico dentro del área productiva de la organización; es decir, de acuerdo con la tarea que el aparato va a desempeñar dentro de la empresa se deben ajustar los parámetros del dispositivo por medio del 
          em software
          | , para maximizar su productividad. 
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Por ejemplo, en el caso de tener equipos dedicados al ensamble de piezas o carrocerías se debe configurar la fuerza con la que se va a ajustar cada uno de los tornillos, tuercas, etc. Esos ajustes por ende se deben realizar acorde con la tarea a desarrollar; por lo tanto, cada modificación debe estar previamente consultada y verificada por el experto en el área en la cual va a funcionar el dispositivo.

    h3.mb-5 Fallas comunes 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.tarjeta.fcp20.tr_first.zi1
        p Las fallas en el funcionamiento de un 
          em software 
          | son de los eventos más habituales que se pueden presentar dentro de un área de productividad, si bien en la mayoría de las ocasiones esto no representa daños en los componentes internos de un aparato electrónico si representa tiempos de inoperatividad. Este tipo de fallas produce en las áreas productivas paros constantes en la producción, retardando de esta manera todos los procesos y obligando a los técnicos de mantenimiento a ejecutar las acciones correctivas o preventivas para solucionar estos percances.
      .col-lg-4.zi2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t1/f12.svg', alt='')

    p.mb-5 Observemos a continuación, algunos de los fallos más comunes que se pueden presentar:

    .col-md-10.mx-auto(data-aos="zoom-in")
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t1/f13.svg', alt='Texto que describa la imagen')

        .tarjeta.fcblanco(x="16%" y="71%" numero=" ")
          p.p-3.fcp35.tarjeta Fallo en los controladores responsables de identificar todas las piezas y/o elementos del equipo. 
        .tarjeta.fcblanco(x="39%" y="100%" numero=" ")
          p.p-3.fcp35.tarjeta Ejecución de acciones con retardo. 
        .tarjeta.fcblanco(x="61%" y="71%" numero=" ")
          p.p-3.fcp35.tarjeta Sobrecalentamientos provocados por esfuerzos computacionales, cierres inesperados de aplicaciones.
        .tarjeta.fcblanco(x="84%" y="100%" numero=" ")
          p.p-3.fcp35.tarjeta Reinicios constantes o reinicio a valores predeterminados de los parámetros de funcionamiento, etc. 


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

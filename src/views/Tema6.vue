<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Conceptos de programación 

    .row.justify-content-center.mb-5
      .col-lg-7
        p En algunas ocasiones dentro del área de mantenimiento se suelen tener situaciones en las que se requiera 
          em software 
          |  o programa para una determinada acción, es por este motivo que se deben conocer los principios básicos que caracterizan a un algoritmo. En términos generales toda acción o secuencia que posee una serie de pasos ordenados para el cumplimiento de una determinada tarea se denomina programación. Con lo anterior es fácil notar que la programación es algo que está en casi todas las actividades realizadas por una persona. No obstante, el tema de esta sección hace referencia a “un conjunto finito de reglas bien definidas en su lógica de control que permiten la solución de un problema en una cantidad finita de tiempo” (Herrera et al., 2015). Otro factor dada la importancia de los programas en el funcionamiento de los equipos electrónicos es el hecho de que un mantenimiento correctivo en términos de 
          em software 
          |  se traduce en tener que corregir problemas que no se contemplaron en el momento de diseñar un sistema, dado lo anterior es labor del profesional del área buscar la mejor solución para este tipo de acciones.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/t6/f1.png', alt='')

    h3.mb-5 Algoritmos y diagramas de flujo 

    p Dado que el objetivo de este documento es dar una noción general e introductoria acerca de la programación, por ende el primer apartado se divide en dos secciones, los algoritmos y los diagramas de flujo; el primero de ellos busca mediante acciones, reglas o instrucciones lógicas definidas dar con la solución parcial o completa de un problema, siendo este el primer apartado clave a la hora de realizar un programa, esto gracias a que es la estructura de cualquier solución lógica mediante un programa.

    h3.titulo-tercero(data-aos='fade-right') Estructura

    p A continuación, se presentan las características de las estructuras de los algoritmos:

    .tarjeta.sliderbg.fcp20.mb-5
      SlyderA(tipo='b', data-aos="zoom-in")
        .row.justify-content-between.align-items-center
          .col-md-1
          .col-md-5.mb-4.mb-md-0
            h5 Estructura
            p Un algoritmo posee una serie de estructuras comunes dentro de su composición, las cuales buscan definir cada uno de los procesos que se van a ejecutar dando de esta manera un sentido lógico al programa. Ya que la idea de un algoritmo es la solución a un problema se pueden ver situaciones en las cuales no solo se tengan las estructuras que se verán a continuación sino también combinaciones de diversos tipos entre ellas. (Xunta.gal, s. f).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t6/f2.png', alt='Texto que describa la imagen')
        .row.justify-content-between.align-items-center
          .col-md-1
          .col-md-5.mb-4.mb-md-0
            h5 Estructuras secuenciales
            p Son en esencia toda la composición de un algoritmo; se caracterizan por dar un orden lógico a cada una de las instrucciones de tal manera que se cumpla con el objetivo a resolver. Este tipo de instrucciones se ejecutan de manera secuencial y depende de los resultados o del estado de las líneas anteriores para ejecutar la siguiente acción, excepto la primera.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t6/f3.png', alt='Texto que describa la imagen')
        .row.justify-content-between.align-items-center
          .col-md-1
          .col-md-5.mb-4.mb-md-0
            h5 Estructuras de repetición
            p Pese a que todos los algoritmos poseen una secuencia en su ejecución también es común encontrar algunas instrucciones cuyo objetivo sea la de realizar una o varias acciones de manera repetitiva durante algunos periodos de tiempo, instantes, condiciones o iteraciones. Este tipo de instrucciones se conocen como líneas de estructura repetitiva.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t6/f4.png', alt='Texto que describa la imagen')
        .row.justify-content-between.align-items-center
          .col-md-1
          .col-md-5.mb-4.mb-md-0
            h5 Estructuras Condicionales
            p Al igual que el tipo de estructura anterior este tipo de instrucciones hacen parte del cuerpo de un algoritmo con la diferencia de que estas solo se ejecutan si y solo sí la condición establecida al inicio de la línea se cumple. Otra forma de ver a este tipo de instrucciones es la de seleccionar o decidir qué camino o dirección debe tomar o seguir un algoritmo dado unas condiciones establecidas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t6/f5.png', alt='Texto que describa la imagen')

    h3.titulo-tercero(data-aos='fade-right') Diagrama de flujo 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Un diagrama de flujo dentro de un programa es una representación gráfica del mismo; busca con este tipo de visualización documentar, planificar y comunicar el proceso que realizará a un algoritmo, facilitando en muchas ocasiones la interpretación de complejos algoritmos. Para el caso en donde la solución lógica a un programa resulte en un algoritmo muy extenso es común separar cada una de las etapas principales para apreciar mejor el funcionamiento sin perder la simplicidad que provee un diagrama de flujo.
        .cajon.color-acento-botones.p-4.mb-4
          h5 Estructura o partes
          p.mb-0 La estructura o partes de este tipo de representación se realiza mediante el uso de figuras geométricas, cada una de ellas con un significado diferente, tal como se muestra en la siguiente imagen.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/t6/f6.png', alt='')


    h3.mb-5 Introducción a los antómatas programables

    .col-md-10.mx-auto.mb-5.invertido
      .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.bgf7
        .row.m-0.align-items-center.justify-content-between
          .col-lg-7.mb-4.mb-lg-0
            .bloque-texto-a__texto.p-4
              p.mb-0 Dentro de un proceso industrial, existen dispositivos electrónicos responsables de automatizar procesos, controlar entradas, salidas, y tomar decisiones en el desarrollo de las actividades industriales. Conocer el tipo de herramienta utilizada para diseñar las instrucciones secuenciales o algoritmos de un autómata programable, resulta ser esencial para comprender e interpretar las soluciones diseñadas por antiguos profesionales o para diseñar proyectos nuevos. (Domingo, J., Grau, A., Martínez, H & Gázmin, J, 2003)
              br
              p.mb-0 Con lo anterior, se presentan dos grandes lenguajes responsables del diseño de algoritmos en los autómatas programables; ambos buscan, por medio de representaciones gráficas, llegar a una solución de un problema industrial; estos lenguajes son:<b> Grafcet y Landero.</b>

    h3.titulo-tercero(data-aos='fade-right') Grafcet

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/t6/f8.png', alt='')
      .col-lg-9
        p El Grafcet, es un diagrama funcional que busca describir el desarrollo de una solución a un problema industrial, mediante una serie de etapas y transiciones funcionales. Al igual que un diagrama de flujo, este diagrama se constituye de una serie de elementos gráficos que representan un cierto tipo de acción donde cada uno de estos refleja la evolución que va adquiriendo el sistema. Para (Domingo et al, 2003) “El Grafcet es una herramienta para la representación de automatismos que deban llevar a cabo una determinada secuencia. Es un método gráfico que permite establecer el orden de las acciones que este debe realizar y en qué condiciones debe realizarlas”. 
        p A continuación, se presentan los elementos más comunes dentro del lenguaje de programación Grafcet:

    .col-md-8.mx-auto.mb-5

      ImagenInfograficaB.color-primario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t6/f9.svg', alt='Texto que describa la imagen')

        div(x="25%" y="30%" tooltip="Ver más" numero="1")
          .col-10.col-md-4.mx-auto.mb-4
            img(src='@/assets/curso/temas/t6/f10.svg', alt='')
          h5.mb-2 Etapas
          p Las etapas dentro del lenguaje Grafcet, son situaciones o conjuntos de acciones que se deben realizar en el instante o posición correspondiente. Se suelen tener dos tipos: el primero de ellos, llamado etapas iniciales, en las cuales se marca el inicio de las acciones operativas y su ejecución, generalmente dependen de una condición inicial (por ejemplo, botón “start”). El segundo tipo, se refiere a las llamadas etapas activas; esta clase se caracteriza por ejecutar una acción siempre y cuando las condiciones de la etapa se cumplan. 
        div(x="50%" y="30%" tooltip="Ver más" numero="2")
          .col-10.col-md-4.mx-auto.mb-4
            img(src='@/assets/curso/temas/t6/f11.svg', alt='')
          h5.mb-2 Transiciones
          p Como se observó en el caso anterior, cada una de las etapas necesita de una determinada condición para poder ejecutar una o varias acciones; estas condiciones se denominan transiciones y son las responsables de permitir la evolución del algoritmo. Las transiciones, generalmente dependen de las acciones ejecutadas en las etapas anteriores y dependiendo del resultado y su validación, permiten el paso al siguiente proceso del algoritmo. 
        div(x="75%" y="30%" tooltip="Ver más" numero="3")
          .col-10.col-md-4.mx-auto.mb-4
            img(src='@/assets/curso/temas/t6/f12.svg', alt='')
          h5.mb-2 Receptividad
          p La receptividad dentro del lenguaje Grafcet, hace referencia a todas aquellas expresiones que se ejecutan en cada una de las etapas, después de validar las condiciones de transición; este tipo de proposiciones o expresiones, dependen de factores externos como las entradas del autómata o de información interna como los temporizadores implementados en etapas anteriores. 

    h3.titulo-tercero(data-aos='fade-right') Ladder

    p Al igual que en el caso anterior, la programación en lenguaje de Ladder, utiliza símbolos gráficos para representar cada uno de los procesos que debe realizar el algoritmo. La estructura del programa dentro de este tipo de lenguaje sigue el patrón de una escalera, de ahí su nombre en inglés, en donde cada uno de los pasos (escalón) o etapas, se desarrollan de izquierda a derecha y de arriba hacia abajo. Otra diferencia notoria con respecto al lenguaje de la pasada sección, es el uso de gráficos tipo contactores que, en combinaciones lógicas, pueden representar todo un proceso; adicionalmente poseen elementos en formatos de “caja” que representan acciones más complejas. (Neheyler Mechatronics, 2022)
    p Entre los elementos más característicos del Ladder, se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t6/f13.svg', alt='')
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fcs80")
          div(titulo="Elementos tipo contactor")
            p Dentro de los algoritmos en este tipo de lenguaje es común encontrar los contactores o bobinas que dependiendo de su configuración realizan una acción determinada. Dentro de los tipos más comunes se tienen contactores normalmente abiertos, esta configuración genera un uno lógico a su salida si y solo sí su entrada es un uno lógico. En contactores normalmente cerrados su funcionamiento es inverso al anterior, dando un uno lógico a su salida si y solo se recibe un cero a su entrada. Finalmente, los contactores tipo Reset y Set mantienen una salida fija en presencia de un uno lógico, siendo 0 y uno respectivamente.
          div(titulo="Elementos tipo caja")
            p Este tipo de elementos son estructuras complejas que ayudan a realizar diversas tareas dentro de un algoritmo, los más comunes en esta categoría son; temporizadores, contadores, bloques de datos.
          
    .col-md-10.mx-auto
      .cajon.color-acento-botones.p-4.mb-4
        p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

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

export default {
  global: {
    componenteFormativo: 'Mantenimiento de equipos electrónicos',
    descripcionCurso:
      'La intervención de equipos eléctricos y electrónicos en una organización, es clave a la hora de mantener las óptimas condiciones de los dispositivos. Dentro de las estrategias, se tiene la instalación de <em>software</em>, el mantenimiento correctivo y el preventivo, la reparación de fallas y el diseño e interpretación de algoritmos. Este último, muy necesario a la hora de resolver problemas mediados por la utilización de autómatas programables.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Software</em> de equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mantenimiento preventivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Reparación de fallas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Manejo ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Eficiencia energética',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Conceptos de programación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Mantenimiento preventivo',
      referencia:
        'Bolinches, M. S. (2012). <em>Montaje y mantenimiento de equipos. Macmillan</em> Profesional.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43256',
    },
    {
      tema: '<em>Software</em> de equipos',
      referencia:
        'IBM. (2021).<em> Procesos de instalación de software</em>. IBM. ',
      tipo: 'Documentación ',
      link:
        'https://www.ibm.com/docs/es/i/7.3?topic=installation-software-process',
    },
    {
      tema: 'Mantenimiento preventivo',
      referencia:
        'LEVSA. (s.f).<em> La importancia de la lubricación en los equipos industriales.</em> LEVSA.',
      tipo: 'Página web',
      link:
        'https://levsalubricantes.com.mx/la-importancia-de-la-lubricacion-en-los-equipos-industriales/',
    },
    {
      tema: 'Manejo ambiental',
      referencia:
        'Ministerio de ambiente y desarrollo sostenible. (s.f.).<em> Residuos de Aparato Eléctricos y Electrónicos - RAEE.</em> Ministerio de ambiente y desarrollo sostenible.',
      tipo: 'Página gubernamental',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/residuos-de-aparato-electricos-y-electronicos-raee/',
    },
    {
      tema: 'Concepto de programación',
      referencia:
        'TodaMateria. (2022).<em> ¿Qué es software? </em>TodaMateria.',
      tipo: 'Página web',
      link:
        'https://www.todamateria.com/que-es-software/#:%7E:text=El%20software%20es%20el%20conjunto,programas%20y%20los%20sistemas%20operativos. ',
    },
    {
      tema: 'Concepto de programación',
      referencia: 'Xunta.gal. (s.f.).<em> Programación 1819.</em> Xunta.gal.',
      tipo: 'Blog',
      link:
        'https://www.edu.xunta.gal/centros/iesblancoamorculleredo/aulavirtual/mod/book/view.php?id=19963&chapterid=4292',
    },
  ],
  glosario: [
    {
      termino: 'Coeficiente',
      significado:
        'Número, valor o parámetro que acompaña a una variable; también se conoce como factor y representa los valores constantes de una expresión matemática.',
    },
    {
      termino: 'Contactor',
      significado:
        'el contactor o <em>switch</em> es un elemento electrónico que, de acuerdo con una acción mecánica, permite o no, el paso de corriente.',
    },
    {
      termino: 'Contadores',
      significado:
        'los contadores dentro del entorno de programación, son elementos que permiten llevar el registro de las veces en que una variable cambia su estado o cuando una acción se ha ejecutado.',
    },
    {
      termino: 'Cortocircuito',
      significado:
        'suceso mediante el cual dos conectores o conductores de diferentes polaridades, entran en contacto.',
    },
    {
      termino: 'Desgaste',
      significado:
        'acto o consecuencia resultante por el deterioro o paso del tiempo.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'proceso mediante el cual se identifica o localiza una avería o falla.',
    },
    {
      termino: 'Disipación',
      significado:
        'proceso por medio del cual se esparce o se desvanecen aglomeraciones o concentraciones.',
    },
    {
      termino: 'Temporizadores',
      significado:
        'elementos que permiten controlar el tiempo en el cual se ejecuta una acción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Área metropolitana Valle de Aburrá. (2019). <em>Eficiencia Energética.</em> Futuro sostenible.',
      link:
        'https://www.metropol.gov.co/ambiental/Paginas/consumo-sostenible/eficiencia-energetica.aspx',
    },
    {
      referencia:
        'Bolinches, M. S. (2012). <em>Montaje y mantenimiento de equipos.</em> Macmillan Profesional.',
    },
    {
      referencia:
        'Cárdenas, F. (s.f.). <em>Diagrama de flujo de proceso: qué es, cómo se hace y ejemplos.</em> HubSpot.',
      link: 'https://blog.hubspot.es/sales/que-es-diagrama-flujo-procesos',
    },
    {
      referencia:
        'Domingo, J., Grau, A., Martínez, H. & Gázmin, J. (2003). <em>Diseño y aplicaciones con autómatas programables.</em> Universitat Oberta de Catalunya.',
    },
    {
      referencia:
        'Herrera, A., Capacho, J. & Ebratt, R. (2015).<em> Diseño y construcción de algoritmos. </em>Alianza Editorial.',
    },
    {
      referencia:
        'IBM. (2021).<em> Proceso de instalación de software.</em> IBM.',
      link:
        'https://prod.ibmdocs-production-dal-6099123ce774e592a519d7c33db8265e-0000.us-south.containers.appdomain.cloud/docs/es/i/7.3?topic=installation-software-process',
    },
    {
      referencia:
        'LEVSA. (s.f). <em>La importancia de la lubricación en los equipos industriales.</em> LEVSA.',
      link:
        'https://levsalubricantes.com.mx/la-importancia-de-la-lubricacion-en-los-equipos-industriales/',
    },
    {
      referencia:
        'Martín, P., Oliva, J. & Manjavacas,, Z. (2014).<em> Montaje y mantenimiento de equipos 2.a edición. </em>Paraninfo.',
    },
    {
      referencia:
        'Ministerio de ambiente y desarrollo sostenible. (s.f.).<em> Residuos Peligrosos. Ministerio de ambiente y desarrollo sostenible.</em>',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/residuos-peligrosos/',
    },
    {
      referencia:
        'Neheyler Mechatronics. (2022). <em>Introducción al diagrama de contactos (ladder o KOP).</em> Neheyler Mechatronics.',
      link: 'https://www.neheylermechatronics.com/plc/introduccionladder/',
    },
    {
      referencia:
        'Secretaría de Hábitat Servicio de Higiene y Seguridad. (s.f.). <em>Normas de Seguridad para Manipular Residuos Peligrosos: Higiene y Seguridad.</em> UBAEXACTAS.',
      link:
        'https://exactas.uba.ar/higieneyseguridad/medio-ambiente/residuos/residuos-peligrosos/normas-de-seguridad-para-manipular-residuos-peligrosos/',
    },
    {
      referencia: 'Xunta.gal. (s.f.). <em>Programación 1819.</em> Xunta.gal. ',
      link:
        'https://www.edu.xunta.gal/centros/iesblancoamorculleredo/aulavirtual/mod/book/view.php?id=19963&chapterid=4298',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

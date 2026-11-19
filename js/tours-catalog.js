/**
 * Catálogo de Tours Guiados Pedagógicos - Demo Revista & Tour
 * 1. Misión Saber 3° • Matemáticas (Misión 1: Págs. 180-198)
 * 2. Misión Saber 9° • Lenguaje (Misión 1: Págs. 8-29)
 * 3. Misión Saber 11° Tomo 2 • Matemáticas (Misión 1: Págs. 8-17)
 */
window.TOURS_CATALOG = [
  {
    "id": "matematicas3",
    "title": "Misión Saber 3° • Matemáticas",
    "shortTitle": "3° Matemáticas",
    "subtitle": "Educación Básica Primaria • Enfoque por Fases",
    "gradeBadge": "3° PRIMARIA",
    "subjectBadge": "MATEMÁTICAS",
    "icon": "📐",
    "coverImg": "books/ms3/page_001.jpg",
    "previewImg": "books/ms3/page_180.jpg",
    "theme": "theme-matematicas",
    "bookId": "ms3",
    "bookStartPage": 180,
    "stepsUnitName": "Fase",
    "stepsUnitPlural": "Fases",
    "description": "Recorrido pedagógico paso a paso por las 4 fases de la Unidad de Matemáticas (Págs. 180 a 198), con contextualización, modelado metacognitivo, conceptualización y prueba de campo.",
    "steps": [
      {
        "id": "fase1",
        "stepNum": 1,
        "title": "Fase 1: Centro de Comando",
        "badge": "Fase 1 • Centro de Comando (Págs. 180 - 181)",
        "purpose": "Contextualizar el aprendizaje, motivar al estudiante y activar sus presaberes antes de abordar los conceptos formales de matemáticas.",
        "pages": [
          {
            "pageNumber": 180,
            "label": "Pág. 180 (Puntos 1 al 5)",
            "imageSrc": "books/ms3/page_180.jpg"
          },
          {
            "pageNumber": 181,
            "label": "Pág. 181 (Puntos 6 al 8)",
            "imageSrc": "books/ms3/page_181.jpg"
          }
        ],
        "avatar": {
          "name": "Comandante Mateo",
          "role": "Líder de Misión",
          "src": "assets/avatares/avatar_fase1.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 180,
            "top": 32.5,
            "left": 8.9,
            "shortLabel": "1. Título de Misión",
            "title": "1. El Título de Misión (Activando el sistema de navegación)",
            "explanation": "Rompe con el esquema tradicional de 'Unidad 1'. Convierte la clase de matemáticas en una misión espacial donde el estudiante es el protagonista (comandante).",
            "pedagogy": "Estimula la motivación intrínseca y da un sentido narrativo al aprendizaje."
          },
          {
            "num": 2,
            "pageNumber": 180,
            "top": 45,
            "left": 19.5,
            "shortLabel": "2. ¿Cuál es el desafío?",
            "title": "2. ¿Cuál es nuestro desafío?",
            "explanation": "Presenta el problema a resolver. Conecta las matemáticas con situaciones concretas (organizar información, reconocer patrones, analizar señales) en lugar de presentar números aislados.",
            "pedagogy": "Plantea un aprendizaje basado en problemas y retos contextualizados."
          },
          {
            "num": 3,
            "pageNumber": 180,
            "top": 63.5,
            "left": 19.5,
            "shortLabel": "3. Reto de la Misión",
            "title": "3. Reto de la Misión",
            "explanation": "Es el objetivo de aprendizaje planteado como una meta alcanzable (crear un mapa del planeta usando datos y patrones). Le da sentido a todo lo que se hará en la unidad.",
            "pedagogy": "Define metas claras y alcanzables que orientan la auto-evaluación."
          },
          {
            "num": 4,
            "pageNumber": 180,
            "top": 80.5,
            "left": 55,
            "shortLabel": "4. Cápsula ECO",
            "title": "4. Cápsula ECO",
            "explanation": "Espacio vital para la educación socioemocional. En matemáticas, la frustración es común. Aquí se enseña a identificar emociones y valorar las ideas de los compañeros al resolver problemas.",
            "pedagogy": "Desarrolla habilidades socioemocionales indispensables para la resiliencia en ciencias."
          },
          {
            "num": 5,
            "pageNumber": 180,
            "top": 88,
            "left": 10,
            "shortLabel": "5. Conexión Space-Gec",
            "title": "5. Conexión Space-Gec (Plataforma Digital)",
            "explanation": "Integración inmediata del ecosistema digital. El estudiante es invitado a ampliar la narrativa espacial mediante un video interactivo, uniendo el libro físico con la plataforma.",
            "pedagogy": "Articula el aula física con el entorno digital y el ecosistema híbrido."
          },
          {
            "num": 6,
            "pageNumber": 181,
            "top": 14.5,
            "left": 6.8,
            "shortLabel": "6. Actividad Diagnóstico",
            "title": "6. Actividad Diagnóstico (Despegamos... ¿Qué sabemos?)",
            "explanation": "No es un examen punitivo. Es un 'calentamiento' cognitivo (ej. comparar y ordenar números en meteoritos) para que el docente identifique cómo llegan los estudiantes.",
            "pedagogy": "Evaluación diagnóstica formativa sin calificación punitiva."
          },
          {
            "num": 7,
            "pageNumber": 181,
            "top": 45.5,
            "left": 6.8,
            "shortLabel": "7. Diccionario de Misión",
            "title": "7. Diccionario de la Misión",
            "explanation": "Estandarización del lenguaje matemático. Conceptos clave (número, patrón, secuencia) definidos de forma sencilla para que todos hablen el mismo idioma durante la misión.",
            "pedagogy": "Nivelación del vocabulario disciplinar para evitar confusiones semánticas."
          },
          {
            "num": 8,
            "pageNumber": 181,
            "top": 41,
            "left": 49,
            "shortLabel": "8. Navegando Misión",
            "title": "8. Navegando por la Misión",
            "explanation": "Un mapa de ruta. Le explica al estudiante (y al docente) qué pasará en cada una de las 4 fases de la unidad, promoviendo la autonomía y la organización.",
            "pedagogy": "Fomenta la autorregulación metacognitiva y la claridad de ruta de aprendizaje."
          }
        ]
      },
      {
        "id": "fase2",
        "stepNum": 2,
        "title": "Fase 2: Simulador de Vuelo",
        "badge": "Fase 2 • Simulador de Vuelo (Pág. 182)",
        "purpose": "Enseñar explícitamente el razonamiento metacognitivo para resolver problemas tipo prueba estandarizada (ICFES Saber).",
        "pages": [
          {
            "pageNumber": 182,
            "label": "Pág. 182 (Puntos 1 y 2)",
            "imageSrc": "books/ms3/page_182.jpg"
          }
        ],
        "avatar": {
          "name": "Científico Tomás",
          "role": "Especialista Metacognitivo",
          "src": "assets/avatares/avatar_fase2.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 182,
            "top": 17.5,
            "left": 7.5,
            "shortLabel": "1. Pilota tu conocimiento",
            "title": "1. Pilota tu conocimiento (Las 4 Reglas de Oro)",
            "explanation": "Enseña el 'cómo pensar':\n• Lupa (Identifica): Comprender qué pide el problema.\n• Brújula (Rastrea): Buscar los datos útiles (números, patrones).\n• Cerebro (Activa): Elegir la operación o estrategia matemática adecuada.\n• Aterrizaje (Responde): Comprobar la respuesta y argumentar por qué es correcta.",
            "pedagogy": "Modelado metacognitivo explícito paso a paso."
          },
          {
            "num": 2,
            "pageNumber": 182,
            "top": 53,
            "left": 7.5,
            "shortLabel": "2. Punto de Control Modelado",
            "title": "2. Punto de Control Modelado",
            "explanation": "No se le pide al estudiante que resuelva solo todavía. El libro le muestra un ítem real (una secuencia numérica) y desglosa frente a él cómo se aplican los 4 pasos anteriores para llegar a la respuesta correcta de forma estructurada.",
            "pedagogy": "Andamiaje pedagógico guiado para evitar la frustración en pruebas tipo Saber."
          }
        ]
      },
      {
        "id": "fase3",
        "stepNum": 3,
        "title": "Fase 3: Exploración",
        "badge": "Fase 3 • Exploración de la Misión (Págs. 183, 184 y 195)",
        "purpose": "Desarrollo del componente disciplinar mediante la conceptualización, la práctica (taller) y la evaluación formativa.",
        "pages": [
          {
            "pageNumber": 183,
            "label": "Pág. 183 (Puntos 1 al 4)",
            "imageSrc": "books/ms3/page_183.jpg"
          },
          {
            "pageNumber": 184,
            "label": "Pág. 184 (Puntos 5 y 6)",
            "imageSrc": "books/ms3/page_184.jpg"
          },
          {
            "pageNumber": 195,
            "label": "Pág. 195 (Punto 7: Control Reforzado)",
            "imageSrc": "books/ms3/page_195.jpg"
          }
        ],
        "avatar": {
          "name": "Explorador Lucas",
          "role": "Entrenador de Campo",
          "src": "assets/avatares/avatar_fase3.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 183,
            "top": 15,
            "left": 7,
            "shortLabel": "1. Numérico - Variacional",
            "title": "1. Numérico - Variacional",
            "explanation": "Identificación clara del componente evaluado por el ICFES que se está trabajando.",
            "pedagogy": "Transparencia curricular frente al estándar del Ministerio de Educación."
          },
          {
            "num": 2,
            "pageNumber": 183,
            "top": 21,
            "left": 60,
            "shortLabel": "2. Observando el Planeta",
            "title": "2. Observando el Planeta (Conceptualización)",
            "explanation": "La teoría matemática no es árida; se presenta integrada a la narrativa de la misión (ej. el extraterrestre que compara cantidades de cristales de energía).",
            "pedagogy": "Gamificación y narrativa espacial para una asimilación conceptual amigable."
          },
          {
            "num": 3,
            "pageNumber": 183,
            "top": 50.5,
            "left": 6.5,
            "shortLabel": "3. Punto de Control",
            "title": "3. Punto de Control",
            "explanation": "Una pregunta tipo Saber intercalada en el aprendizaje. Exige que el estudiante aplique lo aprendido de inmediato y justifique su respuesta, fomentando la argumentación matemática.",
            "pedagogy": "Evaluación formativa continua para consolidar de inmediato cada noción."
          },
          {
            "num": 4,
            "pageNumber": 183,
            "top": 51,
            "left": 50,
            "shortLabel": "4. Manos a la obra",
            "title": "4. Manos a la obra",
            "explanation": "La sección práctica de la clase. Ejercicios donde el estudiante actúa como 'detective' o constructor, aplicando la suma, la multiplicación o la comparación de números con objetos tangibles.",
            "pedagogy": "Aprendizaje activo con material manipulativo y retos de aplicación."
          },
          {
            "num": 5,
            "pageNumber": 184,
            "top": 8,
            "left": 6.5,
            "shortLabel": "5. Laboratorio en Casa",
            "title": "5. Laboratorio en Casa",
            "explanation": "Extiende el aprendizaje fuera del aula, involucrando a la familia con materiales cotidianos (recipientes y semillas) para afianzar conceptos como la adición.",
            "pedagogy": "Corresponsabilidad familiar y anclaje de las matemáticas a la vida cotidiana."
          },
          {
            "num": 6,
            "pageNumber": 184,
            "top": 78.5,
            "left": 6,
            "shortLabel": "6. Datos de la Misión",
            "title": "6. Datos de la Misión",
            "explanation": "Datos curiosos que conectan la matemática abstracta con el mundo real o el contexto espacial (ej. cómo los astronautas gestionan recursos sumando cantidades).",
            "pedagogy": "Cultura general STEM para despertar la vocación científica."
          },
          {
            "num": 7,
            "pageNumber": 195,
            "top": 4.5,
            "left": 6.5,
            "shortLabel": "7. Punto de Control Reforzado",
            "title": "7. Punto de Control Reforzado (Pág. 195)",
            "explanation": "Batería de 7 preguntas tipo Saber (opción múltiple) al final de la fase 3. Evalúan los aprendizajes acumulados, marcando explícitamente qué competencia miden.",
            "pedagogy": "Medición diagnóstica de cierre de fase previa al simulacro formal."
          }
        ]
      },
      {
        "id": "fase4",
        "stepNum": 4,
        "title": "Fase 4: Informando Avances",
        "badge": "Fase 4 • Informando Avances (Págs. 196 y 198)",
        "purpose": "Consolidación final, evaluación sumativa (simulacro) y cierre del ciclo de aprendizaje.",
        "pages": [
          {
            "pageNumber": 196,
            "label": "Pág. 196 (Puntos 1 y 2)",
            "imageSrc": "books/ms3/page_196.jpg"
          },
          {
            "pageNumber": 198,
            "label": "Pág. 198 (Puntos 3 y 4)",
            "imageSrc": "books/ms3/page_198.jpg"
          }
        ],
        "avatar": {
          "name": "Científico Samuel",
          "role": "Director de Evaluación",
          "src": "assets/avatares/avatar_fase4.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 196,
            "top": 32.5,
            "left": 8.5,
            "shortLabel": "1. Proyecto final",
            "title": "1. Proyecto final",
            "explanation": "Se menciona la socialización en la plataforma digital. Es el espacio para que el trabajo individual se convierta en una construcción colectiva.",
            "pedagogy": "Evaluación por proyectos y socialización colectiva de saberes."
          },
          {
            "num": 2,
            "pageNumber": 196,
            "top": 55,
            "left": 9.5,
            "shortLabel": "2. Prueba de Campo",
            "title": "2. Prueba de Campo (10 preguntas)",
            "explanation": "Un mini-simulacro riguroso diseñado bajo la Estructura Basada en Evidencias (EBE) del ICFES. El estudiante se enfrenta a un cuadernillo real donde debe rellenar óvalos, manejando tiempos y contextos matemáticos.",
            "pedagogy": "Entrenamiento real bajo condiciones de prueba Saber estandarizada."
          },
          {
            "num": 3,
            "pageNumber": 198,
            "top": 64,
            "left": 41,
            "shortLabel": "3. Conexión SpaceGec",
            "title": "3. Conexión SpaceGec (Profundización)",
            "explanation": "El libro físico llega a su límite, pero el aprendizaje continúa. Se remite al estudiante a la plataforma para resolver 15 preguntas adicionales, generando analítica de datos para el docente.",
            "pedagogy": "Analítica de aprendizaje y profundización personalizada en plataforma."
          },
          {
            "num": 4,
            "pageNumber": 198,
            "top": 81.5,
            "left": 11.5,
            "shortLabel": "4. Finalización Misión",
            "title": "4. Finalización de la Misión",
            "explanation": "Un cierre narrativo que celebra el esfuerzo del estudiante y lo deja en suspenso y motivado para el próximo desafío (la siguiente misión/unidad).",
            "pedagogy": "Cierre emocional positivo y motivación para el siguiente ciclo escolar."
          }
        ]
      }
    ]
  },
  {
    "id": "lenguaje9",
    "title": "Misión Saber 9° • Lenguaje",
    "shortTitle": "9° Lenguaje",
    "subtitle": "Educación Básica Secundaria • Misión 1 (Págs. 8 - 29)",
    "gradeBadge": "9° SECUNDARIA",
    "subjectBadge": "LENGUAJE",
    "icon": "📖",
    "coverImg": "books/ms9/page_001.jpg",
    "previewImg": "books/ms9/page_008.jpg",
    "theme": "theme-lenguaje",
    "bookId": "ms9",
    "bookStartPage": 8,
    "stepsUnitName": "Fase",
    "stepsUnitPlural": "Fases",
    "description": "Recorrido pedagógico paso a paso por las 4 fases de la Primera Misión de Lenguaje 9° (Págs. 8 a 29): 'Veo, Interpreto y Comunico mi Entorno'.",
    "steps": [
      {
        "id": "fase1",
        "stepNum": 1,
        "title": "Fase 1: Centro de Comando",
        "badge": "Fase 1 • Centro de Comando (Págs. 8 - 9)",
        "purpose": "Contextualizar el aprendizaje, activar presaberes comunicativos y presentar el reto del noticiero escolar.",
        "pages": [
          {
            "pageNumber": 8,
            "label": "Pág. 8 (Puntos 1 al 6)",
            "imageSrc": "books/ms9/page_008.jpg"
          },
          {
            "pageNumber": 9,
            "label": "Pág. 9 (Puntos 7 al 10)",
            "imageSrc": "books/ms9/page_009.jpg"
          }
        ],
        "avatar": {
          "name": "Comandante Mateo",
          "role": "Líder de Misión",
          "src": "assets/avatares/avatar_fase1.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 8,
            "top": 26.5,
            "left": 2,
            "shortLabel": "1. Título de la Misión",
            "title": "1. Título de la Misión",
            "explanation": "Eje temático y narrativo: 'Veo, Interpreto y Comunico mi Entorno'. Conecta los aprendizajes del área con situaciones reales y retos del entorno cotidiano.",
            "pedagogy": "Define el territorio de exploración y da sentido a cada concepto que el estudiante va a construir."
          },
          {
            "num": 2,
            "pageNumber": 8,
            "top": 6.8,
            "left": 22,
            "shortLabel": "2. Fase 1: Centro de Comando",
            "title": "2. Fase 1: Centro de Comando",
            "explanation": "Punto de partida de la unidad diseñado para motivar, activar saberes previos y contextualizar el gran reto a resolver.",
            "pedagogy": "Aquí se encienden los motores de la misión y se alinean los objetivos de aprendizaje con el grupo."
          },
          {
            "num": 3,
            "pageNumber": 8,
            "top": 39,
            "left": 23,
            "shortLabel": "3. ¿Cuál es nuestro desafío?",
            "title": "3. ¿Cuál es nuestro desafío?",
            "explanation": "Plantea una situación problemática intrigante que despierta la curiosidad y le da sentido práctico a todo lo que se aprenderá.",
            "pedagogy": "Conecta la pregunta con la vida real para que el aprendizaje no sea abstracto sino vivencial."
          },
          {
            "num": 4,
            "pageNumber": 8,
            "top": 55,
            "left": 21,
            "shortLabel": "4. Reto de la Misión",
            "title": "4. Reto de la Misión",
            "explanation": "¿Cómo comunicar situaciones de nuestro entorno a través de un noticiero escolar? Meta clara que orienta el aprendizaje.",
            "pedagogy": "Es el destino final al que apunta cada ejercicio y taller de la misión."
          },
          {
            "num": 5,
            "pageNumber": 8,
            "top": 66.5,
            "left": 21,
            "shortLabel": "5. Cápsula ECO: Planteo mis metas",
            "title": "5. Cápsula ECO: Planteo mis metas",
            "explanation": "Espacio formativo para reconocer emociones, fortalecer la empatía y desarrollar habilidades para la vida y el trabajo en equipo.",
            "pedagogy": "Desarrolla la autorregulación y la motivación intrínseca en cada cadete."
          },
          {
            "num": 6,
            "pageNumber": 8,
            "top": 61,
            "left": 3.5,
            "shortLabel": "6. Conexión SpaceGec (Multimedia)",
            "title": "6. Conexión SpaceGec (Multimedia)",
            "explanation": "Acceso directo a recursos digitales, animaciones y videos interactivos que profundizan los temas abordados.",
            "pedagogy": "Permite vincular el libro impreso con las plataformas digitales de Grupo Educate."
          },
          {
            "num": 7,
            "pageNumber": 9,
            "top": 7,
            "left": 8,
            "shortLabel": "7. Despegamos: Tablero de Control",
            "title": "7. Despegamos: Tablero de Control",
            "explanation": "Actividad de calentamiento cognitivo y exploración previa para identificar presaberes antes de conceptualizar.",
            "pedagogy": "Permite al docente conocer el punto de partida del grupo sin evaluación punitiva."
          },
          {
            "num": 8,
            "pageNumber": 9,
            "top": 44.5,
            "left": 9,
            "shortLabel": "8. Diccionario de la Misión",
            "title": "8. Diccionario de la Misión",
            "explanation": "Glosario clave con definiciones operativas de conceptos que facilitan la comprensión lectora durante la misión.",
            "pedagogy": "Estandariza los términos del área para que todos hablemos el mismo lenguaje científico."
          },
          {
            "num": 9,
            "pageNumber": 9,
            "top": 44.5,
            "left": 54,
            "shortLabel": "9. Navegando por la Misión",
            "title": "9. Navegando por la Misión",
            "explanation": "Mapa de viaje que describe los pasos y metas de cada una de las 4 fases de la unidad didáctica.",
            "pedagogy": "Fomenta la autorregulación metacognitiva y muestra al estudiante hacia dónde se dirige."
          },
          {
            "num": 10,
            "pageNumber": 9,
            "top": 68,
            "left": 8,
            "shortLabel": "10. Conceptos en SpaceGec",
            "title": "10. Conceptos en SpaceGec",
            "explanation": "Acceso ampliado a fichas interactivas y cápsulas digitales alojadas en la plataforma virtual.",
            "pedagogy": "Refuerza conceptos clave con interactividad para estudiantes que aprenden de manera visual."
          }
        ]
      },
      {
        "id": "fase2",
        "stepNum": 2,
        "title": "Fase 2: Simulador de Vuelo",
        "badge": "Fase 2 • Simulador de Vuelo (Pág. 10)",
        "purpose": "Modelado metacognitivo explícito de cómo abordar una pregunta de lectura crítica tipo Saber.",
        "pages": [
          {
            "pageNumber": 10,
            "label": "Pág. 10 (Puntos 1 al 2)",
            "imageSrc": "books/ms9/page_010.jpg"
          }
        ],
        "avatar": {
          "name": "Científico Tomás",
          "role": "Especialista Metacognitivo",
          "src": "assets/avatares/avatar_fase2.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 10,
            "top": 6.5,
            "left": 9,
            "shortLabel": "1. Fase 2: Simulador de Vuelo",
            "title": "1. Fase 2: Simulador de Vuelo",
            "explanation": "Enseña explícitamente el procedimiento para pensar y resolver preguntas tipo Saber mediante los 4 Pasos de Oro.",
            "pedagogy": "Lupa (identifica), Brújula (rastrea), Cerebro (activa saberes) y Aterrizaje (respuesta segura)."
          },
          {
            "num": 2,
            "pageNumber": 10,
            "top": 49.5,
            "left": 9,
            "shortLabel": "2. Punto de Control Modelado",
            "title": "2. Punto de Control Modelado",
            "explanation": "Desglosa frente al estudiante la aplicación real de las 4 reglas metacognitivas sobre una pregunta Saber auténtica.",
            "pedagogy": "Muestra el razonamiento paso a paso para evitar la impulsividad en las pruebas de Estado."
          }
        ]
      },
      {
        "id": "fase3",
        "stepNum": 3,
        "title": "Fase 3: Exploración",
        "badge": "Fase 3 • Exploración de la Misión (Págs. 11 - 26)",
        "purpose": "Conceptualización disciplinar, talleres de aplicación y puntos de control en comprensión y producción textual.",
        "pages": [
          {
            "pageNumber": 11,
            "label": "Pág. 11 (Puntos 1 al 2)",
            "imageSrc": "books/ms9/page_011.jpg"
          },
          {
            "pageNumber": 12,
            "label": "Pág. 12 (Puntos 3 al 4)",
            "imageSrc": "books/ms9/page_012.jpg"
          },
          {
            "pageNumber": 24,
            "label": "Pág. 24 (Punto 5)",
            "imageSrc": "books/ms9/page_024.jpg"
          },
          {
            "pageNumber": 25,
            "label": "Pág. 25 (Punto 6)",
            "imageSrc": "books/ms9/page_025.jpg"
          }
        ],
        "avatar": {
          "name": "Explorador Lucas",
          "role": "Entrenador de Campo",
          "src": "assets/avatares/avatar_fase3.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 11,
            "top": 6.5,
            "left": 8,
            "shortLabel": "1. Fase 3: Exploración de la Misión",
            "title": "1. Fase 3: Exploración de la Misión",
            "explanation": "Desarrollo disciplinar formal: abordaje de temáticas, marcos teóricos, cuadros comparativos y talleres prácticos.",
            "pedagogy": "Aquí se construye el conocimiento formal articulado con los Estándares y DBA del MEN."
          },
          {
            "num": 2,
            "pageNumber": 11,
            "top": 50,
            "left": 52,
            "shortLabel": "2. Manos a la Obra",
            "title": "2. Manos a la Obra",
            "explanation": "Taller aplicativo para transferir conceptos a situaciones prácticas de escritura, diseño y resolución guiada.",
            "pedagogy": "El estudiante deja de ser espectador y se convierte en creador y productor de mensajes."
          },
          {
            "num": 3,
            "pageNumber": 12,
            "top": 7.5,
            "left": 36,
            "shortLabel": "3. Cápsula ECO (Fase 3)",
            "title": "3. Cápsula ECO (Fase 3)",
            "explanation": "Refuerzo socioemocional integrado al aprendizaje disciplinar: persistencia, manejo de frustración y empatía.",
            "pedagogy": "Las habilidades socioemocionales fortalecen el rendimiento académico y la convivencia."
          },
          {
            "num": 4,
            "pageNumber": 12,
            "top": 31.5,
            "left": 8,
            "shortLabel": "4. Conexión SpaceGec (Fase 3)",
            "title": "4. Conexión SpaceGec (Fase 3)",
            "explanation": "Video pedagógico complementario para profundizar en las diferencias del lenguaje verbal y no verbal.",
            "pedagogy": "El contenido audiovisual refuerza la retención de conceptos complejos."
          },
          {
            "num": 5,
            "pageNumber": 24,
            "top": 78.5,
            "left": 14,
            "shortLabel": "5. Datos de la Misión",
            "title": "5. Datos de la Misión",
            "explanation": "Dato curioso y contextualizado que vincula el tema con la tecnología, la historia o la cultura contemporánea.",
            "pedagogy": "Despierta el asombro y conecta el aula con los avances del mundo digital."
          },
          {
            "num": 6,
            "pageNumber": 25,
            "top": 6.5,
            "left": 8,
            "shortLabel": "6. Punto de Control Reforzado",
            "title": "6. Punto de Control Reforzado",
            "explanation": "Batería de preguntas tipo Saber al cierre de la Fase 3 con balance de lectura literal, inferencial y crítica.",
            "pedagogy": "Permite verificar el dominio consolidado de la fase antes de pasar al simulacro final."
          }
        ]
      },
      {
        "id": "fase4",
        "stepNum": 4,
        "title": "Fase 4: Informando Avances",
        "badge": "Fase 4 • Informando Avances (Págs. 27 - 29)",
        "purpose": "Consolidación mediante el proyecto final, prueba de campo tipo Saber y conexión con la plataforma digital.",
        "pages": [
          {
            "pageNumber": 27,
            "label": "Pág. 27 (Puntos 1 al 3)",
            "imageSrc": "books/ms9/page_027.jpg"
          },
          {
            "pageNumber": 29,
            "label": "Pág. 29 (Puntos 4 al 5)",
            "imageSrc": "books/ms9/page_029.jpg"
          }
        ],
        "avatar": {
          "name": "Científico Samuel",
          "role": "Director de Evaluación",
          "src": "assets/avatares/avatar_fase4.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 27,
            "top": 6.5,
            "left": 8,
            "shortLabel": "1. Fase 4: Informando Avances",
            "title": "1. Fase 4: Informando Avances",
            "explanation": "Fase final de la unidad: evaluación sumativa rigurosa, proyecto final y socialización de aprendizajes.",
            "pedagogy": "Es el momento de poner a prueba todo lo construido a lo largo de la misión."
          },
          {
            "num": 2,
            "pageNumber": 27,
            "top": 16,
            "left": 8,
            "shortLabel": "2. Proyecto Final y Socialización",
            "title": "2. Proyecto Final y Socialización",
            "explanation": "Diseño del producto comunicativo final (noticiero escolar) y pautas de socialización oral y colectiva.",
            "pedagogy": "Transforma el conocimiento individual en un aporte tangible para la comunidad educativa."
          },
          {
            "num": 3,
            "pageNumber": 27,
            "top": 26,
            "left": 8,
            "shortLabel": "3. Prueba de Campo (10 Preguntas)",
            "title": "3. Prueba de Campo (10 Preguntas)",
            "explanation": "Mini-simulacro de 10 preguntas tipo Saber con hoja de respuestas y balance de competencias evaluadas.",
            "pedagogy": "Entrena los tiempos y condiciones reales de la prueba estandarizada oficial."
          },
          {
            "num": 4,
            "pageNumber": 29,
            "top": 57.5,
            "left": 54,
            "shortLabel": "4. Conexión SpaceGec (15 Preguntas)",
            "title": "4. Conexión SpaceGec (15 Preguntas)",
            "explanation": "Continúa tu entrenamiento: resuelve 15 preguntas virtuales en SpaceGec con analítica de desempeño en tiempo real.",
            "pedagogy": "El libro físico se complementa con la plataforma digital para un diagnóstico profundo."
          },
          {
            "num": 5,
            "pageNumber": 29,
            "top": 68,
            "left": 54,
            "shortLabel": "5. Finalización de la Misión",
            "title": "5. Finalización de la Misión",
            "explanation": "Cierre narrativo y felicitación al comandante por culminar con éxito la misión. Motivación para el siguiente reto.",
            "pedagogy": "¡Misión cumplida! Has demostrado liderazgo, pensamiento crítico y capacidad comunicativa."
          }
        ]
      }
    ]
  },
  {
    "id": "matematicas11_t2",
    "title": "Misión Saber 11° Tomo 2 • Matemáticas",
    "shortTitle": "11° Matemáticas T2",
    "subtitle": "Educación Media • Misión 1: Numérico - Variacional (Págs. 8 - 17)",
    "gradeBadge": "11° SABER 11",
    "subjectBadge": "MATEMÁTICAS",
    "icon": "📊",
    "coverImg": "books/ms11_tomo2/page_001.jpg",
    "previewImg": "books/ms11_tomo2/page_008.jpg",
    "theme": "theme-fisica",
    "bookId": "ms11_t2",
    "bookStartPage": 8,
    "stepsUnitName": "Paso",
    "stepsUnitPlural": "Pasos",
    "description": "Recorrido pedagógico paso a paso por la Primera Misión de Matemáticas Tomo 2 (Págs. 8 a 17): 'Variaciones que cuentan: Interpreta y actúa con datos'.",
    "steps": [
      {
        "id": "paso1",
        "stepNum": 1,
        "title": "Paso 1: Abordaje",
        "badge": "Paso 1 • Abordaje de la Misión (Pág. 8)",
        "purpose": "Establecer el contexto cuantitativo, los objetivos formativos y los términos clave antes del análisis.",
        "pages": [
          {
            "pageNumber": 8,
            "label": "Pág. 8 (Puntos 1 al 6)",
            "imageSrc": "books/ms11_tomo2/page_008.jpg"
          }
        ],
        "avatar": {
          "name": "Comandante Mateo",
          "role": "Líder de Misión",
          "src": "assets/avatares/avatar_fase1.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 8,
            "top": 34,
            "left": 5,
            "shortLabel": "1. Misión 1: Numérico - Variacional",
            "title": "1. Misión 1: Numérico - Variacional",
            "explanation": "Misión 1: 'Variaciones que cuentan: Interpreta y actúa con datos'. Componente Numérico - Variacional de Saber 11.",
            "pedagogy": "Aborda el estudio riguroso del cambio y las relaciones funcionales en contextos reales."
          },
          {
            "num": 2,
            "pageNumber": 8,
            "top": 6.5,
            "left": 28,
            "shortLabel": "2. Paso 1: Abordaje de la Misión",
            "title": "2. Paso 1: Abordaje de la Misión",
            "explanation": "Paso 1: Abordaje de la Misión. Establece el contexto de aprendizaje, los objetivos formativos y los términos clave antes del análisis cuantitativo.",
            "pedagogy": "El abordaje prepara tu mente definiendo con precisión qué vamos a investigar y aprender."
          },
          {
            "num": 3,
            "pageNumber": 8,
            "top": 13,
            "left": 28,
            "shortLabel": "3. Objetivo de la Misión",
            "title": "3. Objetivo de la Misión",
            "explanation": "Reconocer patrones de cambio en situaciones cotidianas, representarlos en tablas o gráficas y formular estrategias matemáticas para resolver problemas de variación.",
            "pedagogy": "Tener claro el objetivo te permite monitorear tu propio progreso hacia la meta ICFES."
          },
          {
            "num": 4,
            "pageNumber": 8,
            "top": 24,
            "left": 29,
            "shortLabel": "4. Glosario para la Misión",
            "title": "4. Glosario para la Misión",
            "explanation": "Define conceptos clave: Variación, Razón de cambio, Tendencia (creciente/decreciente) y Función afín/lineal (y = mx + b).",
            "pedagogy": "Hablar con precisión matemática es indispensable para comprender los enunciados de la prueba de Estado."
          },
          {
            "num": 5,
            "pageNumber": 8,
            "top": 44,
            "left": 29,
            "shortLabel": "5. Compendio de la Misión",
            "title": "5. Compendio de la Misión",
            "explanation": "Sintetiza el pensamiento numérico-variacional: transición de la observación a tablas, gráficas y fórmulas para justificar decisiones cuantitativas.",
            "pedagogy": "El compendio articula la teoría con su aplicación real en problemas de cambio."
          },
          {
            "num": 6,
            "pageNumber": 8,
            "top": 66,
            "left": 7,
            "shortLabel": "6. Conexión SpaceGec (Diagnóstico)",
            "title": "6. Conexión SpaceGec (Diagnóstico)",
            "explanation": "Ingresa a la Misión en la plataforma digital y completa tu diagnóstico inicial desde casa para personalizar tu entrenamiento.",
            "pedagogy": "El ecosistema digital mide tus fortalezas iniciales para acompañarte en tu preparación."
          }
        ]
      },
      {
        "id": "paso2",
        "stepNum": 2,
        "title": "Paso 2: Entrenamiento",
        "badge": "Paso 2 • Entrenamiento Saber 11 (Págs. 9 - 11)",
        "purpose": "Análisis de pregunta modelo, matriz de competencias, actividades de reto y anatomía de la respuesta.",
        "pages": [
          {
            "pageNumber": 9,
            "label": "Pág. 9 (Puntos 1 al 5)",
            "imageSrc": "books/ms11_tomo2/page_009.jpg"
          },
          {
            "pageNumber": 10,
            "label": "Pág. 10 (Puntos 6 al 7)",
            "imageSrc": "books/ms11_tomo2/page_010.jpg"
          },
          {
            "pageNumber": 11,
            "label": "Pág. 11 (Puntos 8 al 10)",
            "imageSrc": "books/ms11_tomo2/page_011.jpg"
          }
        ],
        "avatar": {
          "name": "Científico Tomás",
          "role": "Especialista Metacognitivo",
          "src": "assets/avatares/avatar_fase2.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 9,
            "top": 6.5,
            "left": 10,
            "shortLabel": "1. Paso 2: Zona de Entrenamiento",
            "title": "1. Paso 2: Zona de Entrenamiento",
            "explanation": "Paso 2: Zona de Entrenamiento. Desconstruye una pregunta tipo Saber 11 para enseñar cómo pensar, rastrear pistas y evitar trampas.",
            "pedagogy": "Aquí aprendemos la estrategia metacognitiva para resolver preguntas complejas paso a paso."
          },
          {
            "num": 2,
            "pageNumber": 9,
            "top": 12.5,
            "left": 9,
            "shortLabel": "2. Pregunta Modelo",
            "title": "2. Pregunta Modelo",
            "explanation": "Situación auténtica de Laura sobre variación mensual de gastos en el hogar ($18.000 más cada mes) para modelar con una función afín.",
            "pedagogy": "Analiza con cuidado la tabla: el gasto no aumenta en porcentaje, sino en un valor constante cada mes."
          },
          {
            "num": 3,
            "pageNumber": 9,
            "top": 18.5,
            "left": 10,
            "shortLabel": "3. Matriz Técnica ICFES Saber 11",
            "title": "3. Matriz Técnica ICFES Saber 11",
            "explanation": "Componente: Numérico - variacional • Competencia: Interpretación y representación • Evidencia: Da cuenta de las características básicas de la información en series, tablas y gráficas.",
            "pedagogy": "Identificar la competencia evaluada te permite activar la estrategia correcta antes de calcular."
          },
          {
            "num": 4,
            "pageNumber": 9,
            "top": 13.5,
            "left": 58,
            "shortLabel": "4. Guía Metacognitivo",
            "title": "4. Guía Metacognitivo",
            "explanation": "Antes de elegir la opción definitiva, verifica tu hipótesis en las actividades siguientes para sustentar con evidencia sólida.",
            "pedagogy": "Frena la impulsividad: no marques la primera opción que parezca lógica sin verificar la tendencia."
          },
          {
            "num": 5,
            "pageNumber": 9,
            "top": 26.5,
            "left": 58,
            "shortLabel": "5. Apuntes para la Misión",
            "title": "5. Apuntes para la Misión",
            "explanation": "Estrategias clave: Punto de partida (valores constantes o variables), Errores comunes (confundir incremento lineal con porcentaje) y Fórmulas esenciales (y = mx + b).",
            "pedagogy": "La tasa de cambio promedio Δy/Δx es el concepto rector de todo el cálculo diferencial en grado 11."
          },
          {
            "num": 6,
            "pageNumber": 10,
            "top": 5,
            "left": 8.5,
            "shortLabel": "6. Actividad 1. Detecta el error en la tendencia",
            "title": "6. Actividad 1. Detecta el error en la tendencia",
            "explanation": "Objetivo: Reconocer si una variación es constante analizando incrementos mensuales en tablas de datos cotidianos.",
            "pedagogy": "Resta cada mes con el anterior: si la diferencia es siempre $18.000, el incremento es constante, no cada vez mayor."
          },
          {
            "num": 7,
            "pageNumber": 10,
            "top": 49,
            "left": 9.5,
            "shortLabel": "7. Actividad 2. Reconoce el patrón de cambio",
            "title": "7. Actividad 2. Reconoce el patrón de cambio",
            "explanation": "Objetivo: Identificar la constancia en la variación de una función lineal g(x) = 2x + 15 y utilizarla para realizar predicciones cuantitativas.",
            "pedagogy": "La pendiente m=2 indica que por cada día adicional, el costo aumenta exactamente 2 unidades."
          },
          {
            "num": 8,
            "pageNumber": 11,
            "top": 4.5,
            "left": 5.5,
            "shortLabel": "8. Acompañamiento y Cierre de Zona",
            "title": "8. Acompañamiento y Cierre de Zona",
            "explanation": "Analiza la anatomía de la respuesta para comprender por qué una opción es la clave y cómo evitar los distractores típicos del ICFES.",
            "pedagogy": "Aprender por qué una opción es incorrecta es tan valioso como saber cuál es la correcta."
          },
          {
            "num": 9,
            "pageNumber": 11,
            "top": 19,
            "left": 10,
            "shortLabel": "9. Anatomía de la Respuesta",
            "title": "9. Anatomía de la Respuesta",
            "explanation": "Análisis de la clave A (recta con pendiente constante de $18.000) frente a los distractores B (proporcional erróneo), C (curva decreciente falsa) y D (estabilización).",
            "pedagogy": "El distractor B es la trampa clásica: confundir 'gasto total acumulado' con 'incremento mensual'."
          },
          {
            "num": 10,
            "pageNumber": 11,
            "top": 46,
            "left": 9,
            "shortLabel": "10. Del Análisis a la Decisión",
            "title": "10. Del Análisis a la Decisión",
            "explanation": "Ruta mental estructurada: 1. Reconocer tipo de datos, 2. Observar patrón de cambio, 3. Relacionar con representación, 4. Descartar distractores, 5. Elegir con evidencia.",
            "pedagogy": "Aplica siempre este protocolo de 5 pasos en cualquier simulacro ICFES para evitar errores por apuro."
          }
        ]
      },
      {
        "id": "paso3",
        "stepNum": 3,
        "title": "Paso 3: Bitácora",
        "badge": "Paso 3 • Bitácora de la Misión (Págs. 12 - 14)",
        "purpose": "Fundamentación teórica de pilares matemáticos y transferencia activa en el aula.",
        "pages": [
          {
            "pageNumber": 12,
            "label": "Pág. 12 (Puntos 1 al 3)",
            "imageSrc": "books/ms11_tomo2/page_012.jpg"
          },
          {
            "pageNumber": 14,
            "label": "Pág. 14 (Punto 4)",
            "imageSrc": "books/ms11_tomo2/page_014.jpg"
          }
        ],
        "avatar": {
          "name": "Explorador Lucas",
          "role": "Entrenador de Campo",
          "src": "assets/avatares/avatar_fase3.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 12,
            "top": 5,
            "left": 10,
            "shortLabel": "1. Comandante Mateo: Bitácora",
            "title": "1. Comandante Mateo: Bitácora",
            "explanation": "Es hora de revisar nuestra Bitácora de la Misión para repasar los conceptos y herramientas clave que sustentan la variación.",
            "pedagogy": "La bitácora formaliza matemáticamente lo que exploramos en la zona de entrenamiento."
          },
          {
            "num": 2,
            "pageNumber": 12,
            "top": 16.5,
            "left": 10,
            "shortLabel": "2. Paso 3: Bitácora de la Misión",
            "title": "2. Paso 3: Bitácora de la Misión",
            "explanation": "Paso 3: Bitácora de la Misión. Estructura el cuerpo conceptual del componente Numérico-Variacional organizado en 3 pilares teóricos y prácticos.",
            "pedagogy": "Los pilares conectan las funciones matemáticas con problemas reales de consumo y tarifas."
          },
          {
            "num": 3,
            "pageNumber": 12,
            "top": 54,
            "left": 11,
            "shortLabel": "3. Pilar 1: Variación y razón de cambio",
            "title": "3. Pilar 1: Variación y razón de cambio",
            "explanation": "Pilar 1: Modela situaciones cotidianas con funciones afines C(x) = mx + b (ej. tarifa telefónica fija $10.000 más $500 por minuto adicional).",
            "pedagogy": "El valor fijo es el intercepto con el eje Y; la tarifa por minuto es la pendiente m de la recta."
          },
          {
            "num": 4,
            "pageNumber": 14,
            "top": 31,
            "left": 7,
            "shortLabel": "4. Actividad en el aula",
            "title": "4. Actividad en el aula",
            "explanation": "Resuelve la situación guiada: modelo lineal de transporte vs. modelo cuadrático con incremento por tráfico (Costo = 10.000 + 2.000k + 200k²).",
            "pedagogy": "Compara ambas curvas: en la lineal el costo sube constante; en la cuadrática el costo sube aceleradamente."
          }
        ]
      },
      {
        "id": "paso4",
        "stepNum": 4,
        "title": "Paso 4: Prueba Saber",
        "badge": "Paso 4 • Prueba de Campo (Págs. 15 - 17)",
        "purpose": "Evaluación tipo ICFES Saber 11 y conexión con la plataforma SpaceGec para analítica de resultados.",
        "pages": [
          {
            "pageNumber": 15,
            "label": "Pág. 15 (Puntos 1 al 4)",
            "imageSrc": "books/ms11_tomo2/page_015.jpg"
          },
          {
            "pageNumber": 17,
            "label": "Pág. 17 (Puntos 5 al 7)",
            "imageSrc": "books/ms11_tomo2/page_017.jpg"
          }
        ],
        "avatar": {
          "name": "Científico Samuel",
          "role": "Director de Evaluación",
          "src": "assets/avatares/avatar_fase4.png"
        },
        "items": [
          {
            "num": 1,
            "pageNumber": 15,
            "top": 6.5,
            "left": 80,
            "shortLabel": "1. Orientadora: Desafío Final",
            "title": "1. Orientadora: Desafío Final",
            "explanation": "Con este repaso final tu preparación queda completa. Inicia la Prueba de Campo para demostrar tus competencias Saber 11.",
            "pedagogy": "Lee cada pregunta analizando la gráfica y los ejes antes de mirar las opciones de respuesta."
          },
          {
            "num": 2,
            "pageNumber": 15,
            "top": 20,
            "left": 8.5,
            "shortLabel": "2. Paso 4: Prueba de Campo",
            "title": "2. Paso 4: Prueba de Campo",
            "explanation": "Paso 4: Prueba de Campo. Batería de 10 preguntas tipo Saber 11 diseñadas bajo el Modelo Centrado en Evidencias (MCE) del ICFES.",
            "pedagogy": "Simula el tiempo real del examen: 2 minutos por pregunta como en la prueba oficial."
          },
          {
            "num": 3,
            "pageNumber": 15,
            "top": 25.5,
            "left": 10.5,
            "shortLabel": "3. Competencias Evaluadas ICFES",
            "title": "3. Competencias Evaluadas ICFES",
            "explanation": "Matriz oficial ICFES: Naranja = Interpretación y Representación • Azul = Formulación y Ejecución • Verde = Argumentación.",
            "pedagogy": "Cada color en el cuadernillo indica la habilidad cognitiva que el evaluador está midiendo."
          },
          {
            "num": 4,
            "pageNumber": 15,
            "top": 77,
            "left": 17.5,
            "shortLabel": "4. Pregunta 1 • Prueba Saber 11",
            "title": "4. Pregunta 1 • Prueba Saber 11",
            "explanation": "",
            "pedagogy": "La gráfica parabólica crece desde t = 0 hasta alcanzar el vértice en t = 3 s. Por tanto, la opción A es la clave indiscutible."
          },
          {
            "num": 5,
            "pageNumber": 17,
            "top": 29.5,
            "left": 66,
            "shortLabel": "5. Pregunta 10 • Prueba Saber 11",
            "title": "5. Pregunta 10 • Prueba Saber 11",
            "explanation": "",
            "pedagogy": "El patrón sube de $20.000 en $20.000 cada semana: 120, 140, 160, 180 -> Semana 5: $200.000 (Opción B)."
          },
          {
            "num": 6,
            "pageNumber": 17,
            "top": 61,
            "left": 19,
            "shortLabel": "6. Conexión SpaceGec (15 Preguntas Virtuales)",
            "title": "6. Conexión SpaceGec (15 Preguntas Virtuales)",
            "explanation": "Continúa tu entrenamiento: ingresa a la plataforma y responde 15 preguntas virtuales del reto en línea con analítica inmediata.",
            "pedagogy": "La plataforma genera reportes detallados por competencia y componente para tu docente."
          },
          {
            "num": 7,
            "pageNumber": 17,
            "top": 69.5,
            "left": 24,
            "shortLabel": "7. Final de la Misión ... Cargando Datos",
            "title": "7. Final de la Misión ... Cargando Datos",
            "explanation": "Cierre formativo: sintetiza el dominio de modelos de variación lineal y cuadrática, preparando al estudiante para la siguiente misión.",
            "pedagogy": "¡Felicitaciones, comandante! Has completado el ciclo completo de la Misión 1 de Matemáticas."
          }
        ]
      }
    ]
  }
];

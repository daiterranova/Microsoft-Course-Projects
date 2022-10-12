Instructions

2- agarrar el terrario => seleccionarlo desde el DOM

quiero poder agarrar cada planta y posicionarla dentro del terrario

1- agarrar la planta => seleccionarlo desde el DOM
2- agarrar el terrario => seleccionarlo desde el DOM

- mover la planta desde su posicion posicion x/y
- a otra posicion x/y dentro del terrario
- cambiar la posicion anterior a la nueva posicion.
  (necesito saber de donde a donde va)

\*\* Nuevas interacciones

- agregar un boton que me duplique la planta.
- boton "clonar"
- decidir en que posicion la quiero

problemas a resolver

- como hacer que la planta clonada tmb se pueda colocar dentro del terrario => check
- si clono la planta antes de mover la original, esta ultima no se puede draggear. => check

- cuando hay un click en una planta, guardar en algún lugar cuál planta fue
- cuando hay un click en clonar, ir a buscar cuál fue la última planta que se clickeó (lo dejaste guardado en algún lugar), y clonarla

Lo que yo haria es ponerle la misma clase a todas las plantas

luego el script encuentra si algun elemento con la clase X fue presionado,

si es el caso
extraer su .src
y ponerlo en una variable global
y luego al presionar el boton esa variable global es la que se usa para crear el clon.

Y podrias modificar que el script para crear el clon no sea necesario que reciba un html completo
sino que reciba solamente el src que es la unica propiedad que va a cambiar
[5:46 PM]
Y para evitar que haya algun error puedes ponerle una condicional al boton de que si la variable esta nula entonces no haga nada

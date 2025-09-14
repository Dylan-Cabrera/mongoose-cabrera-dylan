//base de datos de una libreria

Modelos:

Members
LibraryCards
Books
Authors
Publishers

Relaciones:

1:1
Members <> LibraryCard
Un socio tiene solo un carnet de libreria, y un carnet pertenece a un solo socio

1:N
Books <> Authors
Un libro puede pertenecer a un solo autor, un autor puede tener varios libros

N:M
Books <> Publishers
Un libro puede ser publicado en varias editoriales, una editorial puede tener varios libros publicados

Documentos embebidos: 

Members: Información de contacto, esta puede ser email, número de telefono, telefono fijo.
Un socio puede tener uno o varios tipos de contactos, no es necesario acceder al contacto de forma individual.

Books: Información de la edición, tipo de encuadernación, cantidad de páginas, idioma.
Una editorial puede tener más de una edición de un libro, no es necesario acceder a estar de forma individual, Y se obtiene toda la información del libro con una sola consulta.

Referencias:

Library_Card -> Member_id
EL carnet pertenece a un socio, un socio tiene un solo carnet.

Books -> Author_id
Un libro no puede existir sin un autor, el autor si puede exitir sin el libro.

Books -> publishers_id
Un libro no puede existir sin una editorial, la editorial si puede existir sin el libro
El mismo libro puede estar publicado en varias editoriales, la referencia no puede estar en publishers porque un editoriar puede tener cientos o miles de libros publicados y seria menos eficiente.


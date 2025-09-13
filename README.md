//base de datos de una libreria

modelos:
Members ( embebido: email, telefono, telefono fijo)
LibraryCards
Books (informacion de edicion como documento embebido)
Authors
Publishers

relaciones:

1:1
Members <> LibraryCard
Un socio tiene solo un carnet de libreria, y un carnet pertenece a un solo socio

1:N
Books <> Authors
Un libro puede pertenecer a un solo autor, un autor puede tener varios libros

N:M
Books <> Publishers
Un libro puede ser publicado en varias editoriales, una editorial puede tener varios libros publicados
/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2204324178")

  // remove field
  collection.fields.removeById("select643686883")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2204324178")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select643686883",
    "maxSelect": 1,
    "name": "estado",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Pendiente",
      "En preparacion",
      "Entregado"
    ]
  }))

  return app.save(collection)
})

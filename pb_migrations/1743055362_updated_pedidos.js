/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4131763008")

  // remove field
  collection.fields.removeById("select643686883")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4131763008")

  // add field
  collection.fields.addAt(1, new Field({
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
      "Listo"
    ]
  }))

  return app.save(collection)
})

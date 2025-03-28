/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2204324178")

  // remove field
  collection.fields.removeById("number4116373918")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2204324178")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number4116373918",
    "max": null,
    "min": null,
    "name": "numero",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})

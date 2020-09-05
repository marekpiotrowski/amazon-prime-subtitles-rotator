const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test2345", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
  await mongoose.connection.db.dropDatabase();
  // we're connected!

  console.log("Connected");

  const elementsSchema = new mongoose.Schema({
    name: String,
    type: String,
  });

  const propertiesSchema = new mongoose.Schema({
    propName: String,
    propType: String,
    unit: String,
  });

  const elementsPropertiesSchema = new mongoose.Schema({
    elementId: { type: mongoose.Schema.Types.ObjectId, ref: "Element" },
    propId: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    value: mongoose.Schema.Types.Mixed,
  });

  const Element = mongoose.model("Element", elementsSchema);
  const Property = mongoose.model("Property", propertiesSchema);
  const ElementProperty = mongoose.model(
    "ElementProperty",
    elementsPropertiesSchema
  );

  const e1 = new Element({
    name: "Iron",
    type: "metal",
  });
  await e1.save();
  const e2 = new Element({
    name: "Aluminium",
    type: "metal",
  });
  await e2.save();

  const p1 = new Property({
    propName: "weight",
    propType: "number",
    unit: null,
  });
  const p2 = new Property({
    propName: "density",
    propType: "number",
    unit: null,
  });

  await p1.save();
  await p2.save();

  const e1p1 = new ElementProperty({
    elementId: e1._id,
    propId: p1._id,
    value: 55.84,
  });
  await e1p1.save();
  const e2p1 = new ElementProperty({
    elementId: e2._id,
    propId: p1._id,
    value: 5.12,
  });
  await e2p1.save();
  const e1p2 = new ElementProperty({
    elementId: e1._id,
    propId: p2._id,
    value: 3.4,
  });
  await e1p2.save();

  var result = await ElementProperty.aggregate([
    { $group: { _id: "$propId", values: { $addToSet: "$value" } } },
    { $project: { min: { $min: "$values" }, max: { $max: "$values" } } },
    {
      $lookup: {
        from: "properties",
        localField: "_id",
        foreignField: "_id",
        as: "prop",
      },
    },
    { $unwind: "$prop" },
  ]).exec();
  console.log(result);
  console.log("========= Properties: ==========");
  await ElementProperty.find(function (err, eps) {
    if (err) return console.error(err);
    console.log(eps);
  });
});

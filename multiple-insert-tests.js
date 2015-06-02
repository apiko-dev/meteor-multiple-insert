Tinytest.add('Multiple insert', function (test) {
  var collection = new Meteor.Collection();
  var ids = collection.insertMultiple(_.range(10));
  test.equal(ids.length, 10);
  test.equal(collection.find().count(), 10);
});

Tinytest.add('Single insert', function (test) {
  var collection = new Meteor.Collection();
  var id = collection.insertMultiple('test value');
  test.isTrue(_.isString(id));
  test.equal(collection.find().count(), 1);
});

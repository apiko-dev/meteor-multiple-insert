Meteor.Collection.prototype.insertMultiple = function () {
  var inserted = [];
  if (arguments.length && _.isArray(arguments[0])) {
    var collection = this;
    _.each(arguments[0], function (item) {
      var insertedItem = collection.insert(item);
      inserted.push(insertedItem);
    })
  } else {
    inserted = this.insert.apply(this, arguments);
  }
  return inserted;
};
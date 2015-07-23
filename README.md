# meteor-multiple-insert

Adding an array object to the collection.

Made by [![Professional Meteor Development Studio](http://s30.postimg.org/jfno1g71p/jss_xs.png)](https://jssolutionsdev.com) - [Professional Meteor Development Company](https://jssolutionsdev.com)

# Usage

Add this package to your Meteor project: `meteor add jss:multiple-insert`.

After that you will be able to use `insertMultiple` function.


## collection.insertMultiple

`collection.insertMultiple(docs, [callback])` — Insert documents in the collection. Returns an array of their IDs. If you pass `Object` as the first argument, then `insertMultiple` will act in the same way as `collection.insert`.

Arguments:
- `docs`(`Array` or `Object`) — Documents or the single document to insert. May not yet have an `_id` attribute, in which case Meteor will generate for you.
- [`callback`(`Function`)] — Optional. If present, called with an error object as the first argument and, if no error, the `_id` as the second.

# License
The `meteor-multiple-insert` project is under MIT license.

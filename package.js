Package.describe({
  name: 'jss:multiple-insert',
  version: '0.0.1',
  summary: 'Adding an array object to the collection.',
  git: 'https://github.com/JSSolutions/meteor-multiple-insert'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('underscore');
  api.addFiles('multiple-insert.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('underscore');
  api.use('jss:multiple-insert');
  api.addFiles('multiple-insert-tests.js');
});

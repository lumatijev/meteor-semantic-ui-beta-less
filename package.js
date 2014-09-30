Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.addFiles('lumatijev:semantic-ui-beta.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lumatijev:semantic-ui-beta');
  api.addFiles('lumatijev:semantic-ui-beta-tests.js');
});

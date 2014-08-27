Package.describe({
  summary: "Wrapper around npm package : googleapis",
  version: "1.0.10",
  git: "https://github.com/productiveme/meteor-googleapis.git"
});

Npm.depends( {
	"googleapis": "1.0.10"
} );

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files("googleapis.js", "server");
  if(api.export) api.export('googleapis');
});
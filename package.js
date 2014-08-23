Package.describe({
  summary: "Wrapper around npm package googleapis - Google APIs Client Library for Node.js"
});

Npm.depends( {
	"googleapis": "1.0.10"
} );

Package.on_use(function (api, where) {
  api.add_files("googleapis.js", "server");
	if(api.export) api.export('googleapis');
});
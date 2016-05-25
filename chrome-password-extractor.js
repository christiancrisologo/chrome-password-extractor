// COPY THIS PART TO YOUR CONSOLE
var decryptedRow = "<style>th,td,tr{border: 1px solid gray;}table{width:100%;}th{background-color: green;color:white}</style>";
var _headers = ["HOSTNAME", "USERNAME", "PASSWORD", "ORIGIN","IS SECURE"];
var pm = PasswordManager.getInstance();
var model = pm.savedPasswordsList_.dataModel;
var pl = pm.savedPasswordsList_;
for (i = 0; i < model.length; i++) { PasswordManager.requestShowPassword(i); };
var insertRow = function (item,tag) {
    tag = tag || 'td';
    decryptedRow += '<'+tag+'>' + item + '</'+tag+'>';
}
decryptedRow += '<table ><tr>';
for (i = 0; i < _headers.length; i++) { insertRow(_headers[i],'th'); }
decryptedRow += '</tr>';
var timer = setTimeout(function () {
    for (i = 0; i < model.length; i++) {
        var item = pl.getListItemByIndex(i);
        decryptedRow += '<tr>';
        insertRow(model.array_[i].shownUrl);
        insertRow(model.array_[i].username);
        insertRow(item.childNodes[0].childNodes[2].childNodes[0].value);
        insertRow(model.array_[i].origin);
        insertRow(model.array_[i].isSecure);
        decryptedRow += '</tr>';
    };
    var newWindow = window.open("", "Chrome Password");
    newWindow.document.write(decryptedRow);
}, 500);
//END COPY

//this is originally from https://gist.github.com/beaverb1ll/3a0247b960841f44f319
// just done a little modification for my own preference
// chrome://settings/passwords
var decryptedRow="";
var pm = PasswordManager.getInstance();
var model = pm.savedPasswordsList_.dataModel;
var pl = pm.savedPasswordsList_;
for(i=0;i<model.length;i++){
  PasswordManager.requestShowPassword(i);
};
setTimeout(function(){
  decryptedRow += '"hostname","username","password","formSubmitURL","httpRealm","usernameField","passwordField"';
  for(i=0; i<model.length; i++){
    var item = pl.getListItemByIndex(i);
    decryptedRow += '<br/>"http://'+model.array_[i].shownUrl+'","'+model.array_[i].username+'","'+item.childNodes[0].childNodes[2].childNodes[0].value+'","http://'+model.array_[i].origin+'"," "," "," "';
  };

var newWindow = window.open("", "MsgWindow");
newWindow.document.write(decryptedRow);
}
,300);
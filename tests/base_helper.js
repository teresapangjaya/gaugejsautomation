var baseHelper = {
    config              : {},
    users               : {},
    init                : function(){
        var fs      = require('fs');
        this.config = JSON.parse(fs.readFileSync('./config/config.json').toString());
        this.users  = JSON.parse(fs.readFileSync('./config/user.json').toString());
    },
    getValue            : function(inputValue){
        if (inputValue.indexOf('<') > -1 && inputValue.indexOf('>') > -1){
            return this.config[inputValue.replace("<", "").replace(">", "")];
        }
        return inputValue;
    },
    getEmailByRole      : function(role){
        return this.users[role].username;
    },
    getPasswordByRole   : function(role){
        return this.users[role].password;
    },
    getPasswordByUser   : function(username){
        for(var index in this.users){
            var userLogin = this.users[index];
            if(userLogin.username == username){
                return userLogin.password;
            }
        }
    }
};
baseHelper.init();
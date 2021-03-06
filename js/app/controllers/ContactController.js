function ContactController() {
    this.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    this.removeContact = function (index) {
        this.contacts.splice(index, 1);
    }

    this.addContact = function(name, phone){
      this.contacts.push({
          name: name,
          phone: phone
      });
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);

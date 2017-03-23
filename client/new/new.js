Template.new.events({

    'submit form' : function(event, template) {
        event.preventDefault();
        let input = $('#task');
        let name = input.val();

        //Tasks.insert({name : name, date : new Date()});
        Meteor.call('add', {name : name, user : this.userId});
        input.val('');
    }

});
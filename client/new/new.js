Template.new.events({

    'submit form' : (event, template) => {
        event.preventDefault();
        let input = $('#task');
        let name = input.val();

        Tasks.insert({name : name, date : new Date()});
        input.val('');
    }

});
Template.list.helpers({

    tasks : () => {
        return Tasks.find({});
    },

    formatDate : () => {
        return moment(this.date).format('DD/MM/YYYY HH:mm');
    }
});

Template.list.events({
    
    'click button' : function (event, template) {
        let task = this;
        //Tasks.remove({ _id : task._id });
        Meteor.call('remove', task._id);
    }

});
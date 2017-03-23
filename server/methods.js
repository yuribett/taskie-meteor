Meteor.methods({

    add : function (task) {
        Tasks.insert({name : task.name, date : new Date(), user : this.userId});
    },

    remove : function (id) {
        Tasks.remove({_id : id, user : this.userId});
    }

});
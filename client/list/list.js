Template.list.helpers({

    tasks : () => {
        return Tasks.find({});
    },

    formatDate : () => {
        return moment(this.date).format('DD/MM/YYYY HH:mm');
    }
});
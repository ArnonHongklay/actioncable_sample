// ActionCable = require('actioncable')
this.App || (this.App = {});
App.cable = ActionCable.createConsumer('ws://api.clubloot.local:5000/cable')

App.announcement = cable.subscriptions.create('AnnouncementChannel', {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    // return alert(data['message']);
    console.log(data['message']);
    // $('.sameheight-item').html(data['message']);
  },
  speak: function(publish, description) {
    return this.perform('speak', {
      publish: publish,
      description: description
    });
  },
  getAnnouncement: function(data) {
    return this.perform('get_announcement', {
      token: data
    })
  }
});

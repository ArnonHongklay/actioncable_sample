// ActionCable = require('actioncable')
this.App || (this.App = {});
App.cable = ActionCable.createConsumer('ws://api.clubloot.com/cable')

App.announcement = cable.subscriptions.create('AnnouncementChannel', {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    console.log(data['message']);
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

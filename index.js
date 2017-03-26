// ActionCable = require('actioncable')
this.App || (this.App = {});
App.cable = ActionCable.createConsumer('ws://api.clubloot.com/cable')

App.announcement = App.cable.subscriptions.create('AnnouncementChannel', {
  connected: function() {
    return this.getAnnouncement("xxx");
  },
  disconnected: function() {},
  received: function(data) {
    console.log(data);
  },
  getAnnouncement: function(data) {
    return this.perform('get_announcement', { token: data });
  },
  speak: function(publish, description) {
    return this.perform('speak', {
      publish: publish,
      description: description
    });
  }
});

App.contest = App.cable.subscriptions.create("ContestChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    console.log(data);
  },
  // show: function(message) {
  //   return this.perform(data);
  // }
  speak: function(message) {
    return this.perform('speak', {
      message: message
    });
  }
});

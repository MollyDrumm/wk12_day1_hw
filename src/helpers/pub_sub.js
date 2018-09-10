const PubSub = {
  publish: function(channel, payload){
    console.log(`published on ${channel} payload ${payload}`);
    const event = new CustomEvent( channel, { detail: payload });
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback){
    document.addEventListener(channel, callback)
    console.log(`subscibed to ${channel}`);
  }
}

module.exports = PubSub;

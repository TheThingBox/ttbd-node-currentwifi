module.exports = function(RED) {
  var wifi_util = require('ttbd-wifi-util');

  function CurrentWifiNode(n) {
    RED.nodes.createNode(this,n);
    var node = this;

    this.on("input", function(msg) {
      wifi_util.getWlan0(function(currentwifi){
        msg.payload = currentwifi;
        node.send(msg);
      });
    });
  }
  RED.nodes.registerType("currentwifi", CurrentWifiNode);
}

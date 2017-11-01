let watchId;
const onSuccess = function(position) {
  const box = document.getElementById('box');
  const message = '<div class="x"><div class="y">緯度</div><div class="z">' + position.coords.latitude  + '</div></div>' +
                  '<div class="x"><div class="y">経度</div><div class="z">' + position.coords.longitude + '</div></div>' +
                  '<div class="x"><div class="y">高度</div><div class="z">' + position.coords.altitude  + '</div></div>' +
                  '<div class="x"><div class="y">精度</div><div class="z">' + position.coords.accuracy  + '</div></div>' +
                  '<div class="x"><div class="y">時刻</div><div class="z">' + position.timestamp        + '</div></div>';
  box.innerHTML = message;
};
const onError = function(error) {};
const gpsOnFunction = function() {
  watchId = navigator.geolocation.watchPosition(
    onSuccess,
    onError,
    {
      maximumAge: 2000,
      timeout: 5000,
      enableHighAccuracy: true
    },
  );
};
const gpsOffFunction = function() {
  navigator.geolocation.clearWatch(watchID);
};
const app = {
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    this.receivedEvent('deviceready');
  },
  receivedEvent: function(id) {
    const gpsOn = document.getElementById('gpsOn');
    const gpsOff = document.getElementById('gpsOff');
    gpsOn.addEventListener('click', gpsOnFunction, false);
    gpsOff.addEventListener('click', gpsOffFunction, false);
  },
};
app.initialize();

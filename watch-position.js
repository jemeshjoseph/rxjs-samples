let id;
const messageDiv = document.querySelector('#message');
const target = {
  latitude: 0,
  longitude: 0,
};

const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  console.log('Position: ', pos);
  var crd = pos.coords;
  messageDiv.textContent = `Current postion: Latitude: ${crd.latitude}, Longitude: ${crd.longitude}`;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    // console.log('Congratulations, you reached the target');
    messageDiv.textContent = 'Congratulations, you reached the target';
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

function startWatchPosition() {
  if ('geolocation' in navigator) {
    id = navigator.geolocation.watchPosition(success, error, options);
  } else {
    messageDiv.textContent = 'Geolocation not supported in this browser.';
  }
}

startWatchPosition();

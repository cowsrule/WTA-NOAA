javascript:
(function() {
    (function() {
        var latlon = document.getElementById('trailhead-map').children[1];
        var lat = latlon.children[0].innerText;
        var lon = latlon.children[1].innerText;
        var url = 'http://forecast.weather.gov/MapClick.php?lon=' + lon + '&lat=' + lat;
        window.open(url, '_blank');
    })();
})();

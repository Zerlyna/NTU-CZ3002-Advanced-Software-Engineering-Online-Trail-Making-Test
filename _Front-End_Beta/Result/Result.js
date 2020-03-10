document.addEventListener('DOMContentLoaded', function() {
    var chart = window.chart = new EasyPieChart(document.querySelector('span'), {
        easing: 'easeOutElastic',
        delay: 3000,
        barColor: '#ff0000',
        trackColor: '#f10000',
        scaleColor: false,
        lineWidth: 20,
        trackWidth: 16,
        lineCap: 'butt',
        onStep: function(from, to, percent) {
            this.el.children[0].innerHTML = Math.round(percent);
        }
    });

    document.querySelector('.js_update').addEventListener('click', function(e) {
        chart.update(Math.random()*100);
    });

});
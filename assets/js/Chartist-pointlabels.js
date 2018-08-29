﻿Chartist.plugins = Chartist.plugins || {};
Chartist.plugins.ctBarLabels = function (options) {

    //options = Chartist.extend({}, defaultOptions, options);

    return function ctBarLabels(chart) {
        if (chart instanceof Chartist.Bar) {
            chart.on('draw', function (data) {
                var barHorizontalCenter, barVerticalCenter, label, value;
                if (data.type === "bar") {
                    barHorizontalCenter = data.x1 ;
                    barVerticalCenter = data.y1 + (data.element.height() * -1) - 10;
                    value = data.element.attr('ct:value');
                    if (value !== '0') {
                        label = new Chartist.Svg('text');
                        label.text('$'+value);
                        label.addClass("ct-barlabel");
                        label.attr({
                            x: barHorizontalCenter,

                            y: barVerticalCenter,
                            'text-anchor': 'middle'
                        });
                        return data.group.append(label);
                    }
                }
            });
        }
    };
};
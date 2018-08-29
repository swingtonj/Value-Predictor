


demo = {

    initDashboardPageCharts: function () {

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataProductivityChart = {
            labels: ['C-level executive', 'IT personnel ', 'Organizational'],
            series: [
                {
                    name: 'X86',
                    data: [179.2, 877.8, 897]
                }, {
                    name: 'Z14',
                    data: [216, 997.5, 975]}
            ]
        };
        dataCostsChart = {
            labels: ['Software Acquisition', 'System Acquisition', 'Operations'],
            series: [
                {
                    name: 'X86',
                    data: [957, 1682.2, 546.1]
                }, {
                    name: 'Z14',
                    data: [668.9, 399.4, 205.4]
                }
            ]
        };
        dataRevenuesProfitChart = {
            labels: ['End-to-End Security', 'Improved governance and compliance', 'Reduced downtime'],
            series: [
                {
                    name: 'X86',
                    data: [1512, 840, 186.4]
                }, {
                    name: 'Z14',
                    data: [1680, 1064, 207.2]
                }
            ]
        };
        dataRisksChart = {
            labels: ['Improved Revenue', 'Faster-time-to-value', 'Trusted Experiences'],
            series: [
                {
                    name: 'X86',
                    data: [846.8, 801, 546.4]
                }, {
                    name: 'Z14',
                    data: [1004.5, 885, 764.9]
                }
            ]
        };
        dataRoiChart = {
            labels: ['X86', 'Z14'],
            series: 
                [56, 363]
        };
        dataPaybackChart = {
            labels: ['X86', 'Z14'],
            series: 
                [5.88, 17.15]
        };

        optionsChart = {
            chartPadding: {
                top: 30,
                right: 0,
                bottom: 20,
                left: 0
            },
            seriesBarDistance: 40,
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            
            axisY: {
                labelInterpolationFnc: function (value) {
                    return '$' + value
                }, offset: 50
            },
            plugins: [
                Chartist.plugins.legend({
                    position: 'top'
                })
                ,
                Chartist.plugins.ctBarLabels()
                //Chartist.plugins.ctPointLabels({
                //    textAnchor: 'middle', labelOffset: {
                //        x: 0,
                //        y: -10
                //    },
                //    labelInterpolationFnc: function (value) { return '$' + value.toFixed(2) }
                //})
            ]
        };

        optionsChartdistributed = {
            chartPadding: {
                top: 50,
                right: 0,
                bottom: 0,
                left: 0
            },
            seriesBarDistance: 50,
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            distributeSeries: true,
            axisY: {
                labelInterpolationFnc: function (value) {
                    return '$' + value
                },  offset: 50
            },
            plugins: [
                Chartist.plugins.ctBarLabels()
                //Chartist.plugins.ctPointLabels({
                //    textAnchor: 'middle', labelOffset: {
                //        x: 0,
                //        y: -10
                //    },
                //    labelInterpolationFnc: function (value) { return '$' + value.toFixed(2) }
                //})
            ]
        };


        var divProductivityChart = new Chartist.Bar('#divProductivityChart', dataProductivityChart, optionsChart);
        var divCostsChart = new Chartist.Bar('#divCostsChart', dataCostsChart, optionsChart);
        var divRevenuesProfitChart = new Chartist.Bar('#divRevenuesProfitChart', dataRevenuesProfitChart, optionsChart);
        var divRisksChart = new Chartist.Bar('#divRisksChart', dataRisksChart, optionsChart);

        var divRoiChart = new Chartist.Bar('#divRoiChart', dataRoiChart, optionsChartdistributed);
        var divPaybackChart = new Chartist.Bar('#divPaybackChart', dataPaybackChart, optionsChartdistributed);



        md.startAnimationForLineChart(divProductivityChart);
        md.startAnimationForLineChart(divCostsChart);
        md.startAnimationForLineChart(divRevenuesProfitChart);
        md.startAnimationForLineChart(divRisksChart);
        md.startAnimationForLineChart(divRoiChart);
        md.startAnimationForLineChart(divPaybackChart);

    }

}
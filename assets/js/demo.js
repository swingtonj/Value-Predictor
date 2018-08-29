demo = {

    initDashboardPageCharts: function () {

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataProductivityChart = {
            labels: ['C-level executive', 'IT personnel ', 'Organizational'],
            series: [
                [12, 17, 7],
                [10, 15, 5]
            ]
        };
        dataCostsChart = {
            labels: ['Software Acquisition', 'System Acquisition', 'Operations'],
            series: [
                [12, 17, 7],
                [10, 15, 5]
            ]
        };
        dataRevenuesProfitChart = {
            labels: ['End-to-End Security', 'Improved governance and compliance', 'Reduced downtime'],
            series: [
                [12, 17, 7],
                [10, 15, 5]
            ]
        };
        dataRisksChart = {
            labels: ['Improved Revenue', 'Faster-time-to-value', 'Trusted Experiences'],
            series: [
                [12, 17, 7],
                [10, 15, 5]
            ]
        };
        dataRoiChart = {
            labels: ['Z14', 'X86'],
            series: 
                [12, 17]
        };
        dataPaybackChart = {
            labels: ['Z14', 'X86'],
            series: 
                [12, 17]
        };

        optionsChart = {
            low: 0,
            high: 25,
            chartPadding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            seriesBarDistance: 50,
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),

            axisY: {
                labelInterpolationFnc: function (value) {
                    return '$' + value
                },
                scaleMinSpace: 15
            }
        };

        optionsChartdistributed = {
            low: 0,
            high: 25,
            chartPadding: {
                top: 0,
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
                },
                scaleMinSpace: 15
            }
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
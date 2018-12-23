// Sales Dashboard

// Class definition
var KDashboard = function() {

    var SalesStatisticsChart = function() {
        if (!document.getElementById('sales-dashboard-monthly_sales')) {
            return;
        }

        var MONTHS = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            datasets: [{
                label: 'Actual',
                backgroundColor: color(KApp.getStateColor('brand')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [17970, 30700, 33627, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                label: 'Forecast',
                backgroundColor: color(KApp.getBaseColor('shape', 1)).alpha(1).rgbString(),
                borderWidth: 0,
                data: [9500, 21500, 34000, 37000, 43000, 46500, 50000, 56500, 59500, 66000, 69000, 72000]
            }]
        };

        var ctx = document.getElementById('sales-dashboard-monthly_sales').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 80000,                            
                            stepSize: 10000,
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }

    var SalesDashboard_Profit = function() {
        if (!document.getElementById('sales-dashboard-profit')) {
            return;
        }

        var max = 30000;
        var color = KApp.getStateColor('brand');
        var ctx = document.getElementById('sales-dashboard-profit').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [9970, 10856, 13219];

        var mainConfig = {
            type: 'line',
            data: {
                labels: ['Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Profit',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var SalesDashboard_Revenue = function() {
        if (!document.getElementById('sales-dashboard-revenue')) {
            return;
        }

        var max = 80000;
        var color = KApp.getStateColor('success');
        var ctx = document.getElementById('sales-dashboard-revenue').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [17970, 30707, 30455, 37476];

        var mainConfig = {
            type: 'line',
            data: {
                labels: ['Oct', 'Nov', 'Dec', 'Last 30 Days'],
                datasets: [{
                    label: 'Revenue',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var SalesDashboard_Cash = function() {
        if (!document.getElementById('sales-dashboard-cash')) {
            return;
        }

        var max = 250000;
        var color = KApp.getStateColor('danger');
        var ctx = document.getElementById('sales-dashboard-cash').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [82300, 54900, 61500];

        var mainConfig = {
            type: 'line',
            data: {
                labels: ['Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Cash',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var SalesDashboard_ClientHours = function() {
        if (!document.getElementById('sales-dashboard-client_hours')) {
            return;
        }

        // Main chart
        var max = 800;
        var color = KApp.getStateColor('focus');
        var ctx = document.getElementById('sales-dashboard-client_hours').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [154, 252, 240, 301];

        var mainConfig = {
            type: 'line',
            data: {
                labels: ['Oct', 'Nov', 'Dec', 'Last 30 Days'],
                datasets: [{
                    label: 'Client Hours',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var SalesDashboard_Utilization = function() {
        if (!document.getElementById('sales-dashboard-utilization')) {
            return;
        }

        // Main chart
        var max = 100;
        var color = KApp.getStateColor('warning');
        var ctx = document.getElementById('sales-dashboard-utilization').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [4, 6.6, 6.3, 7.9];

        var mainConfig = {
            type: 'line',
            data: {
                labels: ['Oct', 'Nov', 'Dec', 'Last 30 Days'],
                datasets: [{
                    label: 'Client Hours',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var SalesDashboard_FixedCosts = function() {
        if (!document.getElementById('sales-dashboard-fixed_cost')) {
            return;
        }

        // Main chart
        var max = 100;
        var color = KApp.getStateColor('info');
        var ctx = document.getElementById('sales-dashboard-fixed_cost').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [6.5, 11, 18.6, 20];

        var mainConfig = {
            type: 'line',
            data: {
                labels: ['Oct', 'Nov', 'Dec', 'Last 30 Days'],
                datasets: [{
                    label: 'Client Hours',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var RevenueByPractitionerChart_October = function() {
        if (!document.getElementById('sales-dashboard-sales_by_person-oct')) {
            return;
        }

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Karen (46%)', 'Cass (36%)', 'Felix (16%)', 'Mai (2%)'],
            datasets: [{
                label: 'Sales',
                backgroundColor: color(KApp.getStateColor('brand')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [8317, 6413, 2880, 360],
                borderColor: KApp.getStateColor('focus'),
                borderWidth: 3,
                backgroundColor: color(KApp.getStateColor('focus')).alpha(0.5).rgbString(),
                //pointBackgroundColor: KApp.getStateColor('brand'),
                fill: true
            }]
        };

        var ctx = document.getElementById('sales-dashboard-sales_by_person-oct').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 10000,                            
                            stepSize: 1000,
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: { 
                        radius: 0 
                    }
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }

    var RevenueByPractitionerChart_November = function() {
        if (!document.getElementById('sales-dashboard-sales_by_person-nov')) {
            return;
        }

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Karen (42%)', 'Cass (40%)', 'Felix (12%)', 'Mai (6%)'],
            datasets: [{
                label: 'Sales',
                backgroundColor: color(KApp.getStateColor('brand')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [12783, 12402, 3833, 1690],
                borderColor: KApp.getStateColor('focus'),
                borderWidth: 3,
                backgroundColor: color(KApp.getStateColor('focus')).alpha(0.5).rgbString(),
                //pointBackgroundColor: KApp.getStateColor('brand'),
                fill: true
            }]
        };

        var ctx = document.getElementById('sales-dashboard-sales_by_person-nov').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 15000,                            
                            stepSize: 1000,
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: { 
                        radius: 0 
                    }
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }

    var RevenueByPractitionerChart_December = function() {
        if (!document.getElementById('sales-dashboard-sales_by_person-dec')) {
            return;
        }

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Karen (36%)', 'Cass (35%)', 'Felix (16%)', 'Mai (3%)', 'Daniel (2%)', 'Phil (5%)', 'Eric (3%)'],
            datasets: [{
                label: 'Sales',
                backgroundColor: color(KApp.getStateColor('brand')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [12014, 11637, 5328, 1140, 780, 1797, 932],
                borderColor: KApp.getStateColor('focus'),
                borderWidth: 3,
                backgroundColor: color(KApp.getStateColor('focus')).alpha(0.5).rgbString(),
                //pointBackgroundColor: KApp.getStateColor('brand'),
                fill: true
            }]
        };

        var ctx = document.getElementById('sales-dashboard-sales_by_person-dec').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 15000,                            
                            stepSize: 1000,
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: { 
                        radius: 0 
                    }
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }

    var RevenueByPractitionerChart_30Days = function() {
        if (!document.getElementById('sales-dashboard-sales_by_person-30_days')) {
            return;
        }

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Karen (36%)', 'Cass (37%)', 'Felix (16%)', 'Mai (5%)', 'Daniel (2%)', 'Phil (4%)', 'Eric (1%)'],
            datasets: [{
                label: 'Sales',
                backgroundColor: color(KApp.getStateColor('brand')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [13498, 13953, 5870, 1710, 570, 1689, 492],
                borderColor: KApp.getStateColor('focus'),
                borderWidth: 3,
                backgroundColor: color(KApp.getStateColor('focus')).alpha(0.5).rgbString(),
                //pointBackgroundColor: KApp.getStateColor('brand'),
                fill: true
            }]
        };

        var ctx = document.getElementById('sales-dashboard-sales_by_person-30_days').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 15000,                            
                            stepSize: 1000,
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: { 
                        radius: 0 
                    }
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }

    var RevenueByPractitionerChart_LastWeek = function() {
        if (!document.getElementById('sales-dashboard-sales_by_person-last_week')) {
            return;
        }

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Karen (24%)', 'Cass (38%)', 'Felix (19%)', 'Mai (4%)', 'Daniel (5%)', 'Phil (8%)', 'Eric (3%)'],
            datasets: [{
                label: 'Sales',
                backgroundColor: color(KApp.getStateColor('brand')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [1921, 2970, 1500, 320, 360, 605, 203],
                borderColor: KApp.getStateColor('focus'),
                borderWidth: 3,
                backgroundColor: color(KApp.getStateColor('focus')).alpha(0.5).rgbString(),
                //pointBackgroundColor: KApp.getStateColor('brand'),
                fill: true
            }]
        };

        var ctx = document.getElementById('sales-dashboard-sales_by_person-last_week').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 5000,                            
                            stepSize: 500,
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: { 
                        radius: 0 
                    }
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }

    var RevenueByPractitionerChart_Last7 = function() {
        if (!document.getElementById('sales-dashboard-sales_by_person-last_7')) {
            return;
        }

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Karen (31%)', 'Cass (35%)', 'Felix (14%)', 'Mai (4%)', 'Daniel (2%)', 'Phil (11%)', 'Eric (3%)'],
            datasets: [{
                label: 'Sales',
                backgroundColor: color(KApp.getStateColor('brand')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [3430, 3862, 1603, 490, 210, 1237, 288],
                borderColor: KApp.getStateColor('focus'),
                borderWidth: 3,
                backgroundColor: color(KApp.getStateColor('focus')).alpha(0.5).rgbString(),
                //pointBackgroundColor: KApp.getStateColor('brand'),
                fill: true
            }]
        };

        var ctx = document.getElementById('sales-dashboard-sales_by_person-last_7').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 5000,                            
                            stepSize: 500,
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: { 
                        radius: 0 
                    }
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }

    var RevenueByPractitionerChart_YTD = function() {
        if (!document.getElementById('sales-dashboard-sales_by_person-ytd')) {
            return;
        }

        var color = Chart.helpers.color;
        var barChartData = {
            labels: ['Karen (36%)', 'Cass (35%)', 'Felix (16%)', 'Mai (3%)', 'Daniel (2%)', 'Phil (5%)', 'Eric (3%)'],
            datasets: [{
                label: 'Sales',
                backgroundColor: color(KApp.getStateColor('brand')).alpha(1).rgbString(),
                borderWidth: 0,
                data: [12014, 11637, 5328, 1140, 780, 1797, 932],
                borderColor: KApp.getStateColor('focus'),
                borderWidth: 3,
                backgroundColor: color(KApp.getStateColor('focus')).alpha(0.5).rgbString(),
                //pointBackgroundColor: KApp.getStateColor('brand'),
                fill: true
            }]
        };

        var ctx = document.getElementById('sales-dashboard-sales_by_person-lytd').getContext('2d');
        var myBar = new Chart(ctx, {
            type: 'bar',
            data: barChartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: false,
                scales: {
                    xAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        gridLines: false,
                        ticks: {
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }],
                    yAxes: [{
                        categoryPercentage: 0.35,
                        barPercentage: 0.70,
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: KApp.getBaseColor('shape', 2),
                            drawBorder: false,
                            offsetGridLines: false,
                            drawTicks: false,
                            borderDash: [3, 4],
                            zeroLineWidth: 1,
                            zeroLineColor: KApp.getBaseColor('shape', 2),
                            zeroLineBorderDash: [3, 4]
                        },
                        ticks: {
                            max: 15000,                            
                            stepSize: 1000,
                            display: true,
                            beginAtZero: true,
                            fontColor: KApp.getBaseColor('shape', 3),
                            fontSize: 13,
                            padding: 10
                        }
                    }]
                },
                title: {
                    display: false
                },
                hover: {
                    mode: 'index'
                },
                elements: {
                    line: {
                        tension: 0.5
                    },
                    point: { 
                        radius: 0 
                    }
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 5,
                        bottom: 5
                    }
                }
            }
        });
    }


    // ASSOCIATE CHARTS

    var AssociateSales_Karen = function() {
        if (!document.getElementById('associate-sales-karen')) {
            return;
        }

        var max = 20000;
        var color = KApp.getStateColor('brand');
        var ctx = document.getElementById('associate-sales-karen').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [8317, 12783, 12014, 13498];

        var mainConfig = {
            type: 'bar',
            data: {
                labels: ['Oct', 'Nov', 'Dec', "Last 30 Days"],
                datasets: [{
                    label: 'Sales',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var AssociateSales_Cass = function() {
        if (!document.getElementById('associate-sales-cass')) {
            return;
        }

        var max = 20000;
        var color = KApp.getStateColor('success');
        var ctx = document.getElementById('associate-sales-cass').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [6413, 12402, 11637, 13953];

        var mainConfig = {
            type: 'bar',
            data: {
                labels: ['Oct', 'Nov', 'Dec', "Last 30 Days"],
                datasets: [{
                    label: 'Sales',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var AssociateSales_Felix = function() {
        if (!document.getElementById('associate-sales-felix')) {
            return;
        }

        var max = 20000;
        var color = KApp.getStateColor('danger');
        var ctx = document.getElementById('associate-sales-felix').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [2880, 3833, 5328, 5870];

        var mainConfig = {
            type: 'bar',
            data: {
                labels: ['Oct', 'Nov', 'Dec', "Last 30 Days"],
                datasets: [{
                    label: 'Sales',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var AssociateSales_Mai = function() {
        if (!document.getElementById('associate-sales-mai')) {
            return;
        }

        var max = 20000;
        var color = KApp.getStateColor('focus');
        var ctx = document.getElementById('associate-sales-mai').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [360, 1690, 1140, 1710];

        var mainConfig = {
            type: 'bar',
            data: {
                labels: ['Oct', 'Nov', 'Dec', "Last 30 Days"],
                datasets: [{
                    label: 'Sales',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var AssociateSales_Daniel = function() {
        if (!document.getElementById('associate-sales-daniel')) {
            return;
        }

        var max = 20000;
        var color = KApp.getStateColor('warning');
        var ctx = document.getElementById('associate-sales-daniel').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [0, 0, 780, 570];

        var mainConfig = {
            type: 'bar',
            data: {
                labels: ['Oct', 'Nov', 'Dec', "Last 30 Days"],
                datasets: [{
                    label: 'Sales',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var AssociateSales_Phil = function() {
        if (!document.getElementById('associate-sales-phil')) {
            return;
        }

        var max = 20000;
        var color = KApp.getStateColor('info');
        var ctx = document.getElementById('associate-sales-phil').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [0, 0, 1797, 1689];

        var mainConfig = {
            type: 'bar',
            data: {
                labels: ['Oct', 'Nov', 'Dec', "Last 30 Days"],
                datasets: [{
                    label: 'Sales',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    var AssociateSales_Eric = function() {
        if (!document.getElementById('associate-sales-eric')) {
            return;
        }

        var max = 20000;
        var color = KApp.getStateColor('brand');
        var ctx = document.getElementById('associate-sales-eric').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
        gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

        var data = [0, 0, 923, 492];

        var mainConfig = {
            type: 'bar',
            data: {
                labels: ['Oct', 'Nov', 'Dec', "Last 30 Days"],
                datasets: [{
                    label: 'Sales',
                    borderColor: color,
                    borderWidth: 3,
                    backgroundColor: gradient,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: data,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: false,
                    text: 'Stacked Area'
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }],
                    yAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            max: max,
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }

    // DON'T USE

    var mediumCharts = function() {    
        KLib.initMediumChart('sample1', [20, 45, 20, 10, 20, 35, 20, 25, 10, 10], 70, KApp.getStateColor('brand'));
    }

    var latestProductsMiniCharts = function() {
        KLib.initMiniChart($('#k_widget_latest_products_chart_1'), [6, 12, 9, 18, 15, 9, 11, 8], KApp.getStateColor('info'), 2, false, false);
        KLib.initMiniChart($('#k_widget_latest_products_chart_2'), [8, 6, 13, 16, 9, 6, 11, 14], KApp.getStateColor('warning'), 2, false, false);
        KLib.initMiniChart($('#k_widget_latest_products_chart_3'), [8, 6, 13, 16, 9, 6, 11, 14], KApp.getStateColor('warning'), 2, false, false);
        KLib.initMiniChart($('#k_widget_latest_products_chart_4'), [3, 9, 9, 18, 15, 9, 11, 8], KApp.getStateColor('success'), 2, false, false);
        KLib.initMiniChart($('#k_widget_latest_products_chart_5'), [5, 7, 9, 18, 15, 9, 11, 8], KApp.getStateColor('brand'), 2, false, false);
        KLib.initMiniChart($('#k_widget_latest_products_chart_6'), [3, 9, 5, 18, 15, 7, 11, 6], KApp.getStateColor('danger'), 2, false, false);
    }

    var generalStatistics = function() {
        // Mini charts
        KLib.initMiniChart($('#k_widget_general_statistics_chart_1'), [6, 8, 3, 18, 15, 7, 11, 7], KApp.getStateColor('warning'), 2, false, false);
        KLib.initMiniChart($('#k_widget_general_statistics_chart_2'), [8, 6, 9, 18, 15, 7, 11, 16], KApp.getStateColor('brand'), 2, false, false);
        KLib.initMiniChart($('#k_widget_general_statistics_chart_3'), [4, 12, 9, 18, 15, 7, 11, 12], KApp.getStateColor('danger'), 2, false, false);
        KLib.initMiniChart($('#k_widget_general_statistics_chart_4'), [3, 14, 5, 12, 15, 8, 14, 16], KApp.getStateColor('success'), 2, false, false);

        // Main chart
        if (!document.getElementById("k_widget_general_statistics_chart_main")) {
            return;
        }

        var ctx = document.getElementById("k_widget_general_statistics_chart_main").getContext("2d");

        var gradient1 = ctx.createLinearGradient(0, 0, 0, 350);
        gradient1.addColorStop(0, Chart.helpers.color(KApp.getStateColor('brand')).alpha(0.3).rgbString());
        gradient1.addColorStop(1, Chart.helpers.color(KApp.getStateColor('brand')).alpha(0).rgbString());

        var gradient2 = ctx.createLinearGradient(0, 0, 0, 350);
        gradient2.addColorStop(0, Chart.helpers.color(KApp.getStateColor('danger')).alpha(0.3).rgbString());
        gradient2.addColorStop(1, Chart.helpers.color(KApp.getStateColor('danger')).alpha(0).rgbString());

        var mainConfig = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
                datasets: [{
                    label: 'Sales',
                    borderColor: KApp.getStateColor('brand'),
                    borderWidth: 2,
                    backgroundColor: gradient1,
                    pointBackgroundColor: KApp.getStateColor('brand'),
                    data: [30, 60, 25, 7, 5, 15, 30, 20, 15, 10],
                }, {
                    label: 'Orders',
                    borderWidth: 1,
                    borderColor: KApp.getStateColor('danger'),
                    backgroundColor: gradient2,
                    pointBackgroundColor: KApp.getStateColor('danger'),
                    data: [10, 15, 25, 35, 15, 30, 55, 40, 65, 40]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false,
                    text: ''
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        display: true,
                        stacked: false,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        },
                        gridLines: {
                            color: '#eef2f9',
                            drawBorder: false,
                            offsetGridLines: true,
                            drawTicks: false
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        borderWidth: 0,
                        hoverRadius: 0,
                        hoverBorderWidth: 0
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        };

        var chart = new Chart(ctx, mainConfig);

        // Update chart on window resize
        KUtil.addResizeHandler(function() {
            chart.update();
        });
    }
    
    var widgetTechnologiesChart = function() {
        if ($('#k_widget_technologies_chart').length == 0) {
            return;
        }

        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        35, 30, 35
                    ],
                    backgroundColor: [
                        KApp.getBaseColor('shape', 3),
                        KApp.getBaseColor('shape', 4),
                        KApp.getStateColor('brand')
                    ]
                }],
                labels: [
                    'Angular',
                    'CSS',
                    'HTML'
                ]
            },
            options: {
                cutoutPercentage: 75,
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Technology'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                }
            }
        };

        var ctx = document.getElementById('k_widget_technologies_chart').getContext('2d');
        var myDoughnut = new Chart(ctx, config);
    }

    var widgetTechnologiesChart2 = function() {
        if ($('#k_widget_technologies_chart_2').length == 0) {
            return;
        }

        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        35, 30, 35
                    ],
                    backgroundColor: [                                                                 
                        KApp.getStateColor('warning'),                   
                        KApp.getStateColor('brand'),                         
                        KApp.getStateColor('success') 
                    ]
                }],
                labels: [       
                    'CSS',     
                    'Angular',               
                    'HTML'    
                ]
            },
            options: {
                cutoutPercentage: 75,
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Technology'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                tooltips: {
                    enabled: true,
                    intersect: false,
                    mode: 'nearest',
                    bodySpacing: 5,
                    yPadding: 10,
                    xPadding: 10, 
                    caretPadding: 0,
                    displayColors: false,
                    backgroundColor: KApp.getStateColor('brand'),
                    titleFontColor: '#ffffff', 
                    cornerRadius: 4,
                    footerSpacing: 0,
                    titleSpacing: 0
                }
            }
        };

        var ctx = document.getElementById('k_widget_technologies_chart_2').getContext('2d');
        var myDoughnut = new Chart(ctx, config);
    }

    var daterangepickerInit = function() {
        if ($('#k_dashboard_daterangepicker').length == 0) {
            return;
        }

        var picker = $('#k_dashboard_daterangepicker');
        var start = moment();
        var end = moment();

        function cb(start, end, label) {
            var title = '';
            var range = '';

            if ((end - start) < 100 || label == 'Today') {
                title = 'Today:';
                range = start.format('MMM D');
            } else if (label == 'Yesterday') {
                title = 'Yesterday:';
                range = start.format('MMM D');
            } else {
                range = start.format('MMM D') + ' - ' + end.format('MMM D');
            }

            picker.find('#k_dashboard_daterangepicker_date').html(range);
            picker.find('#k_dashboard_daterangepicker_title').html(title);
        }

        picker.daterangepicker({
            direction: KUtil.isRTL(),
            startDate: start,
            endDate: end,
            opens: 'left',
            applyClass: "btn btn-sm btn-primary",
            cancelClass: "btn btn-sm btn-secondary",
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end, '');
    }

    var recentOrdersInit = function() {
        if ($('#k_recent_orders').length === 0) {
            return;
        }

        var datatable = $('#k_recent_orders').KDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: 'https://keenthemes.com/keen/themes/themes/keen/dist/preview/inc/api/datatables/demos/default.php',
                    },
                },
                pageSize: 10,
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true
            },

            // layout definition
            layout: {
                scroll: true,
                footer: false,
                height: 430
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#generalSearch'),
            },

            // columns definition
            columns: [{
                field: 'id',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                selector: {class: 'k-checkbox--solid k-checkbox--brand'},
                textAlign: 'center',
            }, {
                field: 'employee_id',
                title: 'Order ID',
                template: function(row) {
                    return '<span class="k-label-font-color-3 k-font-bold">' + row.employee_id + '</span>';
                },
            }, {
                field: 'name',
                title: 'Customer',
                width: 130,
                template: function(row) {
                    return '<span class="k-label-font-color-3 k-font-bold">' + row.first_name + ' ' + row.last_name + '</span>';
                },
            }, {
                field: 'hire_date',
                title: 'Date',
                type: 'date',
                format: 'MM/DD/YYYY',
            }, {
                field: 'status',
                title: 'Status',
	            autoHide: false,
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': 'Pending',
                            'class': 'brand'
                        },
                        2: {
                            'title': 'Delivered',
                            'class': 'focus'
                        },
                        3: {
                            'title': 'Canceled',
                            'class': 'primary'
                        },
                        4: {
                            'title': 'Success',
                            'class': 'success'
                        },
                        5: {
                            'title': 'Info',
                            'class': 'info'
                        },
                        6: {
                            'title': 'Danger',
                            'class': 'danger'
                        },
                        7: {
                            'title': 'Warning',
                            'class': 'warning'
                        }
                    };
                    return '<span class="k-badge k-badge--' + status[row.status].class + ' k-badge--dot k-badge--md"></span>&nbsp;&nbsp;<span class="k-label-font-color-2 k-font-bold">' +
                        status[row.type].title + '</span>';
                }
            }, {
                field: 'Actions',
                title: 'Actions',
                sortable: false,
                width: 80,
                overflow: 'visible',
                textAlign: 'center',
	            autoHide: false,
                template: function() {
                    return '\
                        <div class="dropdown" >\
                            <a href="#" class="btn btn-clean btn-icon btn-sm btn-icon-md" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
                            <div class="dropdown-menu dropdown-menu-right">\
                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
                            </div>\
                        </div>\
                        <a href="#" class="btn btn-clean btn-icon btn-sm btn-icon-md" title="Edit details">\
                            <i class="la la-edit"></i>\
                        </a>\
                    ';
                }
            }]
        });

        $('#k_form_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'status');
        });

        $('#k_form_type').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'type');
        });

        $('#k_form_status,#k_form_type').selectpicker();

        // Reload datatable layout on aside menu toggle
        if (KLayout.getAsideSecondaryToggler && KLayout.getAsideSecondaryToggler()) {
            KLayout.getAsideSecondaryToggler().on('toggle', function() {
                datatable.redraw();
            });
        }

        // Fix datatable layout in tabs
        datatable.closest('.k-content__body').find('[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            datatable.redraw();
        });
    };

    return {
        init: function() {

            // SALES DASHBOARD
            SalesStatisticsChart();

            SalesDashboard_Profit();
            SalesDashboard_Revenue();
            SalesDashboard_Cash();
            SalesDashboard_ClientHours();
            SalesDashboard_Utilization();
            SalesDashboard_FixedCosts();

            RevenueByPractitionerChart_October();
            RevenueByPractitionerChart_November();
            RevenueByPractitionerChart_December();
            RevenueByPractitionerChart_30Days();
            RevenueByPractitionerChart_LastWeek();
            RevenueByPractitionerChart_Last7();
            RevenueByPractitionerChart_YTD();

            // ASSOCIATE DASHBOARD

            AssociateSales_Karen();
            AssociateSales_Cass();
            AssociateSales_Felix();
            AssociateSales_Mai();
            AssociateSales_Daniel();
            AssociateSales_Phil();
            AssociateSales_Eric();

            // DON'T USE

            mediumCharts();

            latestProductsMiniCharts();
            daterangepickerInit();
            generalStatistics();
            recentOrdersInit();

            widgetTechnologiesChart();
            widgetTechnologiesChart2()

        }
    };
}();

// Class initialization
jQuery(document).ready(function() {
    KDashboard.init();
});
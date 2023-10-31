// Get the canvas element
var ctx = document.getElementById('myLineChart').getContext('2d');

// Create the chart
var myLineChart = new Chart(ctx, {
    type: 'line', // Set the type of chart to line
    data: {
        labels: Array.from({ length: 24 }, (_, i) => {
            if (i === 0) {
                return '12 AM'; // Midnight
            } else if (i < 12) {
                return `${i} AM`; // Morning hours
            } else if (i === 12) {
                return '12 PM'; // Noon
            } else {
                return `${i - 12} PM`; // Afternoon/evening hours
            }
        }),
        datasets: [{
            data: [5, 10, 5, 15, 20, 25, 15, 30, 40, 35, 20, 10, 5, 15, 25, 20, 30, 25, 20, 15, 10, 5, 10, 15], // Example dummy data for the 24 hours
            fill: true,
            borderColor: 'blue', // Line color
            backgroundColor: 'rgba(0, 128, 255, 0.3)', // Fill color (light blue with transparency)
            pointLabels: {
                display: true, // Display data point labels
            }
        }]
    },
    options: {
        scales: {
            x: {
                display: true,
                title: {
                    display: false // No x-axis title
                },
                grid: {
                    display: false // Hide x-axis grid lines
                },
                ticks: {
                    display: false // Hide x-axis ticks
                }
            },
            y: {
                display: false, // Hide y-axis
                title: {
                    display: false // No y-axis title
                },
                grid: {
                    display: false // Hide y-axis grid lines
                },
                ticks: {
                    display: false // Hide y-axis ticks
                }
            }
        },
        plugins: {
            title: {
                display: false // No title
            },
            legend: {
                display: false // No legend
            }
        }
    }
});

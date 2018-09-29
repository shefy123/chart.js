function initialize() {
    

    $.ajax({
        url: "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=1whn9YvUTwIii0haAQbILNfLfdgoIa5YIRwZQq6x&location=Denver+CO",
        success: function (data) {
            console.log(data);
            console.log(data.fuel_stations[0].access_code);
            console.log(data.station_counts.fuels.BD.total);
            // console.log(data.weather[0].main);
            // console.log(data.weather[0].icon);
            // console.log(data.wind.speed);
            // console.log(data.id);
            // console.log("success");
        
        },

        error: function (error) {
            console.log('error.responseJSON.message');
        }

    });

    // pratice
    var ctx = document.getElementById("myChart").getContext('2d');
    var myDoughnutChart = new Chart(ctx,{
        type:  'doughnut',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });



}
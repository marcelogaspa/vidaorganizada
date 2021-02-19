
//Setting the Trasnactiosn variables:
// let chartdata = document.querySelector("#data-input tbody")


let income = [3080,3100,3200,3300,3400,3500,3600,3800,3900,4000,4100,4200]
let expense = [3000,2400,2980,3200,2900,2410,2250,2230,2100,1560,1620,1622]

const ctx = document.getElementsByClassName("chart-construction") 
//Type, Data, and Options
let chartExpense = new Chart(ctx, {
 
//Type of Graph
  type: 'bar',

  //Data to be showed in the chart
  data: {
    labels: ["jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label:"Income",
        // Custom graphic of income transactions
        data: income,
        borderWidth: 1,
        borderColor: "rgb(56, 180, 252)",
        backgroundColor: "rgb(56, 180, 252)",
        hoverBackgroundColor: "rgb(56, 180, 252, 0.25)",
        hoverBorderColor: "rgb(185, 225, 235, 0.25)"
      },
      {
      label:"Expense",
      //Custom graphic of expense transactions
      data: expense,
      borderWidth: 1,
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgb(255, 0, 0)",
      hoverBackgroundColor: "rgb(255, 0, 0, 0.25)",
      hoverBorderColor: "rgb(255, 0, 0, 0.25)"
    },
    ]
  },
  // Option it will be applied during the chart load
  option: {
    responsive: true,
    animation: {
        duration: 1500,
        easing: 'easeOutBounce'
    },
    }
});   

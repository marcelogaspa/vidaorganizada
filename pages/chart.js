//Setting the Trasnactiosn variables:
let expense = [1200,1400,1402,1410,1500,1410,1250,1800,1250,1560,1620,1622]
let earn = [3000,3100,3200,3300,3400,3500,3600,3800,3900,4000,4100,4200]

let ctx = document.getElementsByClassName("chart-expense")

//Type, Data, and Options
let chartExpense = new Chart(ctx, {
 
//Type of Graph
  type: 'bar',
  //Data to be showed in the chart
  data: {
    labels: ["jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
      label:"Gastos",
      //pegar a soma de todos os valores de mês a Mês
      data: expense,
      borderWidth: 1,
      borderColor: "#FF0000",
      backgroundColor: "#FF0000",   
    },
      {
      label:"Ganhos",
      //pegar a soma de todos os valores de mês a Mês
      data: earn,
      borderWidth: 1,
      borderColor: "#0066CC",
      backgroundColor: "#0066CC",   
    },

  ]
  },
  //Somoe Option to display custom the Graphic
  option: {
    responsive: true,
    animation: {
        duration: 1500,
        easing: 'easeOutBounce'
    },
    }
});   

//Setting the Trasnactiosn variables:

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
      data: Transaction.expense(),
      borderWidth: 1,
      borderColor: "#FF0000",
      backgroundColor: "#FF0000",   
    },
      {
      label:"Ganhos",
      //pegar a soma de todos os valores de mês a Mês
      data: Transaction.income(),
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

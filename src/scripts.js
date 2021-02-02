const Modal = {
    //ToDo:
    // add toogle function...
    open() {
        //abrir modal
        //adicionar a classe active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')
    },
    close() {
        //Fechar o modal
        //remover a classe active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')

    }
}

const Transaction = {
    all: [
        {
        description: 'Aluguel',
        amount: -83600,
        date: '20/01/2021'
        },
        {
    
        description: 'Condominio',
        amount: -36300,
        date: '05/01/2021'
        },
        {
    
        description: 'Net',
        amount: -22600,
        date: '15/01/2021'
        },
        {
    
        description: 'Salario',
        amount: 568000,
        date: '05/02/2021'
        },
    ],

    add(transaction) {
        Transaction.all.push(transaction)

        App.reload()

    },

    remove(index) {
        Transaction.all.splice(index,1)

        App.reload()
    },

    income() {
        //somar entradas
        let income = 0;
        Transaction.all.forEach((t => {
            if (t.amount > 0 ) {
                income += t.amount;
            }
        }))

        return income 
    },

    expense() {
        //somar saídas
        let expense = 0;
        Transaction.all.forEach((t => {
            if (t.amount < 0 ) {
                expense += t.amount;
            }
        }))
        return expense
    },

    total() {
        //Entradas - saídas
        return Transaction.income() + Transaction.expense()
    }
}

const DOM = {
    transactionContainer: document.querySelector('#data-input tbody'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CashInOut = transaction.amount > 0 ? "income" : "expense"
        
        const amount = Utils.formatCurrency(transaction.amount)
        const hmtl = `

            <td class="description">${transaction.description}</td>
            <td class="${CashInOut}">${amount}</td>
            <td>${transaction.date}</td>
            <th>
                <img src="./assets/minus.svg" alt="remover transação">
            </th>
            `

        return hmtl
    },

    updateTansaction() {
        document.getElementById('display-cash-in')
        .innerHTML = Utils.formatCurrency(Transaction.income())
        document.getElementById('display-cash-out')
        .innerHTML = Utils.formatCurrency(Transaction.expense())
        document.getElementById('wallet')
        .innerHTML = Utils.formatCurrency(Transaction.total())
    },

    clearTransactions() {
        DOM.transactionContainer.innerHTML = ""
    }
}

const Utils = {
    formatAmount(value) {
        value= Number(value) * 100
        return value
    },
    
    formatDate(date) {
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}` 
    },

    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {
        return{
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },

    ValidateFields(){
        const { description, amount, date} = Form.getValues()

        if(
            description.trim() === "" ||
            amount.trim() === "" ||
            date.trim() ==="") {
                throw new Error("Por Favor, Preencha todos os campos")
        }
    },

    formatValues() {
        let { description, amount, date} = Format.getValues()

        amount = Utils.formatAmount(amount)
        date = Utils.formatDate(date)

        return {
            description,
            amount,
            date
        }
    },

    clearFields() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    submit(event) {
        event.preventDefault()
       
        try {
            Form.ValidateFields()
            const transaction = Form.formatValues()
            Transaction.add(transaction)
            Form.clearFields()
            Modal.close()
        } catch(error) {
            alert(error.message)
        }
    }
}

const App = {
    
    init() {

        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        DOM.updateTansaction()

    },

    reload() {
        DOM.clearTransactions()
        App.init()
    },
}

App.init()

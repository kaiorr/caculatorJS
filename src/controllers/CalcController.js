class CalcController {

  constructor() {

    this._operation = []
    this._locale = 'pt-BR'
    this._displayCalcEl = document.querySelector("#display")
    this._dateEl = document.querySelector("#data")
    this._timeEl = document.querySelector("#hora")
    this._currentDate
    this.initialize()
    this.initButtonsEvents()

  }

  //inicializando values apresentados no display da calculadora
  initialize() {

    this.setDisplayDateTime()

    setInterval(() => {

      this.setDisplayDateTime()

    },1000)

  }

  clearAll() {
    this._operation = []
  }

  getLastOperation() {
    return this._operation[this._operation.length-1]
  }

  clearEntry() {
    this._operation.pop()
  }

  addOperation(value) {
    this._operation.push(value)
  }

  setError() {
    this.displayCalc = "Error"
  }

    execBtn(value){

      switch(value) {
        case 'ac':
          this.clearAll()
        break

        case 'ce':
          this.clearEntry()
        break

        case 'soma':
          this.clearEntry()
        break

        case 'subtracao':
          this.clearEntry()
        break

        case 'divisao':
          this.clearEntry()
        break

        case 'multiplicacao':
          this.clearEntry()
        break

        case 'porcento':
          this.clearEntry()
        break

        case 'igual':
          this.clearEntry()
        break

        case 'ponto':
          this.clearEntry()
        break

        case '0':
          case '1':
            case '2':
              case '3':
                case '4':
                  case '5':
                    case '6':
                      case '7':
                        case '8':
                          case '9':
                            this.addOperation(parseInt(value))
                              break
        
        default:
          this.setError()
        break
      }
       
    }

  //desestruturando o método de evento, para considerar a virgula como separador, ficando assim
  //um array para percorrer com forEach
  addEventListenerAll(element, events, fn){

    events.split(',').forEach(event => {

      element.addEventListener(event, fn, false)

    })

  }
  
  initButtonsEvents(){

    let buttons = document.querySelectorAll("#buttons > g, #parts > g")

    buttons.forEach((btn, index)=>{

      this.addEventListenerAll(btn, "click, drag", e => {
      
        console.log(btn.className.baseVal.replace("btn-", ""))

      })

      this.addEventListenerAll(btn, "mouseover, mouseup, mousedown", e => {

        btn.style.cursor = "pointer"

      })

    })

  }

  setDisplayDateTime() {

    this.displayDate = this.currentDate.toLocaleDateString(this._locale
      // ,{
      //   day: "2-digit",
      //   month: "short",
      //   year: "numeric"
      // }
    )
    
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale)

  }

  //buscando um método ou atributo privado
  get displayCalc(){
    return this._displayCalcEl.innerHTML;
  }

  //alterando um método ou atributo privado
  set displayCalc(value){
    this._displayCalcEl.innerHTML = value;
  }

  get displayDate(){
    return this._dateEl.innerHTML;
  }

  set displayDate(value){
    return this._dateEl.innerHTML = value;
  }

  get displayTime(){
    return this._timeEl.innerHTML;
  }

  set displayTime(value){
    return this._timeEl.innerHTML = value;
  }

  get currentDate(){
    return new Date();
  }

  set currentDate(value){
    this._currentDate = value;
  }

}
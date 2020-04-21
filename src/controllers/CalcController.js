class CalcController {
  constructor() {

    this._displayCalc = "0",
    this._currentDate
    this.initialize()

  }
  //inicializando valores apresentados no display da calculadora
  initialize() {
    
    let displayCalcEl = document.querySelector("#display")
    let dateEl = document.querySelector("#data")
    let timeEl = document.querySelector("#hora")

    displayCalcEl.innerHTML = "4657"
    dateEl.innerHTML = "20/04/2020"
    timeEl.innerHTML = "17:11"

  }

  //buscando um método ou atributo privado
  get displayCalc(){
    return this._displayCalc
  }

  //alterando um método ou atributo privado
  set displayCalc(valor){
    this._displayCalc = valor
  }

  get dataAtual(){
    return this._currentDate
  }

  set dataAtual(valor){
    return this._currentDate
  }
}
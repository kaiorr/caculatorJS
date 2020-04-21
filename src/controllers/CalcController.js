class CalcController {

  constructor() {

    this._locale = 'pt-BR'
    this._displayCalcEl = document.querySelector("#display")
    this._dateEl = document.querySelector("#data")
    this._timeEl = document.querySelector("#hora")
    this._currentDate
    this.initialize()

  }

  //inicializando values apresentados no display da calculadora
  initialize() {

    this.setDisplayDateTime()

    setInterval(() => {

      this.setDisplayDateTime()

    },1000)

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
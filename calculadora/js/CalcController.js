class CalcController{

    constructor(){

        this._operation = []
        this._locale = "pt-BR"
        this._displayCalcEl = document.querySelector("#display")
        this._timeEl = document.querySelector("#time")
        this._dateEl = document.querySelector("#date")
        this._currentDate
        this.initialize()
        this.iniButtonsEvents()

    }

    initialize(){

        this.setDisplayDateTime()

        setInterval(() => {

            this.setDisplayDateTime()
        
        }, 1000)

    }

    addEventListenerAll(element, events, fn){

        events.split(" ").forEach(event => {

            element.addEventListener(event, fn, false)

        })

    }

    clearAll(){



    }

    execBtn(value){

        switch(value){

            case "ac":
                this.clearAll()
            break
            case 'btn-ce':
                this.clearEntry()
            break

        }

    }

    iniButtonsEvents(){

        let buttons = document.querySelectorAll(".btn")

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.replace("btn btn-", "")

                this.execBtn(textBtn)

            })

        })

    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale/*, {  Deixar a data por extenso
            day: "2-digit",
            month: "long",
            year: "numeric"
        }*/)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
        
    }

    get displayTime(){
        return this._timeEl.innerHTML

    }
    
    set displayTime(value){
        return this._timeEl.innerHTML = value

    }

    get displayDate(){
        return this._dateEl.innerHTML
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value
    }

    get currentDate(){
        return new Date()
    }

    set currentDate(value){
        this._currentDate = value
    }

}
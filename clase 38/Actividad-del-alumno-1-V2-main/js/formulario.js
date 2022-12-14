class formulario{
    constructor(){
        this.input= createInput("").attribute("placeholder", "ingresa tu nombre")
        this.playbutton= createButton("iniciar")
        this.titleImg= createImg("../imagenes/title.png","titulo de el juego")
        this.welcome= createElement("h2")
    }

    setelementsposition(){
        this.titleImg.position(120,50)
        this.input.position(width/2 - 100, height/2 -100)
        this.playbutton.position(width/2 - 100, height/2 -200)
        this.welcome.position(width/2- 100, height/2 -200)
    }

    setelementstyle(){
        this.titleImg.class("gametitle")
        this.input.class("custominput")
        this.playbutton.class("custombuttom")
        this.welcome.class("bienvenida")
    }

    display(){
        this.setelementsposition()
        this.setelementstyle()
    }

    hide(){
        this.input.hide()
        this.playbutton.hide()
        this.welcome.hide()
    }

    handleMousePressed(){
        this.playbutton.mousePressed(()=>{
            this.input.hide()
            var mensaje = `hola`//${this.input.value()}
            // espera a que otro jugador se una`
             playerCount += 1
             jugador1.name= this.input.value()
             jugador1.index = playerCount
             jugador1.addPlayer()
             jugador1.updateCount(playerCount)
        })
    }
}
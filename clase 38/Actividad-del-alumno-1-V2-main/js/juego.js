class juego{
    constructor(){

    }

    getState(){
        var gameStateRef= database.ref("gameState")
        gameStateRef.on("value", function(data){
        gameState = data.val();

        })  
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        jugador1 = new jugador()
        playerCount= jugador1.getCount()
        
        formulario1=  new formulario()
        formulario1.display()
    }

    handleelement(){
        formulario1.hide()
        formulario1.titleImg.position(40,50)
        formulario1.titleImg.class("gametitleaftereffects")
    }

    play(){
        this.handleelement(
            
        )
    }
}


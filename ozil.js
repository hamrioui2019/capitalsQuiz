
// odile hamrioui 2020

$(document).ready(function(){
    
    
    let arrayPays = [
        {
            name : "ALGERIA",
            capitale : "ALGIERS"
        },
        {
            name : "AUSTRALIA",
            capitale : "CANBERRA"
        },
        {
            name : "AUSTRIA",
            capitale : "VIENNA"
        },
        {
            name : "BAHRAIN",
            capitale : "MANAMA"
        },
        {
            name : "BELGIUM",
            capitale : "BRUSSELS"
        },
        {
            name : "BRAZIL",
            capitale : "BRASILIA"
        },
        {
            name : "CANADA",
            capitale : "OTTAWA"
        },
        {
            name : "CHINA",
            capitale : "BEIJING"
        },
        {
            name : "USA",
            capitale : "WASHINGTON"
        },
        {
            name : "SERBIA",
            capitale : "BELGRADE"
        },
        {
            name : "UZBEKISTAN",
            capitale : "TASHKENT"
        }

        
    ],
        arrayPaysSelected = [],
        score = $("#score"),
        question = $("#question"),
        response = $("#response"),
        button = $("#button"),
        
        
        currenteQuestion,
        currentNumber,
        currentPays,
        currentCapitale,
        currenteScore = 0,
        currentResponse,
        gameOverBoolean;

        let gameListe=[];

        let repok=$(".repOk");
        let repko=$(".repko");
        let nbrQ=0;
        let resp=$('.resp');
    
    (function init(){
        gameOverBoolean = 1;
        nextQuestion();
        score.text("0 pts");
        question.text(currentPays);
    })();
    
    
    
    button.click(function(){
        if ( gameOverBoolean ){
            
            let mResponse = response.val().toUpperCase();
            if ( mResponse === currentCapitale ){
                
                button.addClass("right");
                repok.show();
                repok.css('text-align','center');
                resp.show();
                resp.html("well done The capital of: "+currentPays+" is :\t"+currentCapitale);
                setTimeout(function(){button.removeClass("right");repok.hide()},2000);
                currenteScore += 5;
                score.text(currenteScore+" pts");

            }else {
                
                button.addClass("false");
                repko.show();
                repko.css('text-align', 'center');
                resp.show();
                resp.html("Oups BIG NO: The capital of: "+currentPays+" is :\t"+currentCapitale);
                setTimeout(function(){button.removeClass("false");repko.hide();},2000);
            }

            response.val("");
            nextQuestion();
            nbrQ=nbrQ +1;
            $('.nb').html(nbrQ);
            gameListe.push(arrayPaysSelected);
        }
        
    })
    



    function nextQuestion(){
        
        currentNumber = getRandomNumber(0,arrayPays.length-1);
        currenteQuestion = arrayPays[currentNumber];
       
        currentPays = currenteQuestion.name;
        currentCapitale = currenteQuestion.capitale;
        
        arrayPaysSelected.push(currenteQuestion);
        arrayPays.splice(currentNumber,1);
        
        question.text(currentPays);
        gameListe.push(currenteQuestion);
        if (nbrQ === 2){
           
            arrayPaysSelected.length=0;
            resp.hide();
            alert("do you want to play another round? let's go");
            window.setTimeout('location.reload()', 100);
        }
        if ( arrayPays.length === 0 ){
            gameOver();
        };

    }
    
    
    
    function gameOver() {
        gameOverBoolean = 0;
        alert("game over")
        console.log("game over");
    }
    
    
    
    
    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }  
})

// odile hamrioui 2020
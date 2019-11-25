new Vue({
    el: '#app',
    data: {
        gameIsStarted: false,
        me: 100,
        monster: 100,
    },
    methods: {
        giveUp: function(){
            alert("Monster wins !!")
        },
        specialAttack: function(){
            let dammageMonster = this.getRandom(1,10) * 2;
            let dammageMe = this.getRandom(1,5);
            this.monster -= dammageMonster;
            this.me -= dammageMe;
        },
        attack: function(){
            let dammageMonster = this.getRandom(5,10);
            let dammageMe = this.getRandom(1,5);
            this.monster -= dammageMonster;
            this.me -= dammageMe;
        },
        heal: function(){
            let healtGain = this.getRandom(5,10);
            let dammageMe = this.getRandom(1,5);
            this.me -= dammageMe;
            this.me += healtGain;
            if(this.me > 100) {
                this.me = 100;
            }
        },
        getRandom: function(min, max){
            return (Math.floor((max-min)*Math.random())+min); 
        }
    },
    computed:{
        meAndMonster: function(){
            return `${this.me}|${this.monster}`;
        }
    },
    watch:{
        meAndMonster: function(value){
            let arrayValue = value.split("|");
            if(arrayValue[0] <= 0){
                this.me = 0;
                alert("Monster wins !! ")
            }
            else if (arrayValue[1] <= 0){
                this.monster = 0;
                alert("Player wins")
            }
        }
    }

});
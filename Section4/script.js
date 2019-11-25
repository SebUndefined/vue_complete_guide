new Vue({
    el: '#app',
    data: {
        gameIsStarted: false,
        me: 100,
        monster: 100,
        attacks:[]
    },
    methods: {
        giveUp: function(){
            alert("Monster wins !!")
            this.gameIsStarted = false;
        },
        specialAttack: function(){
            let dammageMonster = this.getRandom(1,10) * 2;
            this.monster -= dammageMonster;
            this.attacks.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + dammageMonster
            });
            this.monsterAttack();
        },
        attack: function(){
            let dammageMonster = this.getRandom(5,10);
            this.monster -= dammageMonster;
            this.attacks.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + dammageMonster
            });
            this.monsterAttack();
        },
        heal: function(){
            let healtGain = this.getRandom(5,10);
            this.me += healtGain;
            this.attacks.unshift({
                isPlayer: true,
                text: 'Player got heal for ' + healtGain
            });
            this.monsterAttack();
            if(this.me > 100) {
                this.me = 100;
            }
        },
        getRandom: function(min, max){
            return (Math.floor((max-min)*Math.random())+min); 
        },
        monsterAttack: function(){
            let dammageMe = this.getRandom(1,5);
            this.me -= dammageMe;
            this.attacks.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + dammageMe
            });
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
                alert("Monster wins !! ");
                this.gameIsStarted = false;
            }
            else if (arrayValue[1] <= 0){
                this.monster = 0;
                alert("Player wins");
                this.gameIsStarted = false;
            }
        },
        gameIsStarted: function(){
            if(this.gameIsStarted){
                this.me = 100;
                this.monster = 100
            }
        }
    },


});
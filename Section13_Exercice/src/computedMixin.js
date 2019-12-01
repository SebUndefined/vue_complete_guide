export const computedMixin = {
    computed: {
        reverseText(){
            return this.text.split("").reverse().join("");
        },
        countCharText(){
            let newText = this.text + ' ('+ this.text.length + ')'
            return newText;
        }
    },
}
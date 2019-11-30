<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="firstName">FirstName</label><br>
                    <input type="text"
                        id="firstName"
                        class="form-control"
                        :value="firstName" 
                        @input="nameChanged(true, $event)" />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                <label for="firstName">Last Name</label><br>
                    <input type="text"
                        id="lastName"
                        class="form-control"
                        :value="lastName"
                        @input="nameChanged(false, $event)"  />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['value'],
    methods: {
        nameChanged(isFirst, event){
            let name;
            if(isFirst){
                name = event.target.value + ' ' + this.lastName;
            }
            else {
                name = this.firstName + ' ' + event.target.value;
            }
            this.$emit('input', name)
        }
    },
    computed: {
           firstName(){
               return this.value.split(" ")[0];
           },
           lastName(){
               return this.value.split(" ")[1];
           }  
    }

}
</script>
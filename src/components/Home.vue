<template>
    <div>
        <h1> Trade or View your Portfolio</h1>
        <h6> You may save & Load your Data</h6>
        <h6> Clcik on 'End Day' to begin New Day!</h6>
        <hr>
        <p> Your Funds: {{funds | currency}}</p>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                funds: this.$store.getters.funds
            }
        },
        methods: {


        }
    }
</script>

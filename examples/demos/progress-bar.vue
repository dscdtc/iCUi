<template>
<div>
    <ic-progress-bar :percent="percent"
    @percentMove="onPercentMove"
    @percentEnd="onPercentEnd"
     ></ic-progress-bar>
     <p>{{percent}}</p>
</div>
</template>

<script>
    export default {
        data() {
            return {
                percent:0.5
            }
        },
        methods: {
           onPercentMove(percent) {
               this.percent = percent
           },
           onPercentEnd(percent) {
               this.percent = percent
           }
        }
    }
</script>

<style>

    p {
        text-align:center;
    }
    
</style>
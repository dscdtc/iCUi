<template>
<div>
    <ic-flexbox vertical>
        <ic-flexbox-item>
            <h1 class="title">Slide滑动输入条</h1>
        </ic-flexbox-item>
        <ic-flexbox-item>
            该例请在手机模式下查看
        </ic-flexbox-item>
    </ic-flexbox>
    <ic-slide :percent="percent1"
        @percentMove="onPercentMove1"
        @percentEnd="onPercentEnd1"
     ></ic-slide>
     <p>{{percent1}}</p>
     <ic-slide :percent="percent2"
        @percentMove="onPercentMove2"
        @percentEnd="onPercentEnd2"
        :trackStyle="trackStyle"
        :handleStyle="handleStyle"
        :railStyle="railStyle"
     ></ic-slide>
     <p>{{percent2}}</p>
</div>
</template>

<script>
    export default {
        data() {
            return {
                percent1:0.5,
                percent2:0,
                trackStyle:{
                    background:'red'
                },
                handleStyle:{
                    background:'blue'
                },
                railStyle:{
                    background:'blue'
                }
            }
        },
        methods: {
           onPercentMove1(percent) {
               this.percent1 = percent
           },
           onPercentEnd1(percent) {
               this.percent1 = percent
           },
           onPercentMove2(percent) {
               this.percent2 = percent
           },
           onPercentEnd2(percent) {
               this.percent2 = percent
           }
        }
    }
</script>

<style>
    
</style>
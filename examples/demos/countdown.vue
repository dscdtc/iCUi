<template>
    <div>
       <ic-button type="button" class="btn btn-secondary" :disabled="counting" @click="countdown">
            <ic-countdown v-if="counting" :time="10000" @countdownend="countdownend">
            <template scope="props">{{ props.seconds || 60 }} :秒重新获取</template>
            </ic-countdown>
            <span v-else>获取验证码</span>
        </ic-button>
    </div>
    
</template>
<script>
    export default {
        data () {
        return {
            counting: false,
         }
        },
        methods: {
            countdown: function () {
        this.counting = true;
      },
      countdownend: function () {
        this.counting = false;
      },
        }
    }
</script>
<style>
    
</style>
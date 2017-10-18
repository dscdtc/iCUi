<template>
    <div>
        <ic-flexbox>
            <ic-flexbox-item>
                <h1 class="title">countDown倒计时组件</h1>
            </ic-flexbox-item>
        </ic-flexbox>
        
        <ic-flexbox>
            <ic-flexbox-item>
               <p>短信验证码倒计时</p>
            </ic-flexbox-item>
        </ic-flexbox>

        <div class="verifyCodeBox">
            <input type="tel" class="inputField" placeholder="输入验证码">
            <p :disabled="counting" @click="countdown" class="countBtn">
                <ic-countdown v-if="counting" :time="10000" @countdownend="countdownend">
                    <template scope="props">{{ props.seconds || 60 }}秒重新获取</template>
                </ic-countdown>
                <span v-else>获取验证码</span>
            </p>
        </div>

        <ic-flexbox>
            <ic-flexbox-item>
               <p>时间差倒计时</p>
            </ic-flexbox-item>
        </ic-flexbox>
        <ic-flexbox>
            <ic-flexbox-item>
               <ic-countdown :time="time" :interval="100" tag="p">
                    <template scope="props">当前距离2018年:{{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes, {{ props.seconds }} seconds.</template>
               </ic-countdown>
            </ic-flexbox-item>
        </ic-flexbox>
    </div>
</template>
<script>
export default {
    data () {
        let now = new Date()
        let newYear = new Date(now.getFullYear() + 1, 0, 1)
        return {
            counting: false,
            time: newYear - now
        }
    },
    methods: {
        countdown() {
            this.counting = true;
        },
        countdownend() {
            this.counting = false;
        },
    }
}
</script>
<style>
    .verifyCodeBox {
        margin-top:20px;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
    }
    .inputField {
        height: 40px;
        padding: 5px;
        box-sizing: content-box;
        color: #666;
        font-size: 16px;
        background: #fff;
        border-radius: 4px;
        margin-bottom: 10px;
        flex: 1;
    }
    .countBtn {
        width: 110px;
        height: 40px;
        background: #47c9bc;
        color: #fff;
        text-align: center;
        font-weight: 600;
        font-size: 15px;
        padding: 5px;
        box-sizing: content-box;
        border-radius: 2px;
        line-height:40px;
    }

</style>
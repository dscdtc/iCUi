<template>
    <div>
        <ic-flexbox row="16">
        <ic-flexbox-item>
          <h1 class="title">Popup 弹出层</h1>
        </ic-flexbox-item>
      </ic-flexbox>
        <ic-flexbox row="16" vertical>
            <ic-flexbox-item>
                <ic-button @click="popupShow2 = true">下方弹出</ic-button>
                <ic-popup v-model="popupShow2" position="bottom" class="ic-popup-2">
                    <ic-button @click.native="popupShow2 = false">关闭 popup</ic-button>
                </ic-popup>
            </ic-flexbox-item>
            <ic-flexbox-item>
                <ic-button @click="popupShow3 = true">上方弹出</ic-button>
                <ic-popup v-model="popupShow3" position="top" class="ic-popup-3" :overlay="false">
                    更新成功
                </ic-popup>
            </ic-flexbox-item>
            <ic-flexbox-item>
                <ic-button @click="popupShow4 = true">右方弹出</ic-button>
                <ic-popup v-model="popupShow4" position="right" class="ic-popup-4" :overlay="false">
                    <ic-button @click.native="popupShow4 = false">关闭 popup</ic-button>
                </ic-popup>
            </ic-flexbox-item>
            <ic-flexbox-item>
                <ic-button @click="popupShow5 = true">左方弹出</ic-button>
                <ic-popup v-model="popupShow5" position="left" class="ic-popup-5" :overlay="false">
                    <ic-button @click.native="popupShow5 = false">关闭 popup</ic-button>
                </ic-popup>
            </ic-flexbox-item>
        </ic-flexbox>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            popupShow1: false,
            popupShow2: false,
            popupShow3: false,
            popupShow4: false,
            popupShow5: false,
            }
        },

        watch: {
            popupShow3(val) {
            if (val) {
                setTimeout(() => {
                this.popupShow3 = false;
                }, 2000);
            }
            }
        },

        methods: {
            
        }
};
</script>

<style>
    .ic-popup-2 {
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        padding: 20px;
    }
    .ic-popup-3 {
        line-height: 50px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.701961);
        color: #fff;
    }
    .ic-popup-4,
    .ic-popup-5 {
        width: 100%;
        height: 100%;
  }
</style>
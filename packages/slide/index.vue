<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner" :style="railStyle">
      <div class="progress" ref="progress" :style="trackStyle"></div>
      <div class="progress-btn-wrapper" ref="progressBtn"
           @touchstart.prevent="progressTouchStart"
           @touchmove.prevent="progressTouchMove"
           @touchend="progressTouchEnd"
      >
        <div class="progress-btn" :style="handleStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {prefixStyle} from '../utils/dom'
  const transform = prefixStyle('transform')
  console.log(transform)
  const COMPONENT_NAME = 'ic-slide'
  const progressBtnWidth = 16
  
  export default {
    name: COMPONENT_NAME,
    props: {
      percent: {
        type: Number,
        default: 0
      },
      trackStyle: {
        type: Object,
        default:function(){
          return {
            background:'#47c9bc'
          }
        }
      },
      handleStyle: {
        type: Object,
        default: function(){
          return {
             background:'#47c9bc'
          }
        }
      },
      railStyle: {
        type: Object,
        default: function(){
          return {
             background:'rgba(0,0,0,.3)'
          }
        }
      }
    },
    created() {
      this.touch = {}
      this.$nextTick(() => {
         this.initProgress()
      })
    },
    methods: {
      initProgress() {
          const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
          this._offset(this.percent * barWidth)
      },
      progressTouchStart(e) {
        this.touch.initiated = true
        this.touch.startX = e.touches[0].pageX
        this.touch.left = this.$refs.progress.clientWidth
      },
      progressTouchMove(e) {
        if (!this.touch.initiated) {
          return
        }
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const deltaX = e.touches[0].pageX - this.touch.startX
        const offsetWidth = Math.min(barWidth, Math.max(0, this.touch.left + deltaX))
        this._offset(offsetWidth)
        this.$emit('percentMove',offsetWidth / barWidth)
      },
      progressTouchEnd() {
        this.touch.initiated = false
        this._triggerPercent()
      },
      progressClick(e) {
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const rect = this.$refs.progressBar.getBoundingClientRect()
        // console.log(e.pageX)
        const offsetWidth = Math.min(barWidth, e.pageX - rect.left)
        this._offset(offsetWidth)
        // 点击progressBtn 的时候，e.offsetX 获取不对
        // this._offset(e.offsetX)
        this._triggerPercent()
      },
      _triggerPercent() {
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const percent = this.$refs.progress.clientWidth / barWidth
        // console.log(percent)
        this.$emit('percentEnd', percent)
      },
      _offset(offsetWidth) {
        // console.log(this.$refs.progressBtn.style)
        this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`
      }
    },
    watch: {
      percent(newPercent) {
        if (newPercent >= 0 && !this.touch.initiated) {
          const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
          const offsetWidth = newPercent * barWidth
          this._offset(offsetWidth)
        }
      }
    }
  }
</script>

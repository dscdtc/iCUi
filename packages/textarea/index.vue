<template>
    <div class="ic-cell">
		<div class="ic-cell__bd">
			<textarea
				class="ic-textarea"
				:autocomplete="autocomplete"
				:autocapitalize="autocapitalize"
				:autocorrect="autocorrect"
				:spellcheck="spellcheck"
				:placeholder="placeholder"
				:readonly="readonly"
				:name="name"
				:rows="rows"
				:cols="cols"
				v-model="currentValue"
				@focus="$emit('on-focus')"
				@blur="$emit('on-blur')"
				:style="textareaStyle"
				:maxlength="max"
				ref="textarea"></textarea>
			<div class="ic-textarea-counter" v-show="showCounter && max" @click="focus">
        		<span>{{count}}</span>/{{max}}
      		</div>
		</div>
    </div>
</template>
<script>
  import Autosize from 'autosize'
  const COMPONENT_NAME = 'ic-textarea'

  export default {
    name: COMPONENT_NAME,
	props: {
		title: String,
		inlineDesc: String,
		showCounter: {
			type: Boolean,
			default: true
		},
		max: Number,
		value: String,
		name: String,
		placeholder: String,
		readonly: Boolean,
		rows: {
			type: Number,
			default: 3
		},
		cols: {
			type: Number,
			default: 30
		},
		height: Number,
		autocomplete: {
			type: String,
			default: 'off'
		},
		autocapitalize: {
			type: String,
			default: 'off'
		},
		autocorrect: {
			type: String,
			default: 'off'
		},
		spellcheck: {
			type: String,
			default: 'false'
		},
		autosize: Boolean
  	},
	  mounted () {
		this.$nextTick(() => {
			if (this.autosize) {
				this.bindAutosize()
			}
		})
  	},
	created () {
		this.currentValue = this.value
	},
	watch: {
    // prop.autosize
		autosize (val) {
			console.log(val)
			this.unbindAutosize()
			if (val) {
				this.bindAutosize()
			}
		},
		// prop.autosize
		value (val) {
			this.currentValue = val
		},
		currentValue (newVal) {
			if (this.max && newVal && newVal.length > this.max) {
				this.currentValue = newVal.slice(0, this.max)
			}
			this.$emit('input', this.currentValue)
			this.$emit('on-change', this.currentValue)
    	}
  	},
	data () {
		return {
			hasRestrictedLabel: false,
			currentValue: ''
		}
  	},
	computed: {
		count () {
			let len = 0
			if (this.currentValue) {
				len = this.currentValue.replace(/\n/g, 'aa').length
			}
			return len > this.max ? this.max : len
		},
		textareaStyle () {
			if (this.height) {
				return {
				height: `${this.height}px`
				}
			}
		},
  	},
	methods: {
		updateAutosize () {
			Autosize.update(this.$refs.textarea)
		},
	// prop.autosize
		bindAutosize () {
			Autosize(this.$refs.textarea)
		},
		unbindAutosize () {
			Autosize.destroy(this.$refs.textarea)
		},
		// prop.autosize
		focus () {
			this.$refs.textarea.focus()
		}
  	},
  // prop.autosize
	beforeDestroy () {
		this.unbindAutosize()
	}
  }
</script>

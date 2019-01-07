<template>
	<button
		class="pica-btn"
		@click="handleClick"
		:disabled="buttonDisabled"
		:class="[
			type ? `pica-btn--${type}` : '',
			buttonSize ? `el-button--${buttonSize}` : '',
			{
				'is-disabled': buttonDisabled
			}
		]">
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script>
export default {
	name: 'PicaButton',
	props: {
		type: {
      type: String,
      default: 'default'
    },
    size: String,
    disabled: Boolean
	},
	computed: {
		buttonSize() {
			return this.size;
		},
		buttonDisabled() {
			return this.disabled;
		}	
	},
	methods: {
		handleClick(event) {
			if (this.disabled) return;

			this.$emit('click', event);
		}
	}
}
</script>
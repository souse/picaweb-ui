<template>
	<button
		class="pica__btn"
		@click="handleClick">
		<slot></slot>	
	</button>
</template>

<script>
export default {
	name: 'PicaButton',
	methods: {
		handleClick(event) {
			if (this.disabled) return;

			this.$emit('click', event);
		}
	}
}
</script>
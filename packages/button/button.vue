<template>
	<button
		class="pica__btn"
		@click="handleClick">
		<slot></slot>	
	</button>
</template>

<script>
export default {
	name: 'pica-button',
	methods: {
		handleClick(event) {
			if (this.disabled) return;

			this.$emit('click', event);
		}
	}
}
</script>
<template>
	<div class="home-container">
		<h2>Pica Web UI</h2>
		<pica-button>点击</pica-button>
		<pica-button-group>
			<pica-button>点击</pica-button>
			<pica-button>点击</pica-button>	
		</pica-button-group>
	</div>
</template>

<script>
export default {
	name: 'Home',
  methods: {
    handleBtnClick(e) {
      console.log(e);
    }
  }
}
</script>
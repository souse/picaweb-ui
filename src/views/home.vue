<template>
	<div class="home-container">
		<pica-button @click="handleBtnClick">TEST</pica-button>
    <pica-button-group>
      <pica-button>按钮1</pica-button>
      <pica-button>按钮2</pica-button>
    </pica-button-group>
	</div>
</template>

<script>
export default {
	name: 'home',
  methods: {
    handleBtnClick(e) {
      console.log(e);
    }
  }
}
</script>
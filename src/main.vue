<template>
	<div class="container">
		<header-component></header-component>
		<router-view></router-view>
		<!--<footer-component></footer-component>-->
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/header/header.vue";
//import Footer from './components/footer/footer.vue';

export default defineComponent({
	name: "app",
	components: {
		"header-component": Header,
		//'footer-component': Footer
	},
});
</script>

<style scoped lang="scss">
.container {
	border: 2px solid red;
}
</style>

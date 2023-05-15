<template>
	<div class="header">
		<p>This is the header...</p>
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/kitchens">Kitchens</router-link></li>
			<li><router-link to="/bathrooms">Bathrooms</router-link></li>
			<li><router-link to="/newbuilds">Newbuilds</router-link></li>
			<li><router-link to="/extensions">Extensions</router-link></li>
			<li><router-link to="/refurbishments">Refurbishments</router-link></li>
			<li><router-link to="/contact">Contact</router-link></li>
			<li><router-link to="/about">About</router-link></li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "header",
});
</script>

<style lang="scss">
.header {
    border: 2px solid green;
}
</style>

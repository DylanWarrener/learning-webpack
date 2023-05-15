<template>
	<div class="kitchen">
		This is kitchen...
		<kitchen-btn-component></kitchen-btn-component>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import KitchenBtn from '../components/kictchen/btn.vue';

export default defineComponent({
	name: "kitchen",
	components: {
		'kitchen-btn-component': KitchenBtn
	}
});
</script>

<style lang="scss">
//@import '../styles.scss';

.kitchen {
	border: 2px solid black;
}
</style>

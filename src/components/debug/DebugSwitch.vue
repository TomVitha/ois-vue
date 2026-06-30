<script setup lang="ts">
	const modelValue = defineModel<boolean>({ default: false })

	withDefaults(
		defineProps<{
			title?: string
			falseLabel?: string
			trueLabel?: string
		}>(),
		{
			title: '',
			falseLabel: 'OFF',
			trueLabel: 'ON',
		},
	)
</script>

<template>
	<div class="debug-switch">
		<p v-if="title" class="subheader">{{ title }}</p>

		<label class="space-x-0">

			<span class="label" :class="{ 'strong': !modelValue }">
				{{ falseLabel }}
			</span>

			<div class="form-check form-switch ms-2">
        <input v-model="modelValue" type="checkbox" class="form-check-input" />
      </div>

			<span class="label" :class="{ 'strong': modelValue }">
				{{ trueLabel }}
			</span>
		</label>
	</div>
</template>

<style scoped>
	.debug-switch {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		z-index: 1200;
		border: 1px solid var(--tblr-border-color, #dce1e7);
		border-radius: 0.75rem;
		background: var(--tblr-bg-surface, #ffffff);
		box-shadow: 0 0.5rem 1.25rem rgba(16, 24, 40, 0.18);
		padding: 0.625rem 0.75rem;
	}
</style>
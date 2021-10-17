<template>
	<div class="card rounded-md" :class="theme === 'light' ? 'bg-coolGray-200' : 'bg-coolGray-800'">
		<slot></slot>
	</div>
</template>

<script>
	export default {
    props: {
      theme: {
        type: String,
        default: 'dark'
      }
    }
	}
</script>

<style lang="scss" scoped>
.card {
	.prefix {
		@apply bg-coolGray-600 rounded-tl-md rounded-br-md w-max px-1.5 text-sm font-mono whitespace-pre relative;

    a {
      &::after {
        // content: '↗';
        content: url('~assets/more.svg'); width: 1.25rem; height: 1.25rem;

        @apply opacity-0 absolute text-lg font-sans -right-6 -top-px pt-0 font-bold text-white;
      }

      &:hover::after {
        @apply opacity-100;
      }
    }
	}

	.content {
		@apply p-2 font-mono text-xs;

		// .copy {
		// 	@apply opacity-0;

		// 	&:hover {
		// 		@apply opacity-100;
		// 	}
		// }
	}
}
</style>

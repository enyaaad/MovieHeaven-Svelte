<script>
	import Movie_List from "../components/MovieList/Movie_List.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
				Welcome to<br>MovieHeaven
		</span>
	</h1>
	<Movie_List/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		width: 100%;
	}
</style>

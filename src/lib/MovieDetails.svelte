<script lang="ts">
	import Carousel from '$lib/Carousel.svelte';
	import type { IMovie } from 'src/global';
  	import { posterUrl } from '$lib/helpers'

  	export let movie: IMovie;

</script>

{#if movie}
	<div class="card shadow-lg p-3 my-5">
		<!-- Poster -->
		<div class="row g-0 mb-4">
			<!-- <img src={posterUrl(movie.poster_path)} class="card-img-top img-fluid" alt="..." /> -->
		</div>
		<div class="row g-0">
			<!-- carousel -->
			<div class="col-md-4">
				<Carousel posters={movie.images.backdrops} count={5} />
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h4 class="card-title">
						{movie.title} <span class="badge bg-info fs-6">{movie.vote_average}</span>
					</h4>
					<h5 class="fs-5">Released <span class="fs-6 text-muted">{movie.release_date}</span></h5>
					<h5 class="card-subtitle mb-2 text-muted">
						{#each movie.credits.crew.slice(0, 2) as a, i}
							<span>{a.name} </span>
						{/each}
					</h5>
					<h6 class="card-subtitle mb-2 text-muted">
						{#each movie.credits.cast.slice(0, 4) as a, i}
							<span>{a.name} </span>
						{/each}
					</h6>
					<p class="card-text">{movie.overview}</p>
					<p>Runtime <span class="badge rounded-pill bg-primary">{movie.runtime}</span></p>
				</div>
			</div>
		</div>
	</div>
	<!-- card -->
{/if}

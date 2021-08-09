<script lang="typescript">
	import Carousel from '$lib/Carousel.svelte';
	//import { posterUrl } from '$lib/helpers';
	import type { IPerson } from 'src/global';

	export let person: IPerson;
</script>

{#if person}
	<div class="card shadow-lg p-3 mb-5">
		<!-- card body -->
		<div class="row g-0">
			<div class="col-md-4">
				<Carousel posters={person.images.profiles} count={5} />
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h4 class="card-title">
						{person.name} <span class="badge bg-info fs-6">{person.popularity}</span>
					</h4>
					<h5 class="card-subtitle mb-2 text-muted">
            {person.place_of_birth}
					</h5>
          <div class="row">
            <h6 class="col-3 pt-2">Born <span class="fs-6 text-muted">{person.birthday}</span></h6>
            <h6 class="col-3 pt-2">Known For <span class="fs-6 text-muted">{person.known_for_department}</span></h6>
          </div>
          <h5 class="pt-2">Biography</h5>
			
					<p class="card-text pt-2">{person.biography}</p>
				</div>
			</div>
		</div>
	</div>
	<!-- card -->
{/if}

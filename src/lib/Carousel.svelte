<script>
import { posterUrl } from '$lib/helpers'

export let posters = []
export let count = 3

</script>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-inner">
        {#each posters.slice(0,count) as p,i }
        <div class="carousel-item {i==0?'active':''}">
            <img src="{posterUrl(p.file_path)}" class="d-block w-100" alt="...">
        </div>
        {/each}    
    </div>

    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
  </div>
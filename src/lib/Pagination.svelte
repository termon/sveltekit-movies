<script lang="ts">
import { createEventDispatcher } from 'svelte';
import { pagination } from '$lib/helpers'

// props
export let totalpages
export let page

// calculate number of pages to display in paginator
let pages = pagination(page, totalpages)

// event dispatcher used to inform parent of selected page
const dispatch = createEventDispatcher();

const moveNext = () => {
    if (page < pages.length) {
        page +=1
        pages = pagination(page, totalpages)
        dispatch('page', {page: page})
    }
}
const movePrev = () => {
    if (page > 1) {
        page -=1
        pages = pagination(page, totalpages)
        dispatch('page', {page: page})
    }
}
const moveToPage = (p) => {
    page = p
    pages = pagination(page, totalpages)
    dispatch('page', {page: page})
}


//console.log('Paginator',totalpages, page, pages.length)
</script>

<nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <button class="page-link" on:click={movePrev} aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      {#each pages as p}
        {#if p === '...'}
            <li class="page-item"><button class="page-link">{p}</button></li>
        {:else if p == page}
            <li class="page-item active"><button class="page-link" on:click={()=>moveToPage(p)}>{p}</button></li>
        {:else}
            <li class="page-item"><button class="page-link" on:click={()=>moveToPage(p)}>{p}</button></li>
        {/if}
      {/each}
      <li class="page-item">
        <button class="page-link" on:click={moveNext} aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
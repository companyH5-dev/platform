<template>
<div class="app-wrapper">
  <div class="main-container">
    <navbar></navbar>
    <app-main></app-main>
    <bottom></bottom>
  </div>
</div>
</template>

<script>
import {
  Navbar,
  AppMain,
  Bottom
} from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain,
    Bottom
  },
  computed: {

  }
}
</script>

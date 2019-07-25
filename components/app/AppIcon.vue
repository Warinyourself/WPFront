<template>
  <svg v-if="icon === 'statistics'" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox=".5 .5 49 49">
	  <path d="M4 25A21 21 0 1 0 29 4" fill="none" stroke-width="7" stroke-linecap="round" stroke-miterlimit="3"/>
	  <path d="M12 25a13 13 0 1 0 15-13l-2 13H12z"/>
  </svg>

  <svg v-else-if="icon === 'view'" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 65.36 40.85">
  	<path d="M17.48 20.43a15.2 15.2 0 1 1 30.41 0 15.2 15.2 0 0 1-30.4 0zM0 20.43Q14.64 0 32.68 0t32.68 20.43Q50.72 40.84 32.68 40.84T0 20.42zm35.77-10.07a10.54 10.54 0 1 0 6.97 6.97 5.27 5.27 0 1 1-6.96-6.97z" fill-rule="evenodd" />
  </svg>

  <svg v-else-if="icon === 'exit'" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 1 40 40">
      <path d="M20 38H5l-2-2V6l2-2h15a2 2 0 0 0 0-3H5C2 1 0 3 0 6v30c0 3 2 5 5 5h15a2 2 0 0 0 0-3zm20-18L29 10h-2v2l7 7H15l-2 2 2 2h19l-7 7a2 2 0 0 0 1 3l1-1 11-10a2 2 0 0 0 0-2z" fill-rule="evenodd" />
  </svg>

  <svg v-else-if="icon === 'user'" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 -1 77 100">
    <path d="M14 24a24 24 0 1 1 49 0 24 24 0 0 1-49 0zM0 100c0-26 17-46 38-46 22 0 39 20 39 46H0z" fill-rule="evenodd"/>
  </svg>

  <svg v-else-if="icon === 'settings'" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 40 40">
  	<path d="M20 29a9 9 0 0 1-9-9 9 9 0 1 1 16 6c-2 2-4 3-7 3zm10 7l-2-1c-2-1-5 0-6 2l-1 1c-1 3-3 2-4 0l-1-2c-1-2-3-3-5-2H9c-3 1-4 0-3-2l1-2c0-2-1-5-3-6l-2-1c-2 0-3-2-1-3l2-1c2-2 3-4 2-6l-1-2C2 9 3 7 6 8h2c2 0 5-1 5-4V2c1-2 2-3 4-1l1 2c2 2 5 2 7 0l1-1c2-2 4-1 4 1v2c0 3 2 5 4 5h2c3 0 3 1 2 3l-1 2c-2 2-2 4 0 6l2 1c2 2 1 4-1 4h-2c-3 1-4 3-4 6l1 2c0 2-1 3-3 2z" fill-rule="evenodd"/>
  </svg>

  <svg v-else-if="icon === 'schedule'" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 40 40">
  	<path d="M3 5h34l3 3v29l-3 3H3l-3-3V8l3-3zm1 9h32v22H4V14z" fill-rule="evenodd"/>
  	<path d="M8 0h5v5H8zM28 0h5v5h-5z"/>
  	<path d="M11 26l6 6 12-12" fill="none" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3"/>
  </svg>

  <svg v-else-if="icon === 'love'" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 40 35">
  	<path d="M20 4c-2-2-5-4-9-4C5 0 0 5 0 12q0 9 20 23 20-13 20-23c0-9-5-12-11-12-4 0-7 2-9 4z"/>
  </svg>

  <svg v-else-if="icon === 'search'" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="-0.5 0 45 43">
    <g stroke-width="5" stroke-miterlimit="3">
      <circle cx="16" cy="16" r="14" fill="none" stroke-linecap="square"/>
      <path stroke-linecap="round" d="M28 26l14 14"/>
    </g>
  </svg>

  <svg v-else xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="-0.5 0 45 43">
  	<path d="M20 4c-2-2-5-4-9-4C5 0 0 5 0 12q0 9 20 23 20-13 20-23c0-9-5-12-11-12-4 0-7 2-9 4z"/>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      //required: true,
    }
  }
}
</script>

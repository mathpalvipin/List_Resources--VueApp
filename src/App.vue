<template>
	<theheader title='rememberme'></theheader>
	<ul>
		<mainresource></mainresource>
    

		
	</ul>


</template>
<script >
	import mainresource  from './components/learningResource/resourcemain.vue';
	import theheader from './components/layout/Theheader.vue';

	export default{


 
components:{mainresource,
theheader
}
	}
</script>
<style >
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
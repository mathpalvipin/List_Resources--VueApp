<template>
	<li v-for='resource in resources' :key='resource.id'>
		<card>
		
			<header>
			<h3>
				{{resource.title}}	
			</h3>
			<base-button @click='resdelete(resource.id)' > Delete</base-button>
			</header>
	
		<p>{{resource.description}}</p>
		<nav>
			<a :href="resource.link">View resource</a>
		</nav>
	</card>
	</li>
</template>
<script >
	export default{
		inject :['resdelete',
		'resources']
	}
</script>
<style >li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}</style>
<template> 
<base-button @click="selectedresource('resource')" :class='styleresource'>resource</base-button>
<base-button @click="selectedresource('addresource')" :class="styleadd_resource">add resource</base-button>
<keep-alive>
<component :is='selectedres'></component></keep-alive>

</template>
	
<script >
	
	import resource from './Resource.vue';
	import addresource from './addresource.vue';
import resourceselect from './resourceselect.vue';

	export default{
computed:{
selectedres(){ 
 return this.selectTab;
},
styleresource(){

	return  this.selectTab=='resource'? null:'flat';
},

styleadd_resource(){

	return  this.selectTab=='addresource'? null:'flat';
}
},
 data(){

return{selectTab:"resource",
	storeResource:[
{id:'offical-guide',
title:'offical Guide ',
description :'thisis offical vue guide',
link:'https://vue.org'

},{id:'google',
title:'google ',
description :'thisis  google',
link:'https://google.com'
       
}
]
}; 
}
,
provide(){return {
	addres:this.addresource,
	resources:this.storeResource,
	resdelete:this.resourcedelete
};
},
methods:{ 
	selectedresource(tab){
		
		this.selectTab=tab;

	},
	addresource(title ,description,link){
		const res = {
		id : new Date().toISOString(),
		title:title,
		description:description,
		link:link
		};

		this.storeResource.unshift(res);
	},
	resourcedelete(id){
		const index =this.storeResource.findIndex(res=>  res.id==id);
		this.storeResource.splice(index,1);

	}

},
components:{
resource,addresource,resourceselect
}
	}
</script>
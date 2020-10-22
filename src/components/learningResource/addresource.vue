<template>
	<base-dialog v-if='inputisinvalid'
	title='Invalid input' 
	@close='closedialog'>
		<template #default>
			<p> may be some input is invalid</p>
			
		</template>
		<template #action>
<base-button @click='closedialog'>OK</base-button>
		</template>
	</base-dialog>
	<h1>
		<card>
			<form @submit.prevent='submitdata'>
				<div class="form-control">
				<label for='title'>Title
				</label>
				<input type="text" name="title" ref='title'>
			</div>
			<div class="form-control">
					<label for='description'>description
					</label>
					<textarea  name="description" row='3' ref='description'></textarea>
			</div>
					<div class="form-control">
					<label for='link'>Link
					</label>
					<input type="url" name="link" ref='link'>
			</div>
			
			<div> 
				<base-button type='submit'>add resource
				</base-button>
			</div>
			</form>
		</card>
	</h1>
</template>
<script >
	export default{
		data(){
		return{
         inputisinvalid:false
		}
		},
		inject:[
		'addres'],
		methods: {closedialog(){
			this.inputisinvalid=false;
		},
		submitdata(){
			const title = this.$refs.title.value;
			const link = this.$refs.link.value;
			const description= this.$refs.description.value;
			if(title.trim()==''||description.trim()==''||link==''){
				this.inputisinvalid=true;
			}
			
			this.addres(title,description,link);
			this.$refs.description.value='';
			this.$refs.link.value='';this.$refs.title.value='';

		}
		}
		}
</script>
<style scoped>
	label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
	textarea:focus
	{
	outline:none;
	border-color:#3a0061;
	background-color:#f7ebff;
	}
.form-control {
  margin: 1rem 0;
}
</style>
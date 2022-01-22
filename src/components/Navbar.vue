<template>
  			<div id="cssmenu" >
				<ul>
				    <li class="active"><router-link :to="'/allgoods'"><span>Все товары</span></router-link></li>
				   <li class="active"><router-link :to="'/bathgoods'"><span>Для ванн</span></router-link></li>  
				   <li class="active"><router-link :to="'/hairgoods'"><span>Для волос</span></router-link></li>
				   <li><router-link :to="'/facegoods'"><span>Для лица</span></router-link></li>
				   <li><router-link :to="'/bodygoods'"><span>Для тела</span></router-link></li>
				   <li class="last"><router-link :to="'/lipsgoods'"><span>Для губ</span></router-link></li>
				   <li><router-link :to="'/othergoods'"><span>Другое</span></router-link></li>
				</ul>
			</div>
</template>

<script>
export default {
 name: 'Navbar'
}
</script>

<style>

</style>
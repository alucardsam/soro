<template>
	<div class="contenedor">
		<router-link to="/tazas" class="card">
			<img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg">
			<div class="card__head">Tazas</div>
		</router-link>
		<router-link to="/playeras" class="card">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg">
			<div class="card__head">Playeras</div>
		</router-link>
		<router-link to="/bolsas" class="card">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG">
			<div class="card__head">Bolsas</div>
		</router-link>
		<router-link to="/llaveros" class="card">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg">
			<div class="card__head">Llaveros</div>
		</router-link>
		<router-link to="/stickers" class="card">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg">
			<div class="card__head">Stickers</div>
		</router-link>
		<router-link to="/contactanos" class="card">
			<img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Gato_Siam%C3%A9s_ojos_azules.JPG">
			<div class="card__head">Contactanos</div>
		</router-link>
	</div>
</template>

<script setup>
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10vmin;
  overflow: hidden;
}
.contenedor .card {
  flex: 1;
  transition: all 1s ease-in-out;
  height: 75vmin;
  position: relative;
}
.contenedor .card .card__head {
  color: black;
  background: rgba(255, 30, 173, 0.75);
  padding: 0.5em;
  transition: all 0.5s ease-in-out;
  min-width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1em;
  white-space: nowrap;
}
.contenedor .card:hover {
  flex-grow: 10;
}
.contenedor .card:hover img {
  filter: grayscale(0);
}
.contenedor .card:hover .card__head {
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  font-size: 2em;
}
.contenedor .card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease-in-out;
  filter: grayscale(100%);
}
</style>

<template>
  <div class="container">
    <div class="title">Figma2CSS Web App</div>
    <div class="subtitle">Generate CSS from Figma Layouts from anywhere!</div>
    <div class="form">
      <div class="oAuth2"></div>
    </div>
    <div class="filesList"></div>
    <div class="layoutPreview"></div>
    <div class="generatedCode"></div>
    <div class="consoleOutput"></div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>

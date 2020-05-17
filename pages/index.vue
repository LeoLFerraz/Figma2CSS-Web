<template>
  <div class="container">
    <header>
      <div class="title">Figma2CSS Web App</div>
      <div class="subtitle">Generate CSS from Figma Layouts from anywhere!</div>
    </header>
    <main>
      <ul>
        <li>
          <nuxt-link to="/">
            <h3>Team Projects</h3>
            <p>Input a team ID and browse its projects</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <h3>Project Files</h3>
            <p>Input a project ID and browse its files</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            <h3>Specific File</h3>
            <p>Input a file ID and browse its nodes</p>
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    min-height: 100vh;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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

  main {
    margin: auto;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        list-style: none;
      }
    }
  }

</style>

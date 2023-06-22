<template>
  <div>
    <el-header>

    </el-header>
    <el-container>
      <el-aside width="200px">
        <NuxtLink to="/">Index</NuxtLink>
        <br>
        <NuxtLink to="/Home">Home</NuxtLink>
        <br>
        <NuxtLink to="/About">About</NuxtLink>
        <br></el-aside>
      <el-main>
        <Nuxt/>
      </el-main>
    </el-container>


  </div>
</template>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  .el-header {
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid #eaeaea;
  }

  .el-aside {
    text-align: center;
    line-height: 200px;
    border-right: 1px solid  #eaeaea;
  }

  .el-main {
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>

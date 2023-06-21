<template>
  <div id="flex">
    <div id="wrap" class="wrap">
      <header class="header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dicta!</header>
      <div class="tablist">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet dolore nesciunt? Eligendi deleniti et aspernatur rerum facilis, sunt soluta.</div>
      <div class="main">
        <div class="aside">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo doloribus ut voluptates harum sequi, quod accusantium ad dolores quam placeat debitis, nulla nemo ducimus. Aliquam maiores incidunt fugit ratione blanditiis ipsam. Quis repellat suscipit ipsam laudantium earum velit delectus!
        </div>
        <div class="contents _1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quam? Magnam, cum cupiditate eos vero, iste a doloremque temporibus non totam harum quibusdam veniam. Eligendi, fugiat similique ex facere, dolor dicta voluptatibus distinctio atque ea minus, quae quod? Odio unde dicta tempore voluptate consequuntur illum debitis, consequatur asperiores ullam enim at quibusdam libero maxime facilis nostrum, consectetur obcaecati. Minima, ipsa perspiciatis et sunt alias similique earum. Aspernatur neque quibusdam possimus cupiditate quaerat animi, sint consequatur inventore laborum mollitia aperiam minima fugiat delectus numquam nihil aliquid harum corporis dolor repellendus distinctio perspiciatis eius! Odio magni, consequuntur commodi similique iusto pariatur aspernatur iste magnam nisi optio maxime earum exercitationem dicta maiores eveniet, repellendus possimus et necessitatibus omnis. Provident repudiandae in, voluptas doloremque adipisci facilis, culpa hic laborum voluptate quis nemo, officiis perferendis sint? Veniam velit doloremque eum facere molestiae harum? Expedita mollitia quaerat tenetur excepturi aspernatur. Necessitatibus voluptas nulla inventore sunt, ipsam corrupti cumque quidem cupiditate aliquid quae quis minus rerum sit alias! Est numquam vel deserunt velit voluptas recusandae quam beatae nam illo blanditiis reiciendis quaerat incidunt, ducimus consequuntur asperiores, voluptatem omnis dolore placeat porro. Eligendi blanditiis minima aliquam, tenetur sequi ipsum soluta repudiandae iste officia, libero eos accusamus vero maiores!
        </div>
        <div class="contents _2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, quam? Magnam, cum cupiditate eos vero, iste a doloremque temporibus non totam harum quibusdam veniam. Eligendi, fugiat similique ex facere, dolor dicta voluptatibus distinctio atque ea minus, quae quod? Odio unde dicta tempore voluptate consequuntur illum debitis, consequatur asperiores ullam enim at quibusdam libero maxime facilis nostrum, consectetur obcaecati. Minima, ipsa perspiciatis et sunt alias similique earum. Aspernatur neque quibusdam possimus cupiditate quaerat animi, sint consequatur inventore laborum mollitia aperiam minima fugiat delectus numquam nihil aliquid harum corporis dolor repellendus distinctio perspiciatis eius! Odio magni, consequuntur commodi similique iusto pariatur aspernatur iste magnam nisi optio maxime earum exercitationem dicta maiores eveniet, repellendus possimus et necessitatibus omnis. Provident repudiandae in, voluptas doloremque adipisci facilis, culpa hic laborum voluptate quis nemo, officiis perferendis sint? Veniam velit doloremque eum facere molestiae harum? Expedita mollitia quaerat tenetur excepturi aspernatur. Necessitatibus voluptas nulla inventore sunt, ipsam corrupti cumque quidem cupiditate aliquid quae quis minus rerum sit alias! Est numquam vel deserunt velit voluptas recusandae quam beatae nam illo blanditiis reiciendis quaerat incidunt, ducimus consequuntur asperiores, voluptatem omnis dolore placeat porro. Eligendi blanditiis minima aliquam, tenetur sequi ipsum soluta repudiandae iste officia, libero eos accusamus vero maiores!
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Flex',
  components: {
  }
}
</script>

<style lang="scss" scoped>
/* 주식해둔 모든 내용들 주석 해제하면, 가운데로 모여있는 UI Layout. */
#flex {
  height: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}

.wrap {
  /* padding: 50px; */
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  height: 65px;
  background-color: mediumaquamarine;
}

.tablist {
  height: 70px;
  background-color: olive;
}

.main {
  overflow-y: scroll;
  display: flex;
  flex: 1;
}

.aside {
  display: flex;
  flex: none;
  width: 200px;
  background-color: #bfbab078;
}

.contents{
  display: flex;
  flex: 1;
  overflow: auto;
  background-color: beige;
}

.contents._2 {
  flex: 2;
}

</style>

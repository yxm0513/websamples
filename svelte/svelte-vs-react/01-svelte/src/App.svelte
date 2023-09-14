<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import HelloWorld from "./00-hello-world/hello-world.svelte";
  import DomUpdate from "./01-dom-update/dom-update.svelte";
  import { HandlingCSS } from "./02-handling-css";
  import ReactiveCode from "./03-reactive-code/reactive-code.svelte";
  import LifeCycle from "./04-life-cycle/life-cycle.svelte";
  import AsyncCallback from "./05-async-closure/async-callback.svelte";
  import ConditionalRendering from "./06-conditional-rendering/conditional-rendering.svelte";
  import CommonData from "./07-common-data/common-data.svelte";
  import Context from "./08-context/demo.svelte";
  import DataLoad from "./09-data-load/data-load.svelte";
  import WebComponent from "./10-web-components/web-component.svelte";
</script>

<main>
  <Router>
    <nav>
      <Link to="/hello-world" class="link"
        ><div class="link">00 Hello world</div></Link
      >
      <Link to="/render"><div class="link">01 DOM Update</div></Link>
      <Link to="/handlingCss"><div class="link">02 HandlingCSS</div></Link>
      <Link to="/reactiveCode"><div class="link">03 Reactive Code</div></Link>
      <Link to="/lifeCycle"><div class="link">04 Life Cycle</div></Link>
      <Link to="/asynccallback"><div class="link">05 Async Closure</div></Link>
      <Link to="/conditionalrendering"
        ><div class="link">06 Conditional Rendering</div></Link
      >
      <Link to="/commondata"><div class="link">07 Common Data</div></Link>
      <Link to="/context"><div class="link">08 Context</div></Link>
      <Link to="/dataload"><div class="link">09 Data Load</div></Link>
      <Link to="/webcomponent"><div class="link">10 Web Component</div></Link>
    </nav>

    <div>
      <Route path="/hello-world" primary={false}>
        <HelloWorld name="world" />
      </Route>
      <Route path="/render" primary={false}>
        <DomUpdate />
      </Route>
      <Route path="/handlingCss" primary={false}>
        <HandlingCSS />
      </Route>
      <Route path="/reactiveCode" primary={false}>
        <ReactiveCode />
      </Route>
      <Route path="/lifeCycle" primary={false}>
        <LifeCycle />
      </Route>
      <Route path="/asynccallback" primary={false}>
        <AsyncCallback />
      </Route>
      <Route path="/conditionalrendering" primary={false}>
        <ConditionalRendering />
      </Route>
      <Route path="/commondata" primary={false}>
        <CommonData />
      </Route>
      <Route path="/context" primary={false}>
        <Context />
      </Route>
      <Route path="/dataload" primary={false}>
        <DataLoad />
      </Route>
      <Route path="/webcomponent" primary={false}>
        <WebComponent />
      </Route>
    </div>
  </Router>
</main>

<style>
  nav {
    display: flex;
    gap: 5px;
  }

  .link {
    padding-right: 5px;
    border-right: 1px solid #ccc;
  }
</style>

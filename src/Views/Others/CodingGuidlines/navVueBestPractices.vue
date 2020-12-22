<template>
    <div class='navVueBestPractices'>
        https://blog.usejournal.com/vue-js-best-practices-c5da8d7af48d
        <div>
            <h1>VueJs best practices ✓
            </h1>
            <p>Hello fellow Devs!
            </p>
            <p>After researching for a while in the
                <a href= "https://vuejs.org/v2/guide/" data-href= "https://vuejs.org/v2/guide/" class= "markup--anchor markup--p-anchor" rel= "noopener" target= "_blank">VueJs docs
                    </a> and the web, I’ve created a list of best practices and style guides for a more correct or commonly accepted way of using VueJs.
            </p>
            <p>The points below are some of them functionality/optimisation related, others are VueJs naming conventions and element ordering. More detailed information can be found in the links in the
                <a href= "#26f6" data-href= "#26f6" class= "markup--anchor markup--p-anchor">summary</a>.
            </p>
            <h3>Clear event listeners on component destroy with&nbsp;
                <code class= "markup--code markup--h3-code">
                $off
            </code>
            </h3>
            <p name= "d865" id= "d865">When listening to events with
                <code>
                $on
            </code>, we should always remember to remove that listener with
                <code>$off</code> on <code>destroyed&#40;&#41;</code>. This prevents us from having memory leaks.</p>
            <h3>Always use kebab-case for event&nbsp;names</h3>
            <p>When emitting/listening to custom events, we should always use kebab-case. Why? Because the events will be transformed automatically into kebab-case anyway. We won’t ever be listening to an event in camelCase or PascalCase, therefore, makes more sense to declare the event the same way we’re going to listen to it: in kebab-case.</p>
            <pre><code>// Emitting<br>this.$emit&#40;'my-event'&#41; // instead of myEvent</code></pre>
            <pre><code>// Listening<br>v-on:my-event</code></pre>
            <h3>Avoid calling the same method in created and&nbsp;watch</h3>
            <p>If we need to trigger a method on component initialisation and on property change, the common practice is to do something like this:</p>
            <pre><code>watch: &#123;<br>  myProperty&#40;&#41; &#123;<br>    this.doSomething&#40;&#41;;<br>  &#125;<br>&#125;,<br>created&#40;&#41; &#123;<br>  this.doSomething&#40;&#41;;<br>&#125;,<br>methods: &#123;<br>  doSomething&#40;&#41; &#123;<br>     console.log&#40;'doing something...'&#41;;<br>  &#125;<br>&#125;,</code></pre>
            <p>Even though it may look right, the use of <code>created&#40;&#41;</code> here is redundant. We can put all our functionality in <code>watch</code>, thus avoiding having to duplicate code in <code>created&#40;&#41;</code> and still trigger it on component instantiation. Such as:</p>
            <pre><code>watch: &#123;<br>  myProperty: &#123;<br>    immediate: true, // forcing handler on initial status<br>    handler&#40;&#41; &#123;<br>      this.doSomething&#40;&#41;;<br>    &#125;<br>  &#125;<br>&#125;,<br>methods: &#123;<br>  doSomething&#40;&#41; &#123;<br>     console.log&#40;'doing something...'&#41;;<br>  &#125;<br>&#125;,</code></pre>
            <pre><code>// Even better solution<br>watch: &#123;<br>  myProperty: &#123;<br>    immediate: true, // forcing handler on initial status<br>    handler&#40;&#41; &#123;<br>      console.log&#40;'doing something...'&#41;; // No need to declare a function on methods for 1 use case<br>    &#125;<br>  &#125;<br>&#125;,</code></pre>
            <h3>Always use&nbsp;:key in v-for&nbsp;loops</h3>
            <p>Is a common best practice to always add a&nbsp;<code>:key</code> to your template loops. A <code>v-for</code> without a&nbsp;<code>:key</code> can lead to hard to find errors, especially with animations.</p>
            <h3>Use $_ for mixins properties</h3>
            <p>Mixins are a great way to get repeated code into one single block and import it as many times as you want, but <em>&#40;and is a big but&#41;</em>, this can lead to several issues. In this point we’ll address the issue of <strong>overlapping properties</strong>.</p>
            <p>When we import a mixin into our Component we’re <em>merging</em> the mixin code with our component code, now, what happens with property that have the same name? Component will always have the upper hand, Component’s properties have higher priority.<br>What if I want my mixin to have more priority? You can’t assign priority, but you can avoid properties from overlapping or even from overwriting by choosing a correct <strong>naming convention</strong>.</p>
            <p>In order to differentiate mixin properties from Component properties we use <code>$_</code>. Why these symbols? Well, several reasons:</p>
            <ol>
                <li>Convention from VueJs style guide</li>
                <li><code>_</code> is reserved for Vue's private properties</li>
                <li><code>$</code> is reserved for Vue's ecosystem</li>
            </ol>
            <p>In <a href= "https://vuejs.org/v2/style-guide/#Private-property-names-essential" data-href= "https://vuejs.org/v2/style-guide/#Private-property-names-essential" rel= "noopener" target= "_blank">VueJs style guide</a> you’ll find that they’re suggesting to add the name of the mixin, example: <code>$_myMixin_updateUser</code>.</p>
            <p>I found that adding the mixin name was creating more confusion than readability. But it also depends on the mixin, the situation and the developer.</p>
            <p>By adding a simple <code>$_</code>, like in <code>$_updateUser</code>, I found that the code was way more readable, and could differentiate between Component and Mixin with ease.</p>
            <h3>What’s used in mixin should be grabbed inside the&nbsp;mixin</h3>
            <p>Following up on previous point, mixins have another issue: We forget about stuff.</p>
            <p>If we create a mixin that uses, let’s say, <code>this.language</code> and this property is not defined or grabbed from the store inside the mixin, then the Component where the mixin is defined has to contain the <code>language</code> property.</p>
            <p>As you can already tell, this is hugely error prone. In order to avoid these errors, we grab what the mixin needs <strong>inside</strong> the mixin itself. Don’t worry if we’re grabbing stuff twice, VueJs is smart and won’t do double work if detects that the same stuff is being grabbed from the Store <em>&#40;as most cases will be grabbing stuff from Vuex&#41;</em></p>
            <h3>Use PascalCase or kebab-case for single file components</h3>
            <p>PascalCase has a better integration with editors and allows a better autocomplete/import functionality among the commonly used IDEs.</p>
            <p>kebab-case is the way to go if we want to avoid issues with case insensitive file systems.</p>
            <h3>Use prefix for Base component names</h3>
            <p>Presentational, dumb, or pure components should have a prefix that distinguishes them from other non pure components. This improves a lot the readability of the project and the knowledge transfer between teams and developers.</p>
            <h3>Use PascalCase for component names in&nbsp;JS</h3>
            <p>In JavaScript, PascalCase is the convention for classes and prototype constructors, makes sense that Vue components also use PascalCase.</p>
            <p>If we’re using <strong>only</strong> global component definitions via <code>Vue.component</code>, is recommended to use kebab-case.</p>
            <h3><span>Prop names should always use camelCase during declaration, but kebab-case in templates </span></h3>
            <p>Following the convention of each language: JavaScript <em>&#40;camelCase&#41;</em> and HTML <em>&#40;kebab-case&#41;</em>, makes sense that a <code>prop</code> is defined in camelCase in JS and used in kebab-case in HTML.</p>
            <h3>Use Component options order from style&nbsp;guide</h3>
            <p>It may seem dull, but following the same order for all the options of a Component across the entire project helps a lot when looking for stuff and when creating new Components.</p>
            <p>The VueJs convention can be found in the <a href= "https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended" data-href= "https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended" class= "markup--anchor markup--p-anchor" rel= "noopener" target= "_blank">style guide</a>.</p>
            <h3>Never use v-if on the same element as&nbsp;v-for</h3>
            <p>This is a performance killer, the bigger the list the more performance will suffer from this bad practice.</p>
            <p>Let’s explain with code, immagine the following case scenario:</p>

            <!-- <pre><code>&lt;ul&gt;<br>  &lt;li<br>    v-for&#61;&bdquo;game in games&bdquo;<br>    v-if&#61;&bdquo;game.isActive&bdquo;<br>    :key&#61;&bdquo;game.slug&bdquo;<br>  &gt;<br>    &#123;&#123; game.title &#125;&#125;<br>  &lt;li&gt;<br>&lt;/ul&gt;</code></pre>
            <p>Will be evaluated similar to the following:</p>
            <pre><code>this.games.map&#40;function &#40;game&#41; &#123;<br>  if &#40;game.isActive&#41; &#123;<br>    return game.title<br>  &#125;<br>&#125;&#41;</code></pre> -->
                       <p>We can see here that we’ll have to iterate though the entire list of <code>games</code>, whether or not the active <code>games</code> have been changed or not.</p>
            <p>In other frameworks, like Angular, this practice would just not compile <em>&#40;</em><code><em>*ngIf</em></code><em> can't go in the same element where there is an </em><code><em>*ngFor</em></code><em>&#41;</em>.</p>
            <h3>Actions must always&nbsp;return</h3>
            <p>This is fruit of struggling with <code>async</code>/<code>await</code> and Vuex actions.</p>
            <p>Take the following example:</p>
            <pre><code>// Store<br>&#91;SOME_ACTION&#93; &#40;&#41; &#123;<br>   // Doing stuff that takes a while<br>   console.log&#40;'Action done'&#41;;<br>&#125;</code></pre>
            <pre><code>// Consuming action<br>async doSomething&#40;&#41; &#123;<br>  await dispatch&#40;SOME_ACTION&#41;;<br>  console.log&#40;'Do stuff now'&#41;;<br>&#125;</code></pre>
            <pre><code>This will output:<br>// Do stuff now<br>// Action done</code></pre>
            <p>This happens because <code>await</code> doesn't know what to <code>await</code> for, as instead, if we are actually returning a <code>Promise.resolve&#40;&#41;</code>, the <code>await</code> will wait for the resolve and then move on.</p>
            <pre><code>// Store<br>&#91;SOME_ACTION&#93; &#40;&#41; &#123;<br>   // Doing stuff that takes a while<br>   console.log&#40;'Action done'&#41;;<br>   Promise.resolve&#40;&#41;;<br>&#125;</code></pre>
            <pre><code>// Consuming action<br>async doSomething&#40;&#41; &#123;<br>  await dispatch&#40;SOME_ACTION&#41;;<br>  console.log&#40;'Do stuff now'&#41;;<br>&#125;</code></pre>
            <pre><code>This will output:<br>// Action done<br>// Do stuff now</code></pre>
            <h3>Use selectors inside actions and&nbsp;getters</h3>
            <p>We create selectors for a reason, not only to be used all around the app, but also within the Vuex Store.</p>
            <p>With code is better explained:</p>
            <pre><code>// We have this selector<br>export const language &#61; &#40;state&#41; &#61;&gt; state.userConfig.language;</code></pre>
            <pre><code>// In one of our actions, we need language:<br><br></code></pre>
            <pre><code>// Bad<br>&#91;GET_GAMES&#93;&#40;&#123; commit, rootState &#125;&#41; &#123;<br>   const lang &#61; rootState.userConfig.language;<br>   // Do stuff...<br>&#125;<br><br></code></pre>
            <pre><code>// Good<br>&#91;GET_GAMES&#93;&#40;&#123; commit, rootState &#125;&#41; &#123;<br>   const lang &#61; language&#40;rootState&#41;;<br>   // Do stuff...<br>&#125;</code></pre>
            <h3>Summary</h3>
            <ol class= "postList">
                <li><strong>Clear event listeners on component destroy with $off </strong>
                <a href= "https://vuejs.org/v2/api/#vm-off" data-href= "https://vuejs.org/v2/api/#vm-off" rel= "noopener" target= "_blank">
                <strong>source</strong></a></li>
                <li><strong>Always use kebab-case for event names </strong><a href= "https://vuejs.org/v2/guide/components-custom-events.html#Event-Names" data-href= "https://vuejs.org/v2/guide/components-custom-events.html#Event-Names" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>Avoid calling the same method in created and watch </strong><a href= "https://learn-vuejs.github.io/vue-patterns/patterns/#productivity-tips" data-href= "https://learn-vuejs.github.io/vue-patterns/patterns/#productivity-tips" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>Always use&nbsp;:key in v-for loops </strong><a href= "https://vuejs.org/v2/style-guide/#Keyed-v-for-essential" data-href= "https://vuejs.org/v2/style-guide/#Keyed-v-for-essential" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>Use $_ for mixins properties </strong><a href= "https://vuejs.org/v2/style-guide/#Private-property-names-essential" data-href= "https://vuejs.org/v2/style-guide/#Private-property-names-essential" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>What’s used in mixin should be grabbed inside the mixin</strong></li>
                <li><strong>Use PascalCase or kebab-case for single file components </strong><a href= "https://vuejs.org/v2/style-guide/#Single-file-component-filename-casing-strongly-recommended" data-href= "https://vuejs.org/v2/style-guide/#Single-file-component-filename-casing-strongly-recommended" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>Use prefix for Base Component names </strong><a href= "https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended" data-href= "https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>Use PascalCase for component names in JS </strong><a href= "https://vuejs.org/v2/style-guide/#Component-name-casing-in-JS-JSX-strongly-recommended" data-href= "https://vuejs.org/v2/style-guide/#Component-name-casing-in-JS-JSX-strongly-recommended" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>Prop names should always use camelCase during declaration, but kebab-case in templates </strong><a href= "https://vuejs.org/v2/style-guide/#Prop-name-casing-strongly-recommended" data-href= "https://vuejs.org/v2/style-guide/#Prop-name-casing-strongly-recommended" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>Use Component options order from style guide </strong><a href= "https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended" data-href= "https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>Never use v-if on the same element as v-for </strong><a href= "https://vuejs.org/v2/style-guide/#Avoid-v-if-with-v-for-essential" data-href= "https://vuejs.org/v2/style-guide/#Avoid-v-if-with-v-for-essential" rel= "noopener" target= "_blank"><strong>source</strong></a></li>
                <li><strong>Actions must always return. This avoids misunderstanding on when the action is done.</strong></li>
                <li><strong>Use selectors inside actions and getters.</strong></li>
            </ol>
            <h3>Sources</h3>
            <ul class= "postList">
                <li><a href= "https://vuejs-tips.github.io/cheatsheet/" data-href= "https://vuejs-tips.github.io/cheatsheet/" rel= "noopener" target= "_blank"><strong>https://vuejs-tips.github.io/cheatsheet/</strong></a></li>
                <li><a href= "https://learn-vuejs.github.io/vue-patterns/patterns/" data-href= "https://learn-vuejs.github.io/vue-patterns/patterns/" rel= "noopener" target= "_blank"><strong>https://learn-vuejs.github.io/vue-patterns/patterns/</strong></a></li>
                <li><a href= "https://vuejs.org/v2/style-guide/" data-href= "https://vuejs.org/v2/style-guide/" rel= "noopener" target= "_blank"><strong>https://vuejs.org/v2/style-guide/</strong></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

    name: 'navVueBestPractices',
} //default
</script>

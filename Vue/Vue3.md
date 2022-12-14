[TOC]

# Vue3

****

*==ð[Vue.js - v3](https://vuejs.org/)**:** **æ¸è¿å¼ `JavaScript` æ¡æ¶**==*

<center><img src="images/Vue.png" alt="Vue" style="zoom:110%;" title="Vue" /></center>









## â­çå½å¨æ

<center><img src="images/lifecycle.vue3.png" alt="Vue3å®ä¾çå½å¨æ" style="zoom:110%;border: 1.5px solid silver;" title="Vue3å®ä¾çå½å¨æ" /></center>













### ðçå½å¨æé©å­

|  çå½å¨æé©å­å½æ°   |                    æ§è¡æ¶æº                    |                   æå±é¶æ®µ                   |
| :-----------------: | :--------------------------------------------: | :------------------------------------------: |
| **`beforeCreate`**  |          ***å®ä¾åå§åå®æä¹åè°ç¨***          | ***<span style=color:red;>åå§é¶æ®µ</span>*** |
|    **`created`**    |    ***å®ä¾å¤çå®ææç¶æç¸å³çéé¡¹åè°ç¨***    | ***<span style=color:red;>åå§é¶æ®µ</span>*** |
|  **`beforeMount`**  |            ***å®ä¾è¢«æè½½ä¹åè°ç¨***            | ***<span style=color:red;>æè½½é¶æ®µ</span>*** |
|    **`mounted`**    |            ***å®ä¾è¢«æè½½ä¹åè°ç¨***            | ***<span style=color:red;>æè½½é¶æ®µ</span>*** |
| **`beforeUpated`**  |   ***ååºå¼ç¶æåæ´èæ´æ°å¶ `DOM`ä¹åè°ç¨***   | ***<span style=color:red;>æ´æ°é¶æ®µ</span>*** |
|    **`updated`**    | ***ååºå¼ç¶æåæ´èæ´æ°å¶ `DOM`å®æä¹åè°ç¨*** | ***<span style=color:red;>æ´æ°é¶æ®µ</span>*** |
| **`beforeUnmount`** |            ***å®ä¾è¢«å¸è½½ä¹åè°ç¨***            | ***<span style=color:red;>å¸è½½é¶æ®µ</span>*** |
|   **`unmounted`**   |            ***å®ä¾è¢«å¸è½½ä¹åè°ç¨***            | ***<span style=color:red;>å¸è½½é¶æ®µ</span>*** |





















## ð§Vue CLI

### åå»ºé¡¹ç®æ¹å¼

- ==***åºäºå½ä»¤è¡åå»º***==

  - ~~~cmd
    vue create é¡¹ç®åç§°
    ~~~

- ==***åºäºå¯è§åé¢æ¿åå»º***==

  - ~~~cmd
    vue ui
    ~~~













### ð·UIåå»ºé¡¹ç®æ­¥éª¤

> ==***<span style=color:red;>UIæ¬è´¨</span>ï¼å¯è§åçé¢æ¿ééå°ç¨æ·çéç½®ä¿¡æ¯åï¼å¨åå°åºäºå½ä»¤è¡çæ¹å¼èªå¨åå§åé¡¹ç®***==

1. ***åå»º`Create`***

   + <left><img src="images/vue-ui(1).png" alt="æ­¥éª¤1" style="zoom:120%;border: 1px solid silver;" title="æ­¥éª¤1" /></left>

2. ***è¯¦è¯·`Details`***

   + <left><img src="images/vue-ui(2).png" alt="æ­¥éª¤2" style="zoom:45%;border: 3px solid silver;" title="æ­¥éª¤2" /></left>

3. ***é¢è®¾`Presets`***

   + <left><img src="images/vue-ui(3).png" alt="æ­¥éª¤3" style="zoom:45%;border: 3px solid silver;" title="æ­¥éª¤3" /></left>

4. ***åè½`Features`***

   + <left><img src="images/vue-ui(4).png" alt="æ­¥éª¤4" style="zoom:45%;border: 3px solid silver;" title="æ­¥éª¤4" /></left>

5. ***éç½®`Configuration`***

   + <left><img src="images/vue-ui(5).png" alt="æ­¥éª¤5" style="zoom:45%;border: 3px solid silver;" title="æ­¥éª¤5" /></left>

6. ***ä¿è¯æ°é¢è®¾`Save new preset`***

   + <left><img src="images/vue-ui(6).png" alt="æ­¥éª¤6" style="zoom:50%;border: 3px solid silver;" title="æ­¥éª¤6" /></left>

7. ***åå»ºæåï¼èªå¨è¿å¥<span style=color:red;>é¡¹ç®ä»ªè¡¨ç</span>***

   + <left><img src="images/vue-ui(7).png" alt="æ­¥éª¤7" style="zoom:40%;border: 2px solid silver;" title="æ­¥éª¤7" /></left>























## :zap:Vite

==***[Vite](https://cn.vitejs.dev/)ï¼åºäºåç`ES`æ¨¡å æä¾äºä¸°å¯çåå»ºåè½ï¼éåº¦å¿«æ¨¡åç­æ´æ°ï¼ä¸ä¸ä»£åç«¯å¼åä¸æå»ºå·¥å·***==

<center><img src="images/vite.png" alt="vite" style="zoom:45%;" title="vite" /></center>











### ð·åå»ºé¡¹ç®æ­¥éª¤

1. 1ï¸â£***å¨éè¦åå»ºé¡¹ç®çç®å½ç»ç«¯ä¸­è¾å¥å½ä»¤***

   + ~~~cmd
     npm init vite-app é¡¹ç®çåç§°
     ~~~

2. 2ï¸â£***éè¦å®è£åå»º `vite-app` æ¯å¦ç»§ç»­***

   + <left><img src="images/vite(1).png" alt="æ­¥éª¤1" style="zoom:90%;" title="æ­¥éª¤1" /></left>

3. 3ï¸â£***åå»ºé¡¹ç®æå***

   + <left><img src="images/vite(2).png" alt="æ­¥éª¤2" style="zoom:110%;" title="æ­¥éª¤2" /></left>













### main.js

~~~js
// å¯¼å¥ createApp å½æ°,ç¨äºåå»º vue çåé¡µé¢åºç¨ç¨åº
import { createApp } from 'vue'
// å¯¼å¥ App æ ¹ç»ä»¶
import App from './App.vue'
// å¯¼å¥å¨å±æ ·å¼
import './index.css'

/* åå»º SPA åºç¨çå®ä¾,å¹¶å°Appç»ä»¶ä¼ éç»createAppå½æ°
createApp(rootComponent, [rootProps])
	rootComponent : æ ¹ç»ä»¶
	rootProps : è¦ä¼ éç»æ ¹ç»ä»¶ç propsï¼å¯é
*/
const app = createApp(App)

// å°å¶æ¸²æå°mount()æå®çæè½½ç¹
app.mount('#app')
~~~















## åºç¨å®ä¾

### config

> ==***æ¯ä¸ªåºç¨å®ä¾é½ä¼æ´é²ä¸ä¸ª `config` å¯¹è±¡ï¼å¯¹è¿ä¸ªå¯¹è±¡çéç½®è®¾å®***==

~~~js
console.log(app.config)
~~~













### globalProperties

> ==***ç¨äºæ³¨åè½å¤è¢«åºç¨åææç»ä»¶å®ä¾è®¿é®å°çå¨å±å±æ§çå¯¹è±¡***==

~~~js
app.config.globalProperties.$http = 'axios'
~~~













### use()

> ~~~js
> app.use(Plugin);
> ~~~
>
> ==***å®è£ä¸ä¸ªæä»¶***==













### component()

>~~~js
>app.component(componentName[, component]);
>~~~
>
>â        **`componentName`**  ï¼å¨å±ç»ä»¶ç**æ³¨ååç§°**
>
>â        **`component`**  ï¼éè¦å¨å±æ³¨åç**ç»ä»¶**
>
>==***æ³¨åæè·åä¸ä¸ªå¨å±ç»ä»¶***==

~~~js
// æ³¨åä¸ä¸ªéé¡¹å¯¹è±¡
app.component('my-component', {
    /* ... */
})

// å¾å°ä¸ä¸ªå·²æ³¨åçç»ä»¶
const MyComponent = app.component('my-component')
~~~















### directive()

> ~~~js
> app.directive(directiveName, [definition]);
> ~~~
>
> â		**`definitionName`**	ï¼å¨å±èªå®ä¹æä»¤çåç§°
>
> â		**`definition`**	ï¼å¨å±èªå®ä¹æä»¤çéç½®å¯¹è±¡
>
> ==***æ³¨åæè·åä¸ä¸ªå¨å±æä»¤***==

~~~js
// æ³¨åï¼å¯¹è±¡å½¢å¼çæä»¤ï¼
app.directive('my-directive', {
    /* èªå®ä¹æä»¤é©å­ */
})

// æ³¨åï¼å½æ°å½¢å¼çæä»¤ï¼
app.directive('my-directive', () => {
    /* ... */
})

// å¾å°ä¸ä¸ªå·²æ³¨åçæä»¤
const myDirective = app.directive('my-directive')
~~~















### mixin()

> ~~~js
> app.mixin(mixin);
> ~~~
>
> ==***åºç¨ä¸ä¸ªå¨å± `mixin`***==

















### mount()

> ~~~js
> app.mount(rootContainer)
> ~~~
>
> â		**`rootContainer`**	ï¼ä¸ä¸ªå®éç `DOM` åç´ æä¸ä¸ª `CSS` éæ©å¨
>
> ==***å°åºç¨å®ä¾æè½½å¨ä¸ä¸ªå®¹å¨åç´ ä¸­***==











### unmount()

> ~~~js
> app.unmount()
> ~~~
>
> ==***å¸è½½ä¸ä¸ªå·²æè½½çåºç¨å®ä¾***==



















## ð©ç»ä»¶

### ç»ä»¶çè¿è¡è¿ç¨

<center><img src="images/%E7%BB%84%E4%BB%B6%E7%9A%84%E8%BF%90%E8%A1%8C%E8%BF%87%E7%A8%8B.png" alt="ç»ä»¶çè¿è¡è¿ç¨" style="zoom:90%;border: 2px solid silver;" title="ç»ä»¶çè¿è¡è¿ç¨" /></center>















### template

> ==***`<template>` æ¯ `vue` æä¾çå®¹å¨æ ç­¾ï¼åªèµ·å°åè£¹æ§è´¨çä½ç¨ï¼å®ä¸ä¼è¢«æ¸²æä¸ºçæ­£ç `DOM` åç´ ***==
>
> ###### :grey_exclamation:==***`vue3` ä¸­ï¼`<template>` ä¸­æ¯æå®ä¹å¤ä¸ªæ ¹èç¹***==

~~~vue
<template>
	<h2>Title</h2>
	<div>Content ...</div>
</template>
~~~











### æ³¨åç»ä»¶

+ ==***å±é¨æ³¨å***==
+ ==***å¨å±æ³¨å***==











#### å±é¨æ³¨å

~~~js
// å¯¼å¥ç»ä»¶
import Test from './components/Test.vue'

export default {
    name: 'App',
    components: { // components èç¹ä¸­æ³¨åå±é¨ç»ä»¶
        Test
    }
}
~~~

~~~vue
<template>
	<!-- ä½¿ç¨å±é¨æ³¨åçç»ä»¶ -->
	<Test/>
</template>
~~~

















#### å¨å±æ³¨å

~~~js
/* main.js */
import { createApp } from 'vue'
import App from './App.vue'

// (1)å¯¼å¥ç»ä»¶
import Test from './components/Test.vue'

const app = createApp(App)

// (2)å¨å±æ³¨åç»ä»¶
app.component('ke-test', Test);

app.mount('#app')
~~~

~~~vue
<template>
	<!-- ä½¿ç¨å¨å±æ³¨åçç»ä»¶ -->
	<ke-test/>
</template>
~~~















### name æ³¨åç»ä»¶å

~~~js
export default {
    name: 'KeTest' // nameå±æ§ä¸ºå½åçç»ä»¶å
}
~~~

~~~js
import Test from './components/Test.vue'

// ä½¿ç¨ç»ä»¶çname å±æ§æ³¨å
app.component(Test.name, Test);
~~~















### emits

> ==***ç¨äºå£°æç±ç»ä»¶è§¦åçèªå®ä¹äºä»¶***==

+ ~~~js
  export default {
      emits: ['init'],
      created() {
          this.$emit('init')
      }
  }
  ~~~















### ð¹ä¾èµæ³¨å¥

> ==***ç¶ç»ä»¶ç¸å¯¹äºå¶ææçåä»£ç»ä»¶ï¼ä¼ä½ä¸º<span style=color:red;>ä¾èµæä¾è</span>ï¼ä»»ä½åä»£çç»ä»¶æ ï¼æ è®ºå±çº§æå¤æ·±ï¼é½å¯ä»¥<span style=color:red;>æ³¨å¥</span>ç±ç¶ç»ä»¶æä¾ç»æ´æ¡é¾è·¯çä¾èµ***==

<center><img src="images/provide-inject.png" alt="ä¾èµæ³¨å¥" style="zoom:90%;border: 2px solid silver;" title="ä¾èµæ³¨å¥" /></center>















#### Provide (æä¾)

> ==*è¦ä¸ºç»ä»¶åä»£æä¾æ°æ®ï¼éè¦ä½¿ç¨å° **`provide`** éé¡¹*==

+ ###### *å¯¹è±¡å½¢å¼*

  + ~~~js
    export default {
        provide: {
            message: 'hello ke!'
        }
    }
    ~~~

+ ###### *å½æ°å½¢å¼*

  + ~~~js
    export default {
      data() {
          return {
              message: 'hello ke!'
          }
      },
      provide() {
          // ä½¿ç¨å½æ°çå½¢å¼ï¼å¯ä»¥è®¿é®å° this
          return {
              message: this.message
          }
      }
    }
    ~~~















#### Inject (æ³¨å¥)

> ==*è¦æ³¨å¥ä¸å±ç»ä»¶æä¾çæ°æ®ï¼éä½¿ç¨ **`inject`** éé¡¹æ¥å£°æ*==

+ ###### *æ°ç»å½¢å¼*

  + ~~~js
    export default {
        inject: ['message'],
        created() {
            console.log(this.message) // injected value
        }
    }
    ~~~

+ ###### *å¯¹è±¡å½¢å¼*

  + ~~~js
    export default {
        inject: {
            msg: { // msg æ¬å°å±æ§å
                from: 'message', // æ³¨å¥çæ¥æºå
                default: 'default value' // å£°ææ³¨å¥çé»è®¤å¼
            }
        }
    }
    ~~~























### ç»ä»¶ä¸ä½¿ç¨ v-model

> ==***åæ­¥ç»ä»¶åå¤çæ°æ®***==

+ ==*å­ç»ä»¶*==

  + ~~~html
    <button type="button" @click="$emit('update:number',number + 1)">{{ number }}++</button>
    ~~~

  + ~~~js
    export default {
        name: 'Counter',
        props: ['number'],
        emits: ['update:number'] // æ ¼å¼ update:å±æ§å
    }
    ~~~

+ ==*ç¶ç»ä»¶*==

  + ~~~vue
    <Counter v-model:number='count' />
    ~~~

  + ~~~js
    data() {
        return {
            count: 0
        }
    },
    components: {
        Counter
    }
    ~~~









### ðç»ä»¶ä¹é´çæ°æ®å±äº«

#### :arrow_down:ç¶åå­å±äº«

> ==***ç¶åå­å±äº«æ°æ®  ï¼éè¦ä½¿ç¨<span style=color:red;>èªå®ä¹å±æ§</span>***==

+ ==*ç¶ç»ä»¶*==

  ```html
  <!-- éè¿ Prop åå­ç»ä»¶ä¼ å¼ -->
  <Son :msg="message" :user="userinfo"></Son>
  ```

  ```js
  data() {
      return {
          message: "Hello Vue ...",
          userinfo: { username: "linke", age: 19 },
      };
  }
  ```

+ ==*å­ç»ä»¶*==

  ```html
  <div>{{ msg }}</div>
  <div>{{ user }}</div>
  ```

  ```js
  export default {
      props: ["msg", "user"],
  };
  ```












#### :arrow_up:å­åç¶å±äº«

> ==***å­åç¶å±äº«æ°æ® ï¼éè¦ä½¿ç¨<span style=color:red;>èªå®ä¹äºä»¶</span>***==

+ ==*å­ç»ä»¶*==

  ~~~html
  <input type="text" v-model="text" @change="changeText"/>
  ~~~

  ~~~js
  emits: ["getText"],
  data() {
      return {
          text: "",
      };
  },
  methods: {
      changeText() {
          this.$emit('getText', this.text);
      },
  }
  ~~~

+ ==*ç¶ç»ä»¶*==

  ~~~vue
  <!-- ä¼ éèªå®ä¹äºä»¶ -->
  <Son @get-text="getText"></Son>
  ~~~

  ~~~js
  data() {
      return {
          textFromSon: "",
      };
  },
  methods: {
      // èªå®ä¹äºä»¶çå¤çå½æ°
      getText(val) {
          this.textFromSon = val;
      },
  }
  ~~~

  













#### ðç¶å­ååæ°æ®åæ­¥

> ==***ç¶å­ååæ°æ®åæ­¥ï¼éè¦ä½¿ç¨ `v-model` æä»¤***==

+ ==*å­ç»ä»¶*==

  ~~~html
  <button type="button" @click="add">{{ number }}++</button>
  ~~~

  ~~~js
  name: 'Counter',
  props: ['number'],
  emits: ['update:number'],
  methods: {
      add() {
          this.$emit('update:number', this.number + 1)
      }
  }
  ~~~

+ ==*ç¶ç»ä»¶*==

  ~~~vue
  <!-- ä½¿ç¨å­ç»ä»¶ -->
  <Counter v-model:number='count' />
  ~~~

  ~~~js
  data() {
      return {
          count: 0
      }
  },
  components: {
      Counter
  }
  ~~~





















#### :twisted_rightwards_arrows:åå¼ç»ä»¶å±äº«

> ==***åå¼ç»ä»¶å±äº«æ°æ®  ï¼ä½¿ç¨ `EventBus` æ¹æ¡***==

<center><img src="images/EventBus.png" alt="EventBus" style="zoom:110%;border: 2px solid silver;"  title="EventBus" /></center>

+ ==*åå»º `eventBus.js` æ¨¡å*==

  + ~~~js
    // 1.å®è£ mitt å
    /* npm i mitt */
    
    // 2.å¯¼å¥ mitt å
    import mitt from 'mitt'
    
    // 3.åå»ºå¹¶å¯¼åº eventBus å®ä¾å¯¹è±¡
    export default mitt()
    ~~~

+ ==***å¨æ°æ®<span style=color:red;>åéæ¹</span>ï¼<span style=color:red;>è§¦åèªå®ä¹äºä»¶</span>***==

  + ~~~js
    import bus from "./eventBus.js";
    
    data() {
        return {
            // å®ä¹åéåå¼ç»ä»¶æ°æ®
            text: "",
        };
    },
    watch: {
        text(newVal) {
            // bus.emit('äºä»¶åç§°', è¦åéçæ°æ®)
            bus.emit("textChange", newVal);
        },
    }
    ~~~

+ ==*å¨æ°æ®<span style=color:red;>æ¥æ¶æ¹</span>ï¼<span style=color:red;>æ³¨åä¸ä¸ªèªå®ä¹äºä»¶</span>*==

  + ~~~js
    import bus from "./eventBus.js";
    
    data() {
        return {
            // å®ä¹åéæ¥æ¶åå¼ç»ä»¶ä¼ éçæ°æ®
            textFrom: "",
        };
    },
    created() {
        // å®ä¹èªå®ä¹æ°æ® bus.$on('äºä»¶åç§°', äºä»¶å¤çå½æ°)
        bus.on("textChange", (val) => {
            this.textFrom = val;
        });
    }
    ~~~



















#### â¬åä»£ç»ä»¶å±äº«

>==***åä»£ç»ä»¶å³ç³»æ°æ® ï¼å¯ä»¥ä½¿ç¨ `provide` å `inject` å®ç°åä»£å³ç³»ç»ä»¶ä¹é´çæ°æ®å±äº«***==

+ ==*ç¶ç»ä»¶*==

  + ~~~js
    data() {
        return {
            count: 0
        }
    },
    provide() { // provide å½æ°è¿åçå¯¹è±¡ä¸­å®ä¹éè¦åå­å­ç»ä»¶å±äº«çæ°æ®
        return {
    		num: computed(() => this.count), // ä½¿ç¨ computed å½æ°å°æ°æ®åè£ä¸ºååºå¼æ°æ®
            msg: 'info ..' // é»è®¤æåµä¸å±äº«çæ°æ®ä¸æ¯ååºå¼ç
        }
    }
    ~~~

+ ==*åä»£ç»ä»¶*==

  + ~~~js
    /* å¨ inject ä¸­å£°æéè¦æ¥æ¶çæ°æ®
    	(1)num æ°æ®æ¯ååºå¼çï¼å¨ä½¿ç¨æ¶å¿é¡»ä½¿ç¨ ".value" è·åæ°æ®å¼
    	(2)å¯éç½®ä»¥ä¸è®© computed å½æ°ä¸åèªå¨è§£å,ä¸éè¦ ".value" ä»¥è·å computed è®¡ç®åçå¼
    	    app.config.unwrapInjectedRef = true
    */
    inject: ['num', 'msg'],
    ~~~

    ~~~html
    num={{num.value}},msg={{msg}}
    
    <!-- æ¸²æç»æ -->
    num=0,msg=info ...
    ~~~

















## ð èªå®ä¹æä»¤

+ ###### *<span style=color:red;>å±é¨</span>èªå®ä¹æä»¤*

+ ###### *<span style=color:red;>å¨å±</span>èªå®ä¹æä»¤*













### å±é¨èªå®ä¹æä»¤

>==***å¨ `directives` èç¹ä¹ä¸­å®ä¹å±é¨èªå®ä¹æä»¤***==

```js
export default {
    directives: { // å±é¨èªå®ä¹æä»¤çèç¹
        focus: { // å®ä¹åä¸º focus çæä»¤,æåéç½®å¯¹è±¡
            mounted: function (el) { // å½è¢«ç»å®çåç´ æå¥å° DOM ä¸­æ¶
                el.focus(); // èç¦åç´ 
            },
        },
	},
};
```

```vue
<!-- ä½¿ç¨(éè¦å ä¸ v- åç¼) -->
<input v-focus />
```















### å¨å±èªå®ä¹æä»¤

> ~~~js
> app.directive(name, [directive])
> ~~~
>
> â		**`name`**ï¼å¨å±èªå®ä¹æä»¤å
>
> â		**`directive`**ï¼å¨å±èªå®ä¹æä»¤çéç½®å¯¹è±¡
>
> ==***æ³¨åæè·åå¨å±æä»¤***==

~~~js
const app = createApp({})

app.directive('focus', {
    // å½è¢«ç»å®çåç´ æå¥å° DOM ä¸­æ¶
    mounted: function (el) {
        el.focus()
    },
});
~~~



















### é©å­å½æ°

==***ä¸ä¸ªæä»¤å®ä¹å¯¹è±¡å¯ä»¥æä¾å¦ä¸å ä¸ªé©å­å½æ° <span style=color:red;>(åä¸ºå¯é)</span>***==

:grey_exclamation:==***é©å­å½æ°ä¸­ç `this` åæå `window`***==

+ `created`ï¼åªè°ç¨ä¸æ¬¡ï¼æä»¤ç¬¬ä¸æ¬¡ç»å®å°åç´ æ¶è°ç¨
+ `beforeMount`ï¼å¨åç´ è¢«æå¥å° `DOM` åè°ç¨
+ `mounted`ï¼è¢«ç»å®åç´ æå¥ç¶èç¹æ¶è°ç¨
+ `beforeUpdate`ï¼æå¨ç»ä»¶çæ´æ°ä¹åè°ç¨
+ `updated`ï¼æå¨ç»ä»¶çæ´æ°ä¹åè°ç¨
+ `beforeUnmount`ï¼ç»å®åç´ çç¶ç»ä»¶å¸è½½åè°ç¨
+ `unmounted`ï¼åªè°ç¨ä¸æ¬¡ï¼æä»¤ä¸åç´ è§£ç»æ¶è°ç¨















### é©å­å½æ°åæ°

==***æä»¤é©å­å½æ°ä¼è¢«ä¼ å¥ä»¥ä¸åæ°***==

+ `el`ï¼æä»¤ç»å®å°çåç´ 
+ `binding`ï¼ä¸ä¸ªå¯¹è±¡ï¼åå«ä»¥ä¸å±æ§
  + `value`ï¼ä¼ éç»æä»¤çå¼
  + `oldValue`ï¼ä¹åçå¼
  + `arg`ï¼ä¼ éç»æä»¤çåæ°
  + `modifiers`ï¼ä¸ä¸ªåå«ä¿®é¥°ç¬¦çå¯¹è±¡
  + `instance`ï¼ä½¿ç¨è¯¥æä»¤çç»ä»¶å®ä¾
  + `dir`ï¼æä»¤çå®ä¹å¯¹è±¡
+ `vnode`ï¼ä»£è¡¨ç»å®åç´ çåºå±















### å½æ°ç®å

==***ä»ä»éè¦å¨ `mounted` å `updated` ä¸å®ç°ç¸åçè¡ä¸º***==

~~~js
app.directive('color', (el, binding) => {
    // è¿ä¼å¨ `mounted` å `updated` æ¶é½è°ç¨
    // ...
});
~~~

















## ð©è·¯ç±

### å®è£

~~~cmd
npm i vue-router@next	# vue3å¯¹åºçæ¬
~~~













### åºæ¬ä½¿ç¨

1. ***åå»ºè·¯ç±æ¨¡å `src/router/index.js`***

   + ~~~js
     /* å¯¼å¥ createRouter, createWebHashHistory æ¹æ³
         createRouter ç¨äºåå»ºè·¯ç±å®ä¾å¯¹è±¡
         createWebHashHistory ç¨äºæå®è·¯ç±çå·¥ä½æ¨¡å¼(hashæ¨¡å¼)
      */
     import { createRouter, createWebHashHistory } from 'vue-router'
     
     // å¯¼å¥è·¯ç±ç»ä»¶
     import Header from '@/components/Header.vue'
     import Main from '@/components/Main.vue'
     import Footer from '@/components/Footer.vue'
     
     // åå»ºè·¯ç±å¯¹è±¡,å¹¶éç½®è·¯ç±å¹éè§å
     const router = createRouter({
         history: createWebHashHistory(), // æå®è·¯ç±çå·¥ä½æ¨¡å¼
         routes: [ // å®ä¹ "hashå°å" ä¸ "ç»ä»¶" ä¹é´çå¯¹åºå³ç³»
             // path è¡¨ç¤ºå¹éç hash å°å, component è¡¨ç¤ºå¯¹åºçè·¯ç±ç»ä»¶
             { path: '/header', component: Header },
             { path: '/main', component: Main },
             { path: '/footer', component: Footer }
         ]
     })
     
     // å¯¼åºå¯¹è±¡
     export default router
     ~~~

2. ***å¯¼å¥å¹¶æè½½è·¯ç±æ¨¡å `src/main.js`***

   + ~~~js
     import { createApp } from 'vue'
     import App from './App.vue'
     // å¯¼å¥è·¯ç±æ¨¡å
     import router from './router'
     
     const app = createApp(App)
     
     // æè½½è·¯ç±æ¨¡å
     app.use(router)
     
     app.mount('#app')
     ~~~

3. ***å£°æè·¯ç±é¾æ¥åå ä½ç¬¦***

   + ~~~vue
     <!-- 1.å®ä¹è·¯ç±é¾æ¥ -->
     <router-link to="/header">header</router-link>
     <router-link to="/main">main</router-link>
     <router-link to="/footer">footer</router-link>
     
     <!-- 2.å®ä¹è·¯ç±å ä½ç¬¦ -->
     <router-view></router-view>
     ~~~















### è·¯ç±é«äº®

1. ==***é»è®¤é«äº® `class` ç±»***==
2. ==***èªå®ä¹é«äº® `class` ç±»***==













#### é»è®¤é«äº®

> ==***è¢«æ¿æ´»çè·¯ç±é¾æ¥ï¼é»è®¤ä¼åºç¨ä¸ä¸ªå«å `router-link-active` çç±»å***==
>
> ==***è·¯ç±é¾æ¥è¢«ç²¾åæ¿æ´»æ¶ï¼é»è®¤ä¼åºç¨ä¸ä¸ªå«å `router-link-exact-active` çç±»å***==

~~~css
/* 
æ¹å¼(1): å¨ index.css å¨å±æ ·å¼è¡¨ä¸­è®¾ç½®å¨å±æ ·å¼
æ¹å¼(2): å¨å½åæä»¶ä¸­è®¾ç½®å±é¨æ ·å¼
*/
.router-link-active {
    color: #42b983;
}

/* ç¨äºç²¾åæ¿æ´»çè·¯ç±é¾æ¥(<a>) */
.router-link-exact-active {
    // CSS ...
}
~~~













#### èªå®ä¹é«äº®

> ==***`linkActiveClass` ï¼ç¨äºæ¿æ´»çè·¯ç±çé»ç±»ï¼é»è®¤ `router-link-active`***==
>
> ==***`linkExactActiveClass` ï¼ç¨äºç²¾åæ¿æ´»çè·¯ç±çé»è®¤ç±»ï¼é»è®¤ `router-link-exact-active`***==

~~~js
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    linkActiveClass: 'router-active', // æ¹å¼(1)æå®è¢«æ¿æ´»çè·¯ç±ä¼å¨å±åºç¨è¯¥ç±»å
    routes,
})
~~~

~~~vue
<!-- éè¿è·¯ç±é¾æ¥ç active-class å±æ§å±é¨åºç¨ç±»å -->
<router-link active-class="footer" to="/footer">footer</router-link>
~~~















### :stop_sign:å¯¼èªå®å«

~~~js
const router = createRouter({ ... })

// æ³¨åä¸ä¸ªå¨å±åç½®å®å«
router.beforeEach((to, from) => {
    // ...
    // è¿å false ä»¥åæ¶å¯¼èª
    return false

    // è¿å ä¸ä¸ªè·¯ç±å­ç¬¦ä¸²
    /* return to.path === '/header' ? next() : '/header' */

    // è¿å ä¸ä¸ªè·¯ç±å¯¹è±¡
    /* return to.path === '/main' ? next() : { path: '/main' } */
    
    // å¦æä»ä¹é½æ²¡æ undefined æè¿å trueï¼åå¯¼èªæ¯ææç
})
~~~













#### å¯éçç¬¬ä¸ä¸ªåæ° next

~~~js
router.beforeEach((to, from, next) => {
    next() // å¯¼èªæ¾è¡
    // å¶ä»åè vue2 ä¸­å¯¼èªå®å«
}
~~~

















## ðComposition API

==***ç»åå¼ `API`***==











### ðsetup()

> ==***`setup()` é©å­æ¯å¨ç»ä»¶ä¸­ä½¿ç¨ç»åå¼ `API` çå¥å£***==
>
> :grey_exclamation:==***å¨ `setup()` å½æ°ä¸­è¿åçå¯¹è±¡ä¼æ´é²ç»æ¨¡æ¿åç»ä»¶å®ä¾***==
>
> :grey_exclamation:==***ä¹å¯ä»¥éè¿ç»ä»¶å®ä¾æ¥è·å `setup()` æ´é²çå±æ§***==
>
> â==***`setup` é©å­å¨ `beforeCreate` ä¹åæ§è¡***==

~~~js
export default {
    setup() {
        const count = 0
        // è¿åå¼ä¼æ´é²ç»æ¨¡æ¿åå¶ä»çéé¡¹å¼ API é©å­
        return {
            count
        }
    },
    mounted() {
        console.log(this.count) // 0
    }
}
~~~















#### è¿åæ¸²æå½æ°

> ==***`setup` ä¹å¯ä»¥è¿åä¸ä¸ª<span style=color:red;>æ¸²æå½æ°</span>ï¼èªå®ä¹æ¸²æåå®¹***==

~~~js
// å¼å¥æ¸²æå½æ°
import { h } from 'vue'

export default {
    setup() {
        return () => h('div', 'value')
    }
}
~~~













#### Props

> ==***`setup` å½æ°çç¬¬ä¸ä¸ªåæ°æ¯ç»ä»¶ç `props`ï¼`setup` å½æ°ç `props` æ¯ååºå¼ç***==
>
> :grey_exclamation:==***å¦æè§£æäº `props` å¯¹è±¡ï¼è§£æåºçåéå°ä¼ä¸¢å¤±ååºæ§***==

~~~js
export default {
    props: {
        title: String
    },
    setup(props) {
        console.log(props.title)
    }
}
~~~













#### ä¸ä¸æ

> ==***`setup` å½æ°çç¬¬äºä¸ªåæ°æ¯ä¸ä¸ª `Setup ä¸ä¸æ`å¯¹è±¡***==

~~~js
export default {
    setup(props, context) { // è¯¥ä¸ä¸æå¯¹è±¡æ¯éååºå¼çï¼å¯ä»¥å®å¨å°è§£æ
        // éä¼  Attributesï¼éååºå¼çå¯¹è±¡ï¼ç­ä»·äº $attrsï¼
        console.log(context.attrs)
        
        // ææ§½ï¼éååºå¼çå¯¹è±¡ï¼ç­ä»·äº $slotsï¼
        console.log(context.slots)
        
        // è§¦åäºä»¶ï¼å½æ°ï¼ç­ä»·äº $emitï¼
        console.log(context.emit)
          
        // æ´é²å¬å±å±æ§ï¼å½æ°ï¼
        console.log(context.expose)
    }
}
~~~



















#### ââæ³¨æ

+ â==***`data, methods, ...` ä¸­å¯ä»¥è®¿é®å° `setup` ä¸­çå±æ§ï¼æ¹å¼***==
+ â==***`setup` ä¸­ä¸è½è®¿é®å° `data, methods, ...` çæ°æ®***==
+ â==***å¦æå­å¨éåï¼`setup` æ°æ®ä¼åçº§é«***==
+ â==***`setup` å½æ°ä¸è½è¢« `async` ä¿®é¥°***==















### ðref()

> ~~~js
> // å¼å¥ ref å½æ°
> import { ref } from 'vue'
> 
> ref(vlaue|Object);
> ~~~
>
> ==***æ¥åä¸ä¸ªåé¨å¼ï¼è¿åä¸ä¸ªååºå¼çãå¯æ´æ¹ç `ref` å¯¹è±¡ï¼éè¦ä½¿ç¨ `.value`è·åå±æ§å¼***==
>
> :grey_exclamation:==***å¨ `template` ä¸­ä½¿ç¨æ é `.value`***==
>
> + ==***åºæ¬ç±»å**çæ°æ®ï¼ååºå¼ä¾æ§ä¾èµ `Object.defineProperty()`ç `set/get`å®æ*==
> + ==***å¯¹è±¡ç±»å**çæ°æ®ï¼å¨åé¨è°ç¨ `Vue3`ç `reactive`æ°å½æ°*==

~~~html
<h2>count={{ count }}</h2>
<button @click="count++">count++</button>
<button @click="addCount">count+2</button>
~~~

~~~js
setup() {
    let count = ref(0) // åå»ºååºå¼çå¯¹è±¡
    console.log(count) // RefImpl{__v_isShallow, dep, __v_isRef, _rawValue, _value}
    
   	function addCount() {
		count.value += 2 // éè¿ .value èµäºæ°çå¼
    } 
    
    return {
        count,
        addCount
    }
}
~~~















### ðreactive()

> ~~~js
> // å¯¼å¥ reactive å½æ°
> import { reactive } from 'vue'
> 
> reactive(Object);
> ~~~
>
> ==***è¿åä¸ä¸ªå¯¹è±¡çååºå¼ä»£ç `(Proxy)`ï¼ä¼å½±åå°ææåµå¥çå±æ§ä¿æååºæ§***==
>
> :grey_exclamation:==***åé¨åºäº `ES6` ç `Proxy`å®ç°ï¼éè¿ä»£çå¯¹è±¡æä½æºå¯¹è±¡åé¨æ°æ®***==

~~~html
<h2>obj={{ obj }}</h2>
<button @click="obj.status++">obj-status++</button>
<button @click="updObj">updateObj</button>
~~~

~~~js
setup(props, context) {
    let obj = reactive({
        type: 'success',
        status: 0
    })
    console.log(obj) // Proxy{type, status}
   
    function updObj() {
        obj.status++
    }

    return {
        obj,
        updObj
    }
}
~~~













### ðcomputed ()

> ~~~js
> // å¯¼å¥ computed å½æ°
> import { computed } from 'vue'
> 
> computed(Function|Object);
> ~~~
>
> ==***æ¥åä¸ä¸ª `getter` å½æ°ï¼è¿åä¸ä¸ªåªè¯»çååºå¼ `ref` å¯¹è±¡ï¼ä¹å¯ä»¥æ¥åä¸ä¸ªå¸¦æ `get` å `set` å½æ°çå¯¹è±¡æ¥åå»ºä¸ä¸ªå¯åç `ref` å¯¹è±¡***==

+ ==*å½æ°å½¢å¼*==

  ~~~js
  const count = ref(1)
  const plusOne = computed(() => count.value + 1)
  
  plusOne.value // 2
  ~~~

+ ==*å¯¹è±¡å½¢å¼*==

  ~~~js
  const count = ref(1)
  const plusOne = computed({
  	get: () => count.value + 1,
      set: (val) => {
          count.value = val - 1
      }
  })
  
  plusOne.value = 1
  count.value // 0
  ~~~














### ðwatch()

> ~~~js
> // å¯¼å¥ wattc å½æ°
> import { watch } from 'vue'
> 
> watch(source, callback[, config]);
> ~~~
>
> ==***ä¾¦å¬ä¸ä¸ªæå¤ä¸ªååºå¼æ°æ®æºï¼å¹¶å¨æ°æ®æºååæ¶è°ç¨æç»çåè°å½æ°***==
>
> + **`source` ï¼ä¾¦å¬å¨ççæ°æ®**
>   + ä¸ä¸ªå½æ°ï¼è¿åä¸ä¸ªå¼
>   + ä¸ä¸ª `ref`
>   + ä¸ä¸ªååºå¼å¯¹è±¡
>   + ç±ä»¥ä¸ç±»åçå¼ç»æçæ°ç»
> + **`callback` ï¼ä¾¦å¬çæ°æ®å¨åçååæ¶è¦è°ç¨çåè°å½æ°ï¼å½æ°æ¥åäºä¸ªåæ°`(æ°å¼ãæ§å¼)`**
> + **`config` ï¼éç½®å¯¹è±¡ï¼<span style=color:red;>å¯é</span>**
>   + **`immediate`**ï¼å¨ä¾¦å¬å¨åå»ºæ¶ç«å³è§¦ååè°
>   + **`deep`**ï¼å¦ææºæ¯å¯¹è±¡ï¼æ·±åº¦çå¬ææåµå¥çå±æ§
>   + **`flush`**ï¼è°æ´åè°å½æ°çå·æ°æ¶æºï¼`post/sync`
>     + `post` å°ä¼ä½¿ä¾¦å¬å¨å»¶è¿å°ç»ä»¶æ¸²æä¹ååæ§è¡
>     + `sync` å¨ååºå¼ä¾èµåçæ¹åæ¶ç«å³è§¦åä¾¦å¬å¨
>
> :grey_exclamation:==***å½ç´æ¥ä¾¦å¬ä¸ä¸ªååºå¼å¯¹è±¡æ¶ï¼ä¾¦å¬å¨ä¼èªå¨å¯ç¨æ·±å±æ¨¡å¼***==

~~~js
setup() {
    let count = ref(0)
    let obj = reactive({
        type: 'success',
        status: 0,
        data: {
            username: 'linke'
        }
    })
    
    // ä¾¦å¬ä¸ä¸ª ref
    watch(count, (newVal, oldVal) => {
        console.log(newVal, oldVal) // æ°å¼, æ§å¼
    })
    
    // ä¾¦å¬å¤ä¸ª
    watch([count, obj], (newVal, oldVal) => {
        console.log(newVal, oldVal) // [...], [...]
    })
    
    // ä¾¦å¬ä¸ä¸ª getter å½æ°
	watch(() => obj.status, (newVal, oldVal) => {
		// ...
    })
    
   	// éç½®å¯¹è±¡
    watch(count, (newVal, oldVal) => {
		// ...
    }, { immediate: true })
    
    /*
    ç´æ¥çå¬ reactive æå®ä¹çååºå¼æ°æ®
    	*æ æ³è·åæ­£ç¡®çæ§å¼*
        *å¼ºå¶å¼å¯æ·±å±çå¬,deepéç½®æ æ*
     */
    watch(obj, (newVal, oldVal) => {
		// ...
    }, { deep: false }) // æ­¤å¤éç½®æ æ
    
    // çå¬ reactive å®ä¹çå¯¹è±¡ä¸­çå±æ§ä¸ºå¯¹è±¡æ¶, deepéç½®æææ
    watch(() => obj.data, (newVal, oldVal) => {
        // ...
    }, { deep: true })
}
~~~













### ðwatchEffect()

> ~~~js
> // å¯¼å¥ watchEffect å½æ°
> import { watchEffect } from 'vue'
> 
>  watchEffect(Function);
> ~~~
>
> ==***ç«å³è¿è¡ä¸ä¸ªå½æ°ï¼åæ¶ååºå¼å°è¿½è¸ªå¶ä¾èµï¼å¹¶å¨ä¾èµæ´æ¹æ¶éæ°æ§è¡***===

~~~js
const count = ref(0)

watchEffect(() => console.log(count.value))
// -> è¾åº 0

count.value++
// -> è¾åº 1
~~~















### ðreadonly()

> ~~~js
> // å¯¼å¥ readonly å½æ°
> import { readonly } from 'vue'
> 
> readonly(person)
> ~~~
>
> ###### ==***æ¥åä¸ä¸ªå¯¹è±¡ï¼è¿åä¸ä¸ªåå¼çåªè¯»ä»£ç***==

~~~js
const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
    // ç¨æ¥åååºæ§è¿½è¸ª
    console.log(copy.count)
})

// æ´æ¹æºå±æ§ä¼è§¦åå¶ä¾èµçä¾¦å¬å¨
original.count++

// æ´æ¹è¯¥åªè¯»å¯æ¬å°ä¼å¤±è´¥ï¼å¹¶ä¼å¾å°ä¸ä¸ªè­¦å
copy.count++ // warning!
~~~





















### â¨çå½å¨æé©å­

|    Composition API    |                  è°ç¨æ¶æº                  |
| :-------------------: | :----------------------------------------: |
|  **`onBeforeMount`**  |           **å¨æè½½å¼å§ä¹åè°ç¨**           |
|    **`onMounted`**    |            **å¨æè½½ç»ä»¶æ¶è°ç¨**            |
| **`onBeforeUpdate`**  | **å¨ååºæ§æ°æ®æ´æ¹æ¶ä»¥åéæ°æ¸²æä¹åè°ç¨** |
|    **`onUpdated`**    |             **éæ°æ¸²æåè°ç¨**             |
| **`onBeforeUnmount`** |           **å¨å¸è½½å®ä¾ä¹åè°ç¨**           |
|   **`onUnmounted`**   |            **å¨å¸è½½éæ¯åè°ç¨**            |
|   **`onActivated`**   |     **æ¿æ´» `keep-alive` çç»ä»¶æ¶è°ç¨**     |
|  **`onDeactivated`**  |     **åç¨ `keep-alive` çç»ä»¶æ¶è°ç¨**     |
| **`onErrorCaptured`** |         **ä»å­ç»ä»¶æè·éè¯¯æ¶è°ç¨**         |

~~~vue
<template>
	<div ref="el"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ä½¿ç¨ç»åå¼ API, å¼ç¨å°å­å¨å¨ä¸åå­å¹éç ref é
const el = ref()

onMounted(() => {
    el.value // <div>
})
</script>
~~~















### ð´å·¥å·å½æ°

+ ==***isRef***==

  + > ~~~js
    > import { isRef } from 'vue'
    > 
    > isRef(preson)
    > ~~~
    >
    > ***æ£æ¥æä¸ªå¼æ¯å¦ä¸º `ref`***

+ ==***unref***==

  + > ~~~js
    > import { unref } from 'vue'
    > 
    > unref(preson)
    > ~~~
    >
    > ***å¦æåæ°æ¯ `ref`ï¼åè¿ååé¨å¼ï¼å¦åè¿ååæ°æ¬èº«***

+ ==***toRef***==

  + > ~~~js
    > import { toRef } from 'vue'
    > 
    > toRef(preson, prop)
    > ~~~
    >
    > ***åºäºååºå¼å¯¹è±¡ä¸çä¸ä¸ªå±æ§ï¼åå»ºä¸ä¸ªå¯¹åºç `ref`***
    >
    > ==***åå»ºç `ref` ä¸å¶æºå±æ§ä¿æåæ­¥ï¼æ¹åæºå±æ§çå¼å°æ´æ° `ref` çå¼ï¼åä¹äº¦ç¶***==

    ~~~js
    const state = reactive({
        foo: 1,
        bar: 2
    })
    
    const fooRef = toRef(state, 'foo')
    
    // æ´æ¹è¯¥ ref ä¼æ´æ°æºå±æ§
    fooRef.value++
    console.log(state.foo) // 2
    
    // æ´æ¹æºå±æ§ä¹ä¼æ´æ°è¯¥ ref
    state.foo++
    console.log(fooRef.value) // 3
    ~~~

+ ==***toRefs***==

  + > ~~~js
    > import { toRefs } from 'vue'
    > 
    > toRefs(preson)
    > ~~~
    >
    > ==***å°ä¸ä¸ªååºå¼å¯¹è±¡è½¬æ¢ä¸ºä¸ä¸ªæ®éå¯¹è±¡ï¼è¿ä¸ªæ®éå¯¹è±¡çæ¯ä¸ªå±æ§é½æ¯æåæºå¯¹è±¡ç¸åºå±æ§ç `ref`***==

    ~~~js
    const state = reactive({
      foo: 1,
      bar: 2
    })
    
    const stateAsRefs = toRefs(state)
    
    state.foo++
    console.log(stateAsRefs.foo.value) // 2
    
    stateAsRefs.foo.value++
    console.log(state.foo) // 3
    
    // å¯ä»¥è§£æèä¸ä¼å¤±å»ååºæ§
    let { foo, bar} = stateAsRefs
    foo.value++
    console.log(state.foo) // 4
    ~~~

+ ==***shallowRef / shallowReactive***==

  + > ~~~js
    > import { shallowRef, shallowReactive } from 'vue'
    > 
    > shallowRef(person)
    > shallowReactive(person)
    > ~~~
    >
    > ***æ¯`ref()`ä¸ `reactive()` çæµå±ä½ç¨å½¢å¼***
    >
    > + ==*ä¸æ¹åååºå¼å¯¹è±¡ä¸­çå±æ§ï¼åªçææ°çå¯¹è±¡æ¿æ¢ï¼å¯ä½¿ç¨ `shallowRef`*==
    > + ==*åªæ¹åååºå¼å¯¹è±¡çé¡¶å±æ°æ®ååï¼å¯ä½¿ç¨ `shallowReactive`*==

+ ==***shallowReadonly***==

  + > ~~~js
    > import { shallowReadonly } from 'vue'
    > 
    > shallowReadonly(person)
    > ~~~
    >
    > ***`readonly()` çæµå±ä½ç¨å½¢å¼***

+ ==***toRaw***==

  + > ~~~js
    > import { toRaw } from 'vue'
    > 
    > toRaw(person)
    > ~~~
    >
    > ***æ ¹æ®ä¸ä¸ª `Vue` åå»ºçä»£çè¿åå¶åå§å¯¹è±¡***

    ~~~js
    const foo = {}
    const reactiveFoo = reactive(foo)
    
    toRaw(reactiveFoo) === foo // true
    ~~~

+ ==***markRaw***==

  + > ~~~js
    > import { markRaw } from 'vue'
    > 
    > markRaw(person)
    > ~~~
    >
    > ***å°ä¸ä¸ªå¯¹è±¡æ è®°ä¸ºä¸å¯è¢«è½¬ä¸ºä»£çï¼è¿åè¯¥å¯¹è±¡æ¬èº«***

    ~~~js
    const foo = markRaw({})
    isReactive(reactive(foo)) // false
    
    // ä¹éç¨äºåµå¥å¨å¶ä»ååºæ§å¯¹è±¡
    const bar = reactive({ foo })
    isReactive(bar.foo) // false
    ~~~

+ ==***customRef***==

  + > ==***åå»ºä¸ä¸ªèªå®ä¹ç `ref`ï¼æ¾å¼å£°æå¯¹å¶ä¾èµè¿½è¸ªåæ´æ°è§¦åçæ§å¶æ¹å¼***==

    ~~~vue
    <template>
    	<input v-model="text">
    	<h2>{{ text }}</h2>
    </template>
    
    <script setup>
    import { customRef } from 'vue'
    
    // å®ä¹èªå®ä¹é²æ ref
    function useDebouncedRef(value, delay = 1500) {
        let timeout
        return customRef((track, trigger) => {
            return {
                get() {
                    track() // è¿½è¸ªæ°æ®çåå
                    return value
                },
                set(newValue) {
                    clearTimeout(timeout)
                    timeout = setTimeout(() => {
                        value = newValue
                        trigger() // è§¦åéæ°è§£ææ¨¡å
                    }, delay)
                }
            }
        })
    }
    
    // ä½¿ç¨èªå®ä¹ ref
    let text = useDebouncedRef(1)
    </script>
    ~~~
























### ð·provide ä¸ inject

<center><img src="images/provide-inject-2.png" alt="provide-inject" style="zoom:80%;border: 2px solid silver;" title="provide-inject" /></center>

#### provide()

> ~~~js
> import { provide } from 'vue'
> 
> provide(key, value);
> ~~~
>
> â		`key`ï¼æ³¨å¥ç `key`
>
> â		`value`ï¼æ³¨å¥çå¼

~~~vue
<script setup>
import { ref, provide } from 'vue'

// æä¾éæå¼
provide('foo', 'bar')

// æä¾ååºå¼çå¼
const count = ref(0)
provide('count', count)
</script>
~~~















#### inject()

> ~~~js
> import { inject } from 'vue'
> 
> inject(key[, defaultValue]);
> ~~~
>
> â		`key`	ï¼æ³¨å¥ç `key`
>
> â		`defaultValue`	ï¼é»è®¤å¼
>
> ==*`Vue` ä¼éåç¶ç»ä»¶é¾ï¼éè¿å¹é `key` æ¥ç¡®å®ææä¾çå¼ï¼å¦æç¶ç»ä»¶é¾ä¸å¤ä¸ªç»ä»¶å¯¹åä¸ä¸ª `key` æä¾äºå¼ï¼é£ä¹éç¨å°±è¿ååï¼å¦ææ²¡æè½éè¿ `key` å¹éå°å¼ï¼`inject()` å°è¿å `undefined`ï¼é¤éæä¾äºä¸ä¸ªé»è®¤å¼*==

~~~vue
<script setup>
import { inject } from 'vue'

// æ³¨å¥å¼çé»è®¤æ¹å¼
const foo = inject('foo')

// æ³¨å¥ååºå¼çå¼
const count = inject('count')

// æ³¨å¥ä¸ä¸ªå¼ï¼è¥ä¸ºç©ºåä½¿ç¨æä¾çé»è®¤å¼
const bar = inject('foo', 'default value')

// æ³¨å¥æ¶ä¸ºäºè¡¨ææä¾çé»è®¤å¼æ¯ä¸ªå½æ°ï¼éè¦ä¼ å¥ç¬¬ä¸ä¸ªåæ°
const fn = inject('function', () => {}, false)
</script>
~~~























## ð£hookå½æ°

> ==***`hook` æ¬è´¨ä¸æ¯ä¸ä¸ªå½æ°ï¼æ `setup` å½æ°ä¸­ä½¿ç¨ç `Composition API` è¿è¡å°è£***==

+ ==*åå»º `src/hooks/useIndex.js`*==

  ~~~js
  import { onMounted } from 'vue'
  
  export default function userIndex() {
      onMounted(() => {
          console.log('use index ...')
      })
  }
  ~~~

+ ==*ä½¿ç¨*==

  ~~~vue
  <script setup>
  // å¼å¥ useIndex.js    
  import useIndex from '@/hooks/useIndex.js'
  
  useIndex() // use index ...
      
  // ...
  </script>
  ~~~

  













## ð§©ç»ä»¶

### Fragment

> *å¨ `vue3` ä¸­ï¼å¦æç»ä»¶ä¸­æå¤ä¸ªæ ¹åç´ èç¹ï¼é£ä¹ç¼è¯æ¶ `vue` ä¼å¨è¿äºåç´ èç¹ä¸åå«å¨ä¸ä¸ª `<Fragment>` æ ç­¾ä¸­*











### Teleport

> *å°ä¸ä¸ªç»ä»¶åé¨çä¸é¨åæ¨¡æ¿åå®¹æ¸²æå° `DOM` ä¸­çå¦ä¸ä¸ªä½ç½®*
>
> + `to` ï¼æå®ä¼ éçç®æ ï¼`CSSéæ©å¨/DOMåç´ `
> + `disabled` ï¼æ¯å¦ç¦ç¨ `Teleport`

~~~vue
<button @click="open = true">Open Modal</button>

<Teleport to="body">
    <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
    </div>
</Teleport>
~~~

~~~vue
<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>
~~~











### Suspense

> ###### ==*å¼æ­¥ä¾èµ*==
>
> ==***`<Suspense>` ç»ä»¶æä¸¤ä¸ªææ§½ï¼`#default` å `#fallback`ï¼ä¸¤ä¸ªææ§½é½åªåè®¸ä¸ä¸ªç´æ¥å­èç¹***==

~~~vue
<Suspense>
    <!-- å·ææ·±å±å¼æ­¥ä¾èµçç»ä»¶ -->
    <Dashboard />

    <!-- å¨ #fallback ææ§½ä¸­æ¾ç¤º âæ­£å¨å è½½ä¸­â -->
    <template #fallback>
		Loading...
    </template>
</Suspense>
~~~















### Transition

> ==***è¿æ¸¡å¨ç»ç»ä»¶***==

~~~vue
<button @click="show = !show">Toggle</button>
<Transition>
    <p v-if="show">hello</p>
</Transition>
~~~

~~~css
/* è¿å¥ä¸ç¦»å¼çå¨ç»çæç¶æ */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

/* è¿å¥å¨ç»çèµ·å§ç¶æ ä¸ ç¦»å¼çå¨ç»çç»æç¶æ */
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
~~~













### CSS è¿æ¸¡ class

<center><img src="images/transition-classes.png" alt="classes" style="zoom:90%;border: 2px solid silver;padding: 0 30px;" title="classes" /></center>

+ `v-enter-from`ï¼**è¿å¥**å¨ç»ç**èµ·å§**ç¶æ
+ `v-enter-active`ï¼**è¿å¥**å¨ç»ç**çæ**ç¶æ
+ `v-enter-to`ï¼**è¿å¥**å¨ç»ç**ç»æ**ç¶æ
+ `v-leave-from`ï¼**ç¦»å¼**å¨ç»ç**èµ·å§**ç¶æ
+ `v-leave-active`ï¼**ç¦»å¼**å¨ç»ç**çæ**ç¶æ
+ `v-leave-to`ï¼**ç¦»å¼**å¨ç»ç**ç»æ**ç¶æ

















## ð¥script-setup

> ~~~vue
> <script setup>
> 	console.log('hello script setup')
> </script>
> ~~~
>
> ==***éè¦å¨ `<script>` ä»£ç åä¸æ·»å  `setup`å±æ§ï¼éé¢çä»£ç ä¼è¢«ç¼è¯æç»ä»¶ `setup()` å½æ°çåå®¹ï¼åæ¶é¡¶å±çç»å®ä¼è¢«æ´é²ç»æ¨¡æ¿***==

~~~vue
<template>
	<button @click="log">{{ msg }}</button>
</template>

<script setup>
// åé
const msg = 'Hello!'

// å½æ°
function log() {
    console.log(msg)
}
</script>
~~~













### ååºå¼

> ==***ååºå¼ç¶æéè¦æç¡®ä½¿ç¨ `ååºå¼ API`æ¥åå»º***==

~~~vue
<template>
	<button @click="count++">{{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
~~~













### é¡¶å± await

> ==***`<script setup>` ä¸­å¯ä»¥ä½¿ç¨é¡¶å± `await`***==

~~~vue
<script setup>
	const post = await fetch(`/api/post`).then((res) => res.json())
</script>
~~~

















### defineProps() å defineEmits()

> ==***å¯ä»¥ä½¿ç¨ `defineProps` å `defineEmits` API æ¥è·å¾ `props` å `emits` ï¼å®ä»¬å°èªå¨å°å¨ `<script setup>` ä¸­å¯ç¨***==
>
> :grey_exclamation:==***`defineProps` æ¥æ¶ä¸ `props` éé¡¹ç¸åçå¼ï¼`defineEmits` æ¥æ¶ä¸ `emits` éé¡¹ç¸åçå¼***==

~~~vue
<script setup>
// props
const props = defineProps({
    name: String
})

// emit
const emit = defineEmits(['change', 'delete'])
</script>
~~~















### useSlots() å useAttrs()

> ==***`useSlots` å `useAttrs` è¿åä¸ `setupContext.slots` å `setupContext.attrs` ç­ä»·ï¼åæ ·ä¹è½å¨æ®éç`ç»åå¼ API` ä¸­ä½¿ç¨***==

~~~vue
<script setup>
import { useSlots, useAttrs } from 'vue'

const slots = useSlots() // ç­ä»· context.slots
const attrs = useAttrs() // ç­ä»· context.attrs
</script>
~~~

















## ð¬ååºæ§è¯­æ³ç³

==***ååºæ§è¯­æ³ç³ç®åé»è®¤æ¯å³é­ç¶æï¼éè¦ä½ æ¾å¼éæ©å¯ç¨***==

### å¯ç¨

+ ==***Vite***==

  + ~~~js
    // vite.config.js
    export default {
        plugins: [
            vue({
                reactivityTransform: true
            })
        ]
    }
    ~~~

+ ==***vue-cli***==

  + ~~~js
    // vue.config.js
    module.exports = {
        chainWebpack: (config) => {
            config.module
                .rule('vue')
                .use('vue-loader')
                .tap((options) => {
                return {
                    ...options,
                    reactivityTransform: true
                }
            })
        }
    }
    ~~~















### å®å½æ°

> ==***å®å½æ°é½æ¯å¨å±å¯ç¨çãæ éæå¨å¯¼å¥ï¼ä¸æ¯ä¸ä¸ªçå®çãå¨è¿è¡æ¶ä¼è°ç¨çæ¹æ³ãèæ¯ç¨ä½ `Vue` ç¼è¯å¨çæ è®°***==

|       API        |       å®å½æ°       |
| :--------------: | :----------------: |
|    **`ref`**     |     **`$ref`**     |
|  **`computed`**  |  **`$computed`**   |
| **`shallowRef`** | **`$shallowRef`**` |
| **`customRef`**  | **`$customRef`**`  |
|   **`toRef`**    |    **`toRef`**     |

~~~vue
<template>
	<button @click="increment">{{ count }}</button>
</template>

<script setup>
let count = $ref(0)

console.log(count) // -> 0

function increment() {
    count++
}
</script>
~~~















### ð$() å®

~~~js
$(...)
~~~

#### è§£æ

> ==***å¯ç¨äºè§£æå¨ååºå¼å¯¹è±¡***==

~~~js
const position = reactive({
    z: 1,
    y: 2
})

// è§£æèä¸ä¼å¤±å»ååºæ§
const { x, y } = $(position)
~~~













#### å° ref è½¬æ¢ä¸ºååºå¼å¯¹è±¡

~~~js
let countRef = ref(0)

let count = $(countRef)
~~~















#### ä½ä¸ºå½æ°è¿åå¼

~~~js
function useMouse() {
    let x = $ref(0)
    let y = $ref(0)

    // å°ååºå¼åéç´æ¥æ¾å¨è¿åå¼è¡¨è¾¾å¼ä¸­ä¼ä¸¢å¤±æååºæ§
    // ä½¿ç¨ä»¥ä¸æ¹å¼åèµ·æ
    return $$({
        x,
        y
    })
}
~~~















## ð¨ç»ä»¶CSSåè½

### æ·±åº¦éæ©å¨

> ==**ä½¿ç¨`scoped`åï¼ç¶ç»ä»¶çæ ·å¼å°ä¸ä¼æ¸éå°å­ç»ä»¶ä¸­; å¦ææ³è¦å½±åå°å­ç»ä»¶ï¼å¯ä»¥ä½¿ç¨`:deep()`è¿ä¸ªä¼ªç±»**===

~~~vue
<style scoped>
.selectorA :deep(..selectorB) {
    /* ... */
}
</style>
~~~













### ææ§½éæ©å¨

> ==**é»è®¤æåµä¸ï¼ä½ç¨åæ ·å¼ä¸ä¼å½±åå° `<slot/>` æ¸²æåºæ¥çåå®¹,å¯ä½¿ç¨ `:slotted` ä¼ªç±»å°ææ§½åå®¹ä½ä¸ºéæ©å¨çç®æ **==

~~~vue
<style scoped>
:slotted(.selector) {
    /* ... */
}
</style>
~~~















### å¨å±éæ©å¨

> ==**å¯ä»¥ä½¿ç¨ `:global` ä¼ªç±»æ¥å®ç°æ ·å¼è§ååºç¨å°å¨å±**==

~~~vue
<style scoped>
:global(.selector) {
    /* ... */
}
</style>
~~~













### æ··åä½¿ç¨å±é¨ä¸å¨å±æ ·å¼

> ==**å¯ä»¥å¨åä¸ä¸ªç»ä»¶ä¸­åæ¶åå«ä½ç¨åæ ·å¼åéä½ç¨åæ ·å¼**==

~~~vue
<style>
/* å¨å±æ ·å¼ */
</style>

<style scoped>
/* å±é¨æ ·å¼ */
</style>
~~~















### CSS Modules

> ==**`<style module>`æ ç­¾ä¼è¢«ç¼è¯ä¸º <i style=color:red;>CSS Modules</i> å¹¶ä¸å°çæç <i style=color:red;>CSS class</i> ä½ä¸º`$style`å¯¹è±¡æ´é²ç»ç»ä»¶**==
>
> :grey_exclamation:==<u>å¾åºç<span style=color:red;>class</span>å°è¢«åå¸åä»¥é¿åå²çªï¼å®ç°äºåæ ·çå°<span style=color:red;>CSS</span>ä»ä½ç¨äºå½åç»ä»¶çææ</u>==
>
> + ==***å¯ä»¥éè¿ç» `module` å±æ§å¼æ¥èªå®ä¹æ³¨å¥<span style=color:red;>class</span>å¯¹è±¡çå±æ§å***==

~~~vue
<template>
	<div :class="$style.red">This should be red</div>
	<div :class="classes.blue">This should be blue</div>
</template>

// é»è®¤å¯¹è±¡å $style
<style module>
.red {
    color: red;
}
</style>

// æå®å¯¹è±¡åç§°
<style module="classes">
.blue {
    color: skyblue;
}
</style>
~~~















#### useCssModule()

> ~~~js
> import { useCssModule } from 'vue'
> 
> 
> useCssModule(classes);
> ~~~
>
> ==***`useCssModule()`å¨`setup`ä¸­è®¿é®æ³¨å¥ç `class`***==
>
> + <span style=color:black;>`classes(string)`ï¼å¹éç `module` å±æ§å¼ï¼**å¯é**</span>















### ä½¿ç¨v-bind()

> *==**åæä»¶ç»ä»¶ç`<style>`æ ç­¾æ¯æä½¿ç¨`v-bind()`å° <i style=color:red;>CSS</i> çå¼é¾æ¥å°å¨æçç»ä»¶ç¶æ**==*

~~~vue
<template>
	<div class="text">linke</div>
</template>

<script setup>
import { ref } from 'vue'
    
const color = ref('skyblue')
const theme = { bgc: 'silver' }
</script>

<style>
.text {
    color: v-bind(color);
    background-color: v-bind('theme.bgc');
}
</style>
~~~



















## :snowflake:Vuex

==***[Vuex](https://vuex.vuejs.org/zh/) æ¯ä¸ä¸ªä¸ä¸º `Vue` åºç¨ç¨åºå¼åç<span style=color:red;>ç¶æç®¡çæ¨¡å¼ + åº</span>***==











### å®è£

~~~cmd
npm i vuex@3 	# vue2å¯¹åºçæ¬
npm i vuex		# vue3å¯¹åºçæ¬
~~~













### ðå·¥ä½åç

<center><img src="images/vuex%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86.png" alt="vuexå·¥ä½åç" style="zoom:110%;border: 2px solid silver" title="vuexçå·¥ä½åç" /></center>













### åºæ¬ä½¿ç¨

+ ###### ***v2***

  ```js
  /* src/store/index.js */
  
  import Vue from 'vue'
  // å¼å¥ vuex
  import Vuex from 'vuex'
  
  // å®è£
  Vue.use(Vuex)
  
  // åå»ºä¸ä¸ª store,å¹¶æ´é² storeå¯¹è±¡(å¿é¡»å¨useæ¹æ³ä¹ååå»ºstore)
  export default new Vuex.Store({
      state: { // state å¯¹è±¡ç¨äºå­å¨æ°æ®
          // ...
      },
      actions: { // actions å¯¹è±¡ç¨äºååºç»ä»¶ä¸­çå¨ä½
          // ...
      },
      mutations: { // mutations ç¨äºæä½ stateå¯¹è±¡çæ°æ®
          // ...
      },
      getters: { // getters ç¨äºå®ä¹ store çè®¡ç®å±æ§
          // ...
      }
  })
  ```

  ~~~js
  /* src/main.js */
  
  import Vue from 'vue'
  // å¯¼å¥ store
  import store from '@/store'
  
  new Vue({
      store, // éç½® store
  }).$mount('#app')
  ~~~

+ ###### ***v3***

  ~~~js
  import { createApp } from 'vue'
  // å¼å¥ createStore
  import { createStore } from 'vuex'
  
  // åå»ºä¸ä¸ªæ°ç store å®ä¾
  const store = createStore({
      state () {
          return {
              // ...
          }
      },
      actions: {
          // ...
      },
      mutations: {
          // ...
      },
      getters: {
          // ...
      }
  })
  
  const app = createApp({ /* æ ¹ç»ä»¶ */ })
  
  // å° store å®ä¾ä½ä¸ºæä»¶å®è£
  app.use(store)
  ~~~
  
  













### State

> ==***`store` å®ä¾çæ°æ®æº***==

~~~js
new Vuex.Store({
    state: {
        count: 0
    }
})
~~~

```js
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count () {
            return store.state.count // è·å state ä¸­çæ°æ®
        }
    }
}
```











#### mapState

> ***`mapState` è¾å©å½æ°***

~~~js
// å¯¼å¥ mapState è¾å©å½æ°
import { mapState } from 'vuex'

export default {
	// ...
    computed: mapState({ // æ¹å¼(1)å¯¹è±¡å½¢å¼
    // ç®­å¤´å½æ°
    count: state => state.count,

    // ä¼ å­ç¬¦ä¸²åæ°, ç­åäº state => state.count
    countAlias: 'count',

    // ä¸ºäºè½å¤ä½¿ç¨ this è·åå±é¨ç¶æï¼å¿é¡»ä½¿ç¨å¸¸è§å½æ°
    countPlusLocalState(state) {
        return state.count + this.localCount
    }
}
~~~

> ==***å½æ å°çè®¡ç®å±æ§çåç§°ä¸ `state` çå­èç¹åç§°ç¸åæ¶ï¼å¯ä»¥ç» `mapState` ä¼ ä¸ä¸ªå­ç¬¦ä¸²æ°ç»***==

~~~js
computed: mapState([ // æ¹å¼(2)æ°ç»å½¢å¼
    // æ å° this.count ä¸º store.state.count
    'count'
]) 
~~~

> ==***å¯¹è±¡å±å¼è¿ç®ç¬¦***==

~~~js
computed: {
    localComputed () { /* ... */ },
    // ä½¿ç¨å¯¹è±¡å±å¼è¿ç®ç¬¦å°æ­¤å¯¹è±¡æ··å¥å°å¤é¨å¯¹è±¡ä¸­
    ...mapState({
        // ...
    })
}
~~~















### Mutations

> ***æ´æ¹ `Vuex` ç `store` ä¸­çç¶æçå¯ä¸æ¹æ³æ¯æäº¤ `mutation`***
>
> :grey_exclamation:***æ¯ä¸ª `mutation` é½æä¸ä¸ªå­ç¬¦ä¸²ç<span style=color:red;>äºä»¶ç±»å `(type)`</span>åä¸ä¸ª<span style=color:red;>åè°å½æ° `(handler)`</span>***

~~~js
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state, value) { // ç¬¬ä¸ä¸ªåæ°ä¸º state
            console.log(state, value); // {count, â¦}, 1
            state.count++ // åæ´ç¶æ
        }
    }
})
~~~

~~~js
/* è§¦å
commit(type, [arg])
	type : äºä»¶å
    arg : å¯éåæ°
*/
created() {
    this.$store.commit('increment', 1);
}
~~~









#### mapMutations

> ***`mapMutations` è¾å©å½æ°ï¼å¨ç»ä»¶ä¸­æäº¤ `Mutation`***

~~~js
// å¯¼å¥ mapMutations è¾å©å½æ°
import { mapMutations } from 'vuex'

export default {
    // ...
    methods: {
        ...mapMutations([ // æ°ç»å½¢å¼
            'increment', // å° this.increment() æ å°ä¸º this.$store.commit('increment')
            // ...
        ]),
	    ...mapMutations({ // å¯¹è±¡å½¢å¼
            add: 'increment', // å° this.add() æ å°ä¸º this.$store.commit('increment')
            // ...
        })
    }
}
~~~















### Actions

> ==***`Action` ç±»ä¼¼äº `mutation`ï¼ä¸åå¨ `Action` æäº¤çæ¯ `mutation`ï¼èä¸æ¯ç´æ¥åæ´ç¶æ***==
>
> :grey_exclamation:==***`Action` å½æ°æ¥åä¸ä¸ªä¸ `store` å®ä¾å·æç¸åæ¹æ³åå±æ§ç `context` å¯¹è±¡***==

~~~js
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state, value) {
            console.log(state, value); // {count, â¦}, 1
            state.count++
        }
    },
    actions: {
        increment (context) { // ç¬¬ä¸ä¸ªåæ°ä¸º ä¸ä¸æå¯¹è±¡(context),å¯ä½¿ç¨ ES6 åæ°è§£æ { commit }
            console.log(context, value); // {getters, state, dispatch, commit, â¦}, 1
            context.commit('increment', value)
        }
    }
})
~~~

~~~js
/* è§¦å
dispatch(type, [arg])
	type : äºä»¶å
    arg : å¯éåæ°
*è¿åå¼ä¸ä¸ªPromiseå¯¹è±¡*
*/
created() {
    this.$store.dispatch('increment', 1)
}
~~~











#### mapActions

>==***`mapActions` è¾å©å½æ°***==

~~~js
// å¯¼å¥ mapActions è¾å©å½æ°
import { mapActions } from 'vuex'

export default {
    // ...
    methods: {
        ...mapActions([ // æ°ç»å½¢å¼
            'increment', // å° this.increment() æ å°ä¸º this.$store.dispatch('increment')
            // ...
        ]),
        ...mapActions({ // å¯¹è±¡å½¢å¼
            add: 'increment', // å° this.add() æ å°ä¸º this.$store.dispatch('increment')
            // ...
        })
    }
}
~~~



















### Getters

> ==***å®ä¹ `store`å®ä¾ä¸­ `state` çè®¡ç®å±æ§***==

~~~js
const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: { // å®ä¹è®¡ç®å±æ§
        count(state) {
            return `countå¼=${state.count}`;
        }
    }
})
~~~

~~~js
created() {
	console.log(this.$store.getters.count) // è·å
}

// => "countå¼=0"
~~~











#### mapGetters

> ***`mapGetters` è¾å©å½æ°ï¼ç¨æ³ç¸å `mapState`***

~~~js
// å¯¼å¥ mapGetters è¾å©å½æ°
import { mapGetters } from 'vuex'

export default {
    // ...
    computed: {
        // ä½¿ç¨å¯¹è±¡å±å¼è¿ç®ç¬¦å° getter æ··å¥ computed å¯¹è±¡ä¸­
        ...mapGetters([ // æ°ç»å½¢å¼
            'count',
            // ...
        ]),
        ...mapGetters({ // å¯¹è±¡å½¢å¼
            size: 'count',
            // ...
        })
    }
}
~~~













### ð³Modules

> :grey_exclamation:***`Vuex` åè®¸æä»¬å° `store` åå²ææ¨¡å`ï¼moduleï¼`ï¼æ¯ä¸ªæ¨¡åæ¥æèªå·±ç `state`ã`mutation`ã`action`ã`getter`ãçè³æ¯åµå¥å­æ¨¡å***

~~~js
const moduleA = {
    state: () => ({ ... }),
	mutations: { ... },
	actions: { ... },
	getters: { ... }
}

const moduleB = {
	state: () => ({ ... }),
	mutations: { ... },
	actions: { ... }
}

const store = new Vuex.Store({
    modules: { // æ¨¡åå
        a: moduleA,
        moduleB // å¯¹è±¡ç®åå½¢å¼
    }
})

this.$store.state.a 		// -> moduleA çç¶æ
this.$store.state.moduleB	// -> moduleB çç¶æ
~~~











#### å½åç©ºé´

> ==***å¯ä»¥éè¿æ·»å  `namespaced: true` çæ¹å¼ä½¿å¶æä¸ºå¸¦å½åç©ºé´çæ¨¡å***==

~~~js
const store = new Vuex.Store({
    modules: {
        moduleA { // æ¨¡åa
        	namespaced: true, // è®¾ç½®ä¸ºå¸¦å½åç©ºé´çæ¨¡å
	        // ...
    	},
	    // ...
    }
})    
~~~











##### å¸¦å½åç©ºé´çç»å®å½æ°

~~~js
// æ¹å¼(1)
computed: {
    ...mapState({
        name: state => state.a.name,
    })
},
methods: {
    ...mapActions([
        'a/fun',  // -> this['a/fun']()
    ])
}

// æ¹å¼(2),å°æ¨¡åçç©ºé´åç§°å­ç¬¦ä¸²ä½ä¸ºç¬¬ä¸ä¸ªåæ°ä¼ éç»è¾å©å½æ°
computed: {
    ...mapState('a', {
		name: state => state.name,
    })
},
methods: {
    ...mapActions('a', [
        'fun', // -> this.fun()
    ])
}
~~~











##### createNamespacedHelpers

> ==***`createNamespacedHelpers` ç¨äºåå»ºåºäºæä¸ªå½åç©ºé´è¾å©å½æ°***==

~~~js
// å¯¼å¥ createNamespacedHelpers è¾å©å½æ°
import { createNamespacedHelpers } from 'vuex'

// åå»º æ¨¡åa çè¾å©å½æ°
const { mapState, mapActions } = createNamespacedHelpers('a')

export default {
    computed: {
        // å¨æ¨¡å a ä¸­æ¥æ¾
        ...mapState({
            name: state => state.name,
        })
    },
    methods: {
        // å¨æ¨¡å a ä¸­æ¥æ¾
        ...mapActions([
            'fun',
        ])
    }
}
~~~



















## ðPinia

==***[Pinia](https://pinia.vuejs.org/zh/): æ¯ `Vue` çä¸å±ç¶æç®¡çåº***==

<center><img src="images/Pinia.png" alt="Pinia" style="zoom:65%;" title="Pinia" /></center>







### å®è£

~~~cmd
npm install pinia
~~~













### åºæ¬ä½¿ç¨

+ <span style=color:black;>`main.js`å®è£`Pinia`</span>

  ~~~js
  import { createApp } from 'vue'
  // å¼å¥ pinia
  import { createPinia } from 'pinia'
  import App from './App.vue'
  
  // åå»º pinia å®ä¾
  const pinia = createPinia()
  const app = createApp(App)
  
  // å®è£ pinia
  app.use(pinia)
  app.mount('#app')
  
  // createApp(App).use(createPinia()).mount('#app') // å¯é¾å¼è°ç¨
  ~~~

+ <span style=color:black;>åå»º`src/stors/counter.js`æä»¶</span>

  ~~~js
  import { defineStore } from 'pinia' // å¯¼åºç¨äº store çå½æ°
  
  // åå»º store å¹¶æ´é²
  export const useCounterStore = defineStore('counter', () => {
      state: () => ({ count: 0 }), // state
      actions: { // actions
          increment() {
              this.count++
          }
      }
  })
  ~~~

+ <span style=color:black;>å¨ç»ä»¶ä¸­ä½¿ç¨</span>

  ~~~vue
  <template>
  	<button type="button" @click="increment">count is {{ count }}</button>
  </template>
  
  <script setup>
  // å¯¼å¥ stote
  import { useCounterStore } from '@/stores/counter'
  
  // è·å stote
  const store = useCounterStore();
      
  // const { count } = store // è§£æçå±æ§å°å¤±å»ååºæ§
  const { count } = storeToRefs(store) // ä½¿ç¨ storeToRefs() ä¿æå±æ§ååºæ§
  
  // action å¯ä»¥ç´æ¥è§£æ
  const { increment } = store
  </script>
  ~~~

  

















### Store

> ==**`store`ç®åæ¥è¯´å°±æ¯æ°æ®ä»åº**==
>
> :grey_exclamation:<span style=color:black;>*ä¸¤ç§å½¢å¼åå»º `Store`:*</span>
>
> + <a href="#optionStore">Option Store</a>
> + <a href="#setupStore">Setup Store</a>









#### <span id="optionStore" name="optionStore">Option Store</span>

> ==***`defineStore()`æ¹æ³çç¬¬äºä¸ªåæ°ï¼å¯ä»¥ä¼ å¥ä¸ä¸ªå¸¦æ `state`ã`actions` ä¸ `getters` å±æ§ç `Option`å¯¹è±¡***==

~~~js
export const useNameStore = defineStore('name', {
    state: () => { // store çæ°æ®(data)
        // ...
        return { ... } // data
    },
    getters: { // store çè®¡ç®å±æ§(computed)
        // ...
    },
    actions: { // store çæ¹æ³(methods)
        // ...
    }
})
~~~













#### <span id="setupStore" name="setupStore">Setup Store</span>

>==***`defineStore()`æ¹æ³çç¬¬äºä¸ªåæ°ï¼å¯ä»¥ä¼ å¥ä¸ä¸ªå½æ°ï¼è¯¥å½æ°å®ä¹äºä¸äºååºå¼å±æ§åæ¹æ³ï¼å¹¶ä¸è¿åä¸ä¸ªéè¦æ´é²åºå»çå±æ§åæ¹æ³çå¯¹è±¡***==
>
><span style=color:black;>**å¨ *`Setup Store`* ä¸­ï¼**</span>
>
>+ <span style=color:black;>`ref()` å°±æ¯ `state`</span>
>+ <span style=color:black;>`computed()` å°±æ¯ `getters`</span>
>+ <span style=color:black;>`function()` å°±æ¯ `actions`</span>

~~~js
import { ref } from 'vue'

export const useNameStore = defineStore('name', {
    const count = ref(0) // state

	function fn() { } // actions

	return { count, fn }
})
~~~



















### State

> ==***`state` æ¯`store`çæ ¸å¿ï¼å¨`Pinia`ä¸­ï¼`state` è¢«å®ä¹ä¸ºä¸ä¸ªè¿ååå§ç¶æç<span style=color:red;>å½æ°</span>***==













#### TypeScript

> ==***`Pinia` ä¼èªå¨æ¨æ­åº`state`çç±»åï¼ï¼ä½å¨ä¸äºæåµä¸ï¼éè¦å£°æå¶ç±»å***==

~~~typescript
const useStore = defineStore('storeId', {
    // ä¸ºäºå®æ´ç±»åæ¨çï¼æ¨èä½¿ç¨ç®­å¤´å½æ°
    state: () => {
        return {
            // ç¨äºåå§åç©ºåè¡¨
            userList: [] as UserInfo[],
            // ç¨äºå°æªå è½½çæ°æ®
            user: null as UserInfo | null,
        }
    },
})

interface UserInfo {
    name: string
    age: number
}
~~~

> ==***ä¹å¯ä»¥ç¨ä¸ä¸ªæ¥å£å®ä¹ `state`ï¼å¹¶æ·»å  `state()` çè¿åå¼çç±»å***==

~~~typescript
interface State {
    userList: UserInfo[]
    user: UserInfo | null
}

const useStore = defineStore('storeId', {
    state: (): State => {
        return {
            userList: [],
            user: null,
        }
    },
})

interface UserInfo {
    name: string
    age: number
}
~~~













#### è®¿é®state

> ==**å¯ä»¥éè¿ `store` å®ä¾è®¿é® `state`ï¼ç´æ¥å¯¹å¶è¿è¡è¯»å**==

~~~js
const store = useStore()

store.count++
~~~













#### éç½®state

> ==**å¯ä»¥éè¿è°ç¨ `store` ç `$reset()` æ¹æ³å° `state` éç½®ä¸ºåå§å¼**==
>
> â*<span style=color:red;>åªæä½¿ç¨<a href="#optionStore">Option Store</a>æ¹å¼æå»ºç`store`å®ç°äº`$reset()`</span>*

~~~js
const store = useStore()

store.$reset()
~~~













#### åæ´state

> ==**å¯ä»¥è°ç¨ `$patch` æ¹æ³ç´æ¥æ¹å `store`**==

+ <span style=color:black;>å¯¹è±¡å½¢å¼</span>

  ~~~js
  store.$patch({
      count: store.count + 1,
      name: 'Linke',
  });
  ~~~

+ <span style=color:black;>å½æ°å½¢å¼</span>

  ~~~js
  store.$patch((state) => {
      state.count++
      state.name = 'Linke'
  })
  ~~~

  













#### æ¿æ¢state

> ==**`Pinia`æä¾äºæ¹æ³å¯ä»¥ç´æ¥æ¿æ¢æ´ä¸ª`state`å¯¹è±¡ï¼ä½¿ç¨`store`ç`$state`æ¹æ³**==

~~~js
// è¿å®éä¸å¹¶æ²¡ææ¿æ¢ $state ,èæ¯å¨åé¨è°ç¨ $patch()
store.$state = { count: 0 }
~~~















#### è®¢éstate

> ==**å¯ä»¥éè¿ `store` ç `$subscribe()` æ¹æ³ä¾¦å¬ `state` åå¶åå**==
>
> + <span style=color:black;>`$subscribe()` å¨ `patch` ååªè§¦åä¸æ¬¡</span>
> + <span style=color:black;>å½ç»ä»¶è¢«å¸è½½æ¶ï¼å°è¢«èªå¨å é¤</span>
> + <span style=color:black;>`{ detached: true }`ä½ä¸ºç¬¬äºä¸ªåæ°<span style=color:red;>(å¯é)</span>ï¼ç»ä»¶å¸è½½åä¾æ§ä¿ç</span>

~~~js
store.$subscribe((mutation, state) => {
    // import { MutationType } from 'pinia'
    mutation.type // 'direct' | 'patch object' | 'patch function'
    // å store.$id ä¸æ ·
    mutation.storeId 
    // åªæ mutation.type === 'patch object'çæåµä¸æå¯ç¨
    mutation.payload // ä¼ éç» cartStore.$patch() çè¡¥ä¸å¯¹è±¡
})
~~~

> :grey_exclamation:==***å¯ä»¥å¨ `pinia` å®ä¾ä¸ä¾¦å¬æ´ä¸ª `state`***==

~~~js
watch(
    pinia.state,
    (state) => {
        // ...
    },
    { deep: true }
)
~~~















### Getter

> ==***`Getter` å®å¨ç­åäº `store` ç `state` çè®¡ç®å±æ§<i style=color:red;>(computed)</i>***==
>
> + <span style=color:red;>å¨ `TypeScript` ä¸­ä½¿ç¨Â `this`Â çÂ `getter`Â å½æ°å¿é¡»å®ä¹è¿åç±»å</span>

~~~typescript
export const useCounterStore = defineStore('counter', () => {
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount: (state) => state.count * 2, // ç±»åæ¯èªå¨æ¨æ­åºæ¥çï¼å ä¸ºæ²¡æä½¿ç¨ this
        doublePlusOne(): number { // å¿é¡»æç¡®è®¾ç½®è¿åç±»å
            return this.doubleCount + 1
	    },
    },
})
~~~

~~~vue
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore();
    
store.doubleCount // doubleCount: number
</script>
~~~















#### è®¿é®å¶ä»getter

> ==**æ²¡æä½¿ç¨ `TypeScript`ï¼å¯ä»¥ç¨ `JSDoc` æ¥è®©ä½ ç<span style=color:red;>IDE</span>æç¤ºç±»å**==

~~~js
export const useCounterStore = defineStore('counter', () => {
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        // è¿éæä»¬éè¦èªå·±æ·»å ç±»å(å¨ JS ä¸­ä½¿ç¨ JSDoc)
        /**
         * @returns {number}
         */
        doubleCountPlusOne() {
            return this.doubleCount + 1
        },
    },
})
~~~















#### getterä¼ éåæ°

> ==**`Getter` åªæ¯å¹åçè®¡ç®å±æ§ï¼æä»¥ä¸å¯ä»¥åå®ä»¬ä¼ éä»»ä½åæ°ï¼ä½æ¯å¯ä»¥ä» `getter` è¿åä¸ä¸ªå½æ°ï¼è¯¥å½æ°å¯ä»¥æ¥åä»»æåæ°**==

~~~js
export const useCounterStore = defineStore('counter', () => {
    getters: {
        getUserById: (state) => {
            return (userId) => state.users.find((user) => user.id === userId)
        },
    },
})
~~~

~~~vue
<script setup>
import { useCounterStore } from '@/stores/counter'
    
const store = useCounterStore()
const { getUserById } = store
</script>

<template>
	<div>User: {{ getUserById(1) }}</div>
</template>
~~~

> ==**ä»¥ä¸æ¹å¼ `getter` å°ä¸åè¢«ç¼å­ï¼å¯ä»¥å¨ `getter` æ¬èº«ä¸­ç¼å­ä¸äºç»æï¼æ§è½ä¼æ´å¥½**==

~~~typescript
getters: {
    getActiveUserById(state) {
        const activeUsers = state.users.filter((user) => user)
        return (userId: number) => activeUsers.find((user) => user.id === userId)
    },
},
~~~















### Action

> ==***`Action` ç¸å½äºç»ä»¶ä¸­çæ¹æ³<i style=color:red;>(method)</i>ï¼å¯ä»¥éè¿ `defineStore()` ä¸­ç `actions` å±æ§æ¥å®ä¹ï¼å¹¶ä¸å®ä»¬ä¹æ¯å®ä¹ä¸å¡é»è¾çå®ç¾éæ©ï¼`action`å¯ä»¥æ¯åæ­¥åå¼æ­¥ç***==

~~~js
export const useCounterStore = defineStore('counter', () => {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++
        },
        randomizeCounter() {
            this.count = Math.round(100 * Math.random())
        },
    },
})
~~~

~~~vue
<script setup>
import { useCounterStore } from '@/stores/counter'
    
const store = useCounterStore()
store.randomizeCounter()
</script>
~~~















#### è®¢éaction

> ==**å¯ä»¥éè¿ `store.$onAction()` æ¥çå¬ `action` åå®ä»¬çç»æ**==
>
> + <span style=color:black;>ä¼ éç»å®çåè°å½æ°ä¼å¨ `action` æ¬èº«ä¹åæ§è¡</span>
> + <span style=color:black;>å½ç»ä»¶è¢«å¸è½½æ¶ï¼å°è¢«èªå¨å é¤</span>
> + <span style=color:black;>`after` è¡¨ç¤ºå¨ `promise` è§£å³ä¹åï¼åè®¸ä½ å¨ `action` è§£å³åæ§è¡ä¸ä¸ªåè°å½æ°</span>
> + <span style=color:black;>`onError` åè®¸å¨ `action` æåºéè¯¯æ `reject` æ¶æ§è¡ä¸ä¸ªåè°å½æ°</span>
> + <span style=color:black;>å° `true` ä½ä¸ºç¬¬äºä¸ªåæ°<span style=color:red;>(å¯é)</span>ï¼ç»ä»¶è¢«å¸è½½åï¼è®¢éä¾æ§ä¼è¢«ä¿ç</span>

~~~js
const unsubscribe = someStore.$onAction(
    ({
        name, // action åç§°
        store, // store å®ä¾
        args, // ä¼ éç» action çåæ°æ°ç»
        after, // å¨ action è¿åæè§£å³åçé©å­
        onError, // action æåºææç»çé©å­
    }) => {
        // ä¸ºè¿ä¸ªç¹å®ç action è°ç¨æä¾ä¸ä¸ªå±äº«åé
        const startTime = Date.now()
        // è¿å°å¨æ§è¡ store ç action ä¹åè§¦å
        console.log(`Start "${name}" with params [${args.join(', ')}].`)

        // è¿å°å¨ action æåå¹¶å®å¨è¿è¡åè§¦å
        // å®ç­å¾çä»»ä½è¿åç promise
        after((result) => {
            // after ...
        })

	    // å¦æ action æåºæè¿åä¸ä¸ªæç»ç promise è¿å°è§¦å
        onError((error) => {
            // error ...
        })
	}
)

// æå¨å é¤çå¬å¨
unsubscribe()
~~~



















### :hammer:API

#### defineStore

> ~~~js
> import { defineStore } from 'pinia'
> 
> 
> // åå»ºä¸ä¸ª store
> 
> const useNameStore = defineStore(name, options) // æ¨èä½¿ç¨ use + storeName + Store å½¢å¼çåéå
> ~~~
>
> ==***`pinia`æä¾ç`defineStore()`æ¹æ³æ¥åå»ºä¸ä¸ª`store`***==
>
> + <span style=color:black;>`name(string)`ï¼å¯ä¸ç`id`</span>
> + <span style=color:black;>`options(object/function)`ï¼å¶ä»éç½®é¡¹,å¯æ¥åä¸¤ç±»å¼`Setup`å½æ°æ`Option`å¯¹è±¡</span>















#### storeToRefs

> ~~~js
> import { storeToRefs } from 'pinia'
> 
> 
> storeToRefs(store)
> ~~~
>
> ==**åå»ºä¸ä¸ªå¼ç¨å¯¹è±¡ï¼åå«`store`çææ`state`ã`getter`å`plugin`æ·»å ç`state`å±æ§**==
>
> :grey_exclamation:<span style=color:black;>***<i style=color:red;>method</i> å <i style=color:red;>éååºå¼å±æ§</i> ä¼è¢«å®å¨å¿½ç¥***</span>



















## ðæ¹å

- [x] :grey_exclamation:***ç§»é¤ `keyCode` ä¿®é¥°ç¬¦ï¼ä¸æ¯æ  `config.keyCodes`***
- [x] :grey_exclamation:***ç§»é¤ `.native` ä¿®é¥°ç¬¦ï¼`click`é»è®¤åçäºä»¶***
- [x] :grey_exclamation:***ç§»é¤ `Filter(è¿æ»¤å¨)`***
- [x] â«â«â«â«

















## â«â«â«ç»

<center><b><i><u>- ææ³æä¸ºä½ å»éª¨é­å¿ä¹äºº -</u></i></b></center>


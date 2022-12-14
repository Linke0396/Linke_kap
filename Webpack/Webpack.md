[TOC]

# Webpack

****

ð[webpack](https://www.webpackjs.com/)

==***`webpack` æ¯ä¸ä¸ªç°ä»£ `JavaScript` åºç¨ç¨åºçéææ¨¡åæåå¨`(module bundler)`***==

<center><img src="images/webpack.png" alt="webpack" style="zoom:50%;" title="webpack" /></center>









## ð§±åç«¯å·¥ç¨å

> ==***å¨<span style=color:red;>ä¼ä¸çº§çåç«¯é¡¹ç®å¼å</span>ä¸­ï¼æåç«¯å¼åæéç<span style=color:red;>å·¥å·</span>ã<span style=color:red;>ææ¯</span>ã<span style=color:red;>æµç¨</span>ã<span style=color:red;>ç»éª</span>ç­è¿è¡<u>è§èå</u>ã <u>æ åå</u>ã***==
>
> ==***<span style=color:red;>èªæä½ç³»</span>ï¼æä¸å¥æ åçå¼åæ¹æ¡åæµç¨***==

- ***<span style=color:red;>æ¨¡åå</span>ï¼`js` çæ¨¡ååã`css` çæ¨¡ååãèµæºçæ¨¡ååï¼***
-  ***<span style=color:red;>ç»ä»¶å</span>ï¼å¤ç¨ç°æç `UI` ç»æãæ ·å¼ãè¡ä¸ºï¼***
- ***<span style=color:red;>è§èå</span>ï¼ç®å½ç»æçååãç¼ç è§èåãæ¥å£è§èåãææ¡£è§èåã `Git` åæ¯ç®¡çï¼***
- ***<span style=color:red;>èªå¨å</span>ï¼èªå¨åæå»ºãèªå¨é¨ç½²ãèªå¨åæµè¯ï¼***









## å®è£

```cmd
# npm
npm i --save-dev webpack webpack-cli

# yarn
yarn add webpack webpack-cli --dev
```









## åºæ¬ä½¿ç¨

1. ***å¨é¡¹ç®æ ¹ç®å½ä¸­ï¼åå»º `webpack.config.js` éç½®æä»¶ï¼å¹¶éç½®***

   + ```js
     // å¯¼åº webpack éç½®å¯¹è±¡
     module.exports = {
         mode: 'development' // ç¨äºæå®æå»ºæ¨¡å¼(å¼å)
     };
     ```

2. ***å¨ `package,json`ç`scripts`èç¹ä¸ï¼æ°å¢ `dev`èæ¬***

   1. ```json
      "scripts": {
          "dev": "webpack" // å¯éè¿ npm run æ§è¡
      }
      ```

3. ***å¨ç»ç«¯ä¸­æ§è¡ `npm run dev` å½ä»¤ï¼å¯¹é¡¹ç®è¿è¡æåæå»º***











## ð©ºéç½®

### ðwebpack.config.js

> ***`webpack.config.js` æ¯ `webpack` çéç½®æä»¶***
>
> ***`webpack` å¨çæ­£å¼å§æåæå»ºä¹åï¼ä¼åè¯»åè¿ä¸ªéç½®æä»¶ï¼ ä»èåºäºç»å®çéç½®ï¼å¯¹é¡¹ç®è¿è¡æå***











### â­æ¨¡å¼(mode)

```js
module.exports = {
    mode: 'production' // ç¨äºæå®æå»ºæ¨¡å¼(çäº§)
};
```

+ ###### ***`mode: development`	ï¼å¼åæ¨¡å¼***

  + ###### *<span style=color:red;>ä¸ä¼</span>å¯¹æåçæçæä»¶<span style=color:red;>è¿è¡ä»£ç åç¼©</span>å<span style=color:red;>æ§è½ä¼å</span>*

  + ###### *æå<span style=color:red;>éåº¦å¿«</span>*

+ ###### ***`mode: production`	ï¼çäº§æ¨¡å¼***

  + ###### *<span style=color:red;>ä¼</span>å¯¹æåçæçæä»¶<span style=color:red;>è¿è¡ä»£ç åç¼©</span>å<span style=color:red;>æ§è½ä¼å</span>*

  + ###### *æå<span style=color:red;>éåº¦æ¢</span>*









### â¡å¥å£èµ·ç¹(entry)

> ==*æ¥æå®ä¸ä¸ªå¥å£èµ·ç¹ï¼æå¤ä¸ªå¥å£èµ·ç¹ï¼ï¼**é»è®¤å¼**ä¸º `./src/index.js`*==

```js
const config = {
    entry: 'index.js' // æåå¥å£æä»¶çè·¯å¾
};

module.exports = config;
```







### â¬åºå£(output)

> ==*æå®`webpack` å¨åªéè¾åºå®æåå»ºç `bundles`ï¼ä»¥åå¦ä½å½åè¿äºæä»¶ï¼**é»è®¤å¼**ä¸º `./dist/main.js`*==

```js
const path = require('node:path');

module.exports = {
    entry: 'index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // ç®æ è¾åºç®å½ path çç»å¯¹è·¯å¾
        filename: 'index_bundle.js' // è¾åºæä»¶çæä»¶å
    }
};
```









### ð§å è½½å¨(loader)

> ==*`loader` è®© `webpack` è½å¤å»å¤çé£äºé `JavaScript` æä»¶ï¼`webpack` èªèº«åªçè§£ `JavaScript`ï¼*==
>
> ==**:grey_exclamation:*`loader` å¯ä»¥å°ææç±»åçæä»¶è½¬æ¢ä¸º `webpack` è½å¤å¤ççæææ¨¡åï¼ç¶åä½ å°±å¯ä»¥å©ç¨ `webpack` çæåè½åï¼å¯¹å®ä»¬è¿è¡å¤ç***==
>
> â<span style=color:red;>***åå© `webpack` æåå¤çç¹å®çæä»¶æ¨¡å***</span>

+ *`css-loader` å¯ä»¥æåå¤ç `css` ç¸å³çæä»¶*
+ *`less-loader` å¯ä»¥æåå¤ç `less` ç¸å³çæä»¶*
+ *`babel-loader` å¯ä»¥æåå¤ç `webpack` æ æ³å¤çç `é«çº§JS` è¯­æ³*







#### ð¥loader çè°ç¨è¿ç¨

**<span style=font-size:20px;>(1)</span>**

<center><img src="images/loader.png" alt="loaderçè°ç¨è¿ç¨" style="zoom:110%;border: 2px solid silver" title="loaderçè°ç¨è¿ç¨" /></center>

**<span style=font-size:20px;>(2)</span>**

<center><img src="images/loader%E7%9A%84%E4%BD%9C%E7%94%A8.png" alt="loaderçä½ç¨" style="zoom:110%;border: 2px solid silver" title="loaderçä½ç¨" /></center>











#### ðéç½®å±æ§

> :grey_exclamation:==*ä¸ä¸ªåç¬ç `module` å¯¹è±¡å®ä¹äº `rules` å±æ§ï¼éé¢åå«ä¸¤ä¸ªå¿é¡»å±æ§ï¼`test` å `use`*==
>
> â==***<span style=color:red;>å¤ä¸ª `loader`ç è°ç¨é¡ºåºæ¯ï¼ä»åå¾åè°ç¨</span>***==

1. *`test` å±æ§ï¼ç¨äºæ è¯åºåºè¯¥è¢«å¯¹åºç `loader` è¿è¡è½¬æ¢çæä¸ªææäºæä»¶*
2. *`use` å±æ§ï¼è¡¨ç¤ºè¿è¡è½¬æ¢æ¶ï¼åºè¯¥ä½¿ç¨åªä¸ª `loader`*
3. *`exclude`å±æ§ï¼è¡¨ç¤ºæé¤ç¹å®æ¡ä»¶==(å¯é)==*

```js
const config = {
    output: {
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, // å¯ä½¿ç¨æ­£åæ ¡éªå¤æ­
                use: 'babel-loader', // ä¸ä¸ªå¼å¯ä½¿ç¨å­ç¬¦ä¸²å½¢å¼,å¤ä¸ªå¿é¡»ä½¿ç¨æ°ç»
                exclude: '/node_modules/' // ä¸ä¸ªå¼å¯ä½¿ç¨å­ç¬¦ä¸²å½¢å¼,å¤ä¸ªå¿é¡»ä½¿ç¨æ°ç»
            }
        ]
    }
};

module.exports = config;
```









#### å¤ç css æä»¶

1. ###### *å®è£*

   + ```cmd
     npm i style-loader css-loader --save-dev
     ```

2. ###### *å¨ `webpack.config.js` ç `module.rules` çèç¹ä¸­éç½®*

   + ```json
     module: { // éç½®ææç¬¬ä¸æ¹æ¨¡åçå¹éè§å
         rules: [ // æä»¶åç¼åçå¹éè§å
             { test: /\.css$/, use: ['style-loader', 'css-loader'] }
         ]
     }
     ```









#### å¤ç less æä»¶

1. ###### *å®è£*

   + ```cmd
     npm i less-loader less --save-dev
     ```

2. ###### *å¨ `webpack.config.js` ç `module.rules` çèç¹ä¸­éç½®*

   + ```js
     module: {
         rules: [
             { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
         ]
     }
     ```









#### å¤ç url è·¯å¾ç¸å³çæä»¶

ð[url-loader](https://www.npmjs.com/package/url-loader)

1. ###### *å®è£*

   + ```cmd
     npm i url-loader file-loader --save-dev
     ```

2. ###### *å¨ `webpack.config.js` ç `module.rules` çèç¹ä¸­éç½®*

   + ```js
     module: {
         rules: [
             {
                 test: /\.(png|jpg|gif)$/i,
                 // æ¹å¼(1): ä»¥æ¥è¯¢å­ç¬¦ä¸²çå½¢å¼éç½®åæ°
     	            // use: 'url-loader?limit=22229'
     	            // limit ç¨æ¥æå®å¾ççå¤§å°(å­èbyte); é»è®¤true,åä¹false(ä¸éå¶æä»¶å¤§å°)
     	            // åªè¦ â¤ limit å¤§å°çå¾ç,å°±ä¼è¢«è½¬ä¸º base64 æ ¼å¼çå¾ç
                 // æ¹å¼(2): å¯¹è±¡å½¢å¼
                 use: {
                     loader: 'url-loader', // å¤çç loader
                     options: { // éç½®éé¡¹
                         limit: 22229,
                         mimetype: 'image/png', // è®¾ç½®è¦è½¬æ¢çæä»¶ç MIME ç±»å
                         outputPath: 'images', // è®¾ç½®æä»¶è¾åºç path ä½ç½®
                     }
                 }
             }
         ]
     }
     ```









#### å¤ç js é«çº§è¯­æ³

1. ###### *å®è£*

   + ```cmd
     npm i babel-loader @babel/core @babel/plugin-proposal-class-properties -D
     ```

2. ###### *å¨ `webpack.config.js` ç `module.rules` çèç¹ä¸­éç½®*

   + ```js
     module: {
         rules: [
             // å¿é¡»ä½¿ç¨ exclude æå®æé¤é¡¹(å ä¸ºnode_modulesç®å½ä¸çç¬¬ä¸æ¹åä¸éè¦æå)     
             { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' }
         ]
     }
     ```

3. ###### *å¨é¡¹ç®æ ¹ç®å½ä¸ï¼åå»º `babel.config.js` éç½®æä»¶ï¼å®ä¹ `Babel` çéç½®é¡¹*

   + ```js
     module.exports = {
         // å£°æ babel å¯ç¨çæä»¶
         plugins: [
             // ðhttps://babeljs.io/docs/en/babel-plugin-proposal-class-properties
             ['@babel/plugin-proposal-class-properties', { 'loose': true }]
         ]
     }
     ```











### ðå«å(alias)

> ==*ä¸ºæ¨¡åææäºæ¨¡ååå»ºå«åï¼**<u><span style=color:red;>å¯¼å¥æ¶å°±ä¸éè¦ç¸å¯¹è·¯å¾ï¼èå¯ä»¥ä½¿ç¨å«å</span></u>***==

```js
// å¨ webpack.config.js æä»¶ä¸­éç½®
const path = require('path');

module.exports = {
    //...
    resolve: {
        alias: { // ä¸ºæ¨¡ååå»ºå«å
            '@': path.resolve(__dirname, 'src/'),
        }
    }
}

// (jsä¸­) ä½¿ç¨å«åå¯¼å¥æ¨¡å
import module from '@/module-path';
```















## ð¦æååå¸

> ==***é¡¹ç®å¼åå®æä¹åï¼éè¦ä½¿ç¨ `webpack` å¯¹é¡¹ç®è¿è¡æååå¸***==
>
> :grey_exclamation:==***<u>ä¸ºäºè®©é¡¹ç®è½å¤å¨çäº§ç¯å¢ä¸­é«æ§è½çè¿è¡</u>ï¼éè¦å¯¹é¡¹ç®è¿è¡æååå¸***==





### ð¡æ­¥éª¤

1. ***å¨ `package.json` æä»¶ç `scripts` èç¹ä¸ï¼æ°å¢ `build` å½ä»¤***

   + ```json
     "scripts": {
         "dev": "webpack serve", // å¼åç¯å¢æ¶è¿è¡
         "build": "webpack --mode production" // æååå¸æ¶è¿è¡
     }
     
     /*
     	"build": "webpack --mode production"
     		--mode : ç¨æ¥æå® webpack çè¿è¡æ¨¡å¼,ä¼è¦ç webpack.config.js ä¸­ç model éé¡¹
     */
     ```

2. ***å° `JavaScript` æä»¶ç»ä¸çæå° `js` ç®å½`(webpack.config.js)`***

   + ```js
     output: {
         path: path.join(__dirname, 'dist'),
         filename: 'js/index_bundle.js'
     }
     ```

3. ***å°å¾çæä»¶ç»ä¸çæå° `images` ç®å½`(webpack.config.js)`***

   + ```js
     {
         test: /\.(png|jpg|gif)$/i,
         use: [
             {
                 loader: 'url-loader',
                 options: {
                     limit: 22229,
                     outputPath: 'images', // è®¾ç½®æä»¶è¾åºç path ä½ç½®
                 }
             }
         ]
     }
     ```













## ð§©æä»¶(Plugins)

==***`Webpack`å·æä¸°å¯çæä»¶æ¥å£ï¼ä½¿å¾`webpack`åå¾çµæ´»***==







### webpack-dev-server

++++

> ==***å¯ä»¥è®© `webpack` çå¬é¡¹ç®æºä»£ç çååï¼ä»èè¿è¡èªå¨æåæå»º***==
>
> :grey_exclamation:==***`webpack-dev-server` ä¼å¯å¨ä¸ä¸ªå®æ¶æåç `http` æå¡å¨***==

1. ***å®è£***

   + ```cmd
     npm i webpack-dev-server -D
     ```

2. ***ä¿®æ¹ `package.json`ç `scripts` èç¹ä¸­ç `dev`å½ä»¤***

   + ```json
     "scripts": {
         "dev": "webpack serve"
     }
     
     /* // æ´å¤éç½®
     	"dev": "webpack-dev-server --open --port 8080 --contentBase src"
     		--open : è¡¨ç¤ºèªå¨æå¼æµè§å¨
     		--port 8080 : è®¾ç½®ç«¯å£å·
     		--contentBase src : æsrcç®å½è®¾å®ä¸ºè¢«webpack-dev-serveræå¡å¨ç´æ¥æç®¡çç®å½
     */
     ```

3. ***å¨`webpack.config.js`æä»¶ä¸­æ·»å `devServer`èç¹è¿è¡éç½®***

   + ```json
     devServer: {
         static: "./",
         open: true,	// åæ¬¡æåå®æåï¼èªå¨æå¼æµè§å¨(å¯é)
     	host: '127.0.0.1',	// å®æ¶æåæä½¿ç¨çä¸»æºå°å(å¯é)
     	port: 8080 	// å®æ¶æåéä½¿ç¨çç«¯å£å·(å¯é)
     }
     ```

4. ***ç»ç«¯è¿è¡ `npm run dev` å½ä»¤è¿è¡æåï¼å¯éè¿ `http://localhost:8080/`æ¥è¯¢èªå¨æåç»æ***









#### ðæåçæçæä»¶

+ ###### *éç½®äº `webpack-dev-server` ä¹åï¼<u><span style="color:black;">æåçæçæä»¶å­æ¾å°äºåå­ä¸­</span></u>*

  + <span style="color:black;">*ä¸åæ ¹æ® `output` èç¹æå®çè·¯å¾ï¼å­æ¾å°å®éçç©çç£çä¸*</span>
  + <span style="color:black;">*æé«äºå®æ¶æåè¾åºçæ§è½ï¼å ä¸ºåå­æ¯ç©çç£çéåº¦å¿«å¾å¤*</span>

+ ###### *çæå°åå­ä¸­çæä»¶ï¼<u><span style="color:black;">é»è®¤æ¾å°äºé¡¹ç®çæ ¹ç®å½ä¸­</span></u>ï¼èä¸æ¯èæçãä¸å¯è§ç*

  + <span style="color:black;">*å¯ä»¥ç´æ¥ç¨ `/` è¡¨ç¤ºé¡¹ç®æ ¹ç®å½ï¼åé¢è·ä¸è¦è®¿é®çæä»¶åç§°ï¼å³å¯è®¿é®åå­ä¸­çæä»¶*</span>









### html-webpack-plugin

****

<center><img src="images/html-webpack-plugin.png" alt="html-webpack-plugin" style="zoom:40%;border: 3px solid" title="html-webpack-plugin" /></center>

1. ***å®è£***

   + ð[html-webpack-plugin - GitHub](https://github.com/jantimon/html-webpack-plugin)

   + ```cmd
      npm i --save-dev html-webpack-plugin
     ```

2. ***éç½® `webpack.config.js` æä»¶***

   + ```js
     // 1.å¯¼å¥ html-webpack-plugin æä»¶
     const HtmlWebpackPlugin = require('html-webpack-plugin');
     
     // 2.åå»ºæä»¶å®ä¾å¯¹è±¡
     const htmlWebpackPlugin = new HtmlWebpackPlugin({
         // title: 'INDEX', // ç¨äºçæç HTML ææ¡£çæ é¢
         template: './src/index.html', // æå®åææ¡£çç¸å¯¹è·¯å¾æç»å¯¹è·¯å¾
         filename: './index.html' // æå®è¦å°çæçæä»¶çå­æ¾è·¯å¾, ç¼ºçå¼ä¸º index.html
     });
     
     // å¯¼åº webpack éç½®å¯¹è±¡
     module.exports = {
         entry: 'index.js',
         output: {
             path: __dirname + '/dist',
             filename: 'index_bundle.js'
         },
         plugins: [ // 3.å¨ plugins èç¹ä¸­,éç½® html-webpack-plugin æä»¶çæ
             htmlWebpackPlugin
         ]
     };
     ```

3. ***ç»ç«¯è¿è¡ `npm run dev` å½ä»¤è¿è¡æåï¼å¯éè¿ `http://localhost:8080/`æ¥è¯¢èªå¨æåç»æ***









#### ðæä»¶çæçæä»¶

+ ###### *éè¿ `HTMLæä»¶`å¤å¶å°é¡¹ç®æ ¹ç®å½ä¸­ç `html` é¡µé¢ï¼<u><span style="color:black;">ä¹è¢«æ¾å°äºåå­ä¸­</span></u>*

+ ###### *`HTMLæä»¶`å¨çæç `html` é¡µé¢æ¶ï¼<u><span style="color:black;">èªå¨æ³¨å¥</span></u>äºæåçæä»¶*









### clean-webpack-plugin

++++

> ==***ç¨äºæ¯æ¬¡æååå¸æ¶èªå¨æ¸çæ `dist` ç®å½ä¸­çæ§æä»¶***==

1. ***å®è£***

   - ð[clean-webpack-plugin - GitHub](https://github.com/johnagan/clean-webpack-plugin)

   - ```cmd
     npm i --save-dev clean-webpack-plugin
     ```

2. ***éç½® `webpack.config.js` æä»¶***

   + ```js
     // å¯¼å¥ clean-webpack-plugin æä»¶
     const { CleanWebpackPlugin } = require('clean-webpack-plugin');
     
     // åå»ºæä»¶å®ä¾å¯¹è±¡
     const cleanWebpackPlugin = new CleanWebpackPlugin();
     
     // å¨ pluginsèç¹ä¸­éç½®æä»¶
     plugins: [ cleanWebpackPlugin, ... ]
     ```















## ðSource Map

==***`Source Map` å°±æ¯ä¸ä¸ªä¿¡æ¯æä»¶ï¼éé¢<span style=color:red;>å­å¨çåç¼©æ··æ·åçä»£ç ï¼æå¯¹åºç<u>è½¬æ¢åçä½ç½®</u></span>***==





### éç½®

==***å¨ `webpack.config.js` ä¸­æ·»å çéç½®ï¼å¯ä¿è¯<span style=color:red;>è¿è¡æ¶æ¥éçè¡æ°</span>ä¸<span style=color:red;>æºä»£ç çè¡æ°</span>ä¿æä¸è´***==

```js
const webpackConfig = {
    mode: 'development',
    devtool: 'eval-source-map', // ä»æ¨èå¨ "å¼åç¯å¢" ä¸ä½¿ç¨,ä¸å»ºè®®å¨ "çæç¯å¢" ä¸ä½¿ç¨
}

module.exports = webpackConfig;
```









#### âéè¯¯æ å°

- ***`nosources-source-map`  ï¼éè¯¯ä»£ç åç¡®ä¿¡æ¯ï¼ä½æ¯æ²¡æä»»ä½æºä»£ç ä¿¡æ¯***
- ***`hidden-source-map`	ï¼åªè½ä¼æç¤ºæå»ºåä»£ç éè¯¯ä¿¡æ¯ï¼æ²¡æä»»ä½æºä»£ç ä¿¡æ¯***
- ***`source-map`  ï¼éè¯¯ä»£ç åç¡®ä¿¡æ¯ å æºä»£ç çéè¯¯ä½ç½®***
- ***`eval-source-map`  ï¼æ¯ä¸ªæä»¶é½çæå¯¹åºç `source-map`ï¼éè¯¯ä»£ç åç¡®ä¿¡æ¯ å æºä»£ç çéè¯¯ä½***









#### :sunrise_over_mountains:ç¯å¢éç½®

+ ***<span style=color:red;>å¼åç¯å¢</span>	:	`eval-source-map / eval-cheap-module-source-map`***
+ ***<span style=color:red;>çäº§ç¯å¢</span>	:	`nosources-source-map / hidden-source-map`***















## â«â«â«ç»

<center><b><i><u>- ææ³æä¸ºä½ å»éª¨é­å¿ä¹äºº -</u></i></b></center>


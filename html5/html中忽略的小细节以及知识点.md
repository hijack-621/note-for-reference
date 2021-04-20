```html
<meta name="keyword" content="js,html,cssmysql"> 
这个meta是为搜索引擎设计的，当你搜索content中的内容时，你的网页有机会被展示为词条
<meta name="description" content="这是一段描述">
这个meta也是为搜索引擎设计的，当你的网页被展示为词条时，词条下的大纲藐视就会展示你这个description中content内容
```

一些语义化标签：

  + ‘<article></article>’  表示一段独立的内容区域

  + ‘<header></header>’ 表示一个区域的头部

  + ‘<footer></footer>’ 表示一个区域的地底部

  + ‘<section></section>’ 表示一组相似的区域的组合

  + ‘<aside></aside>’ 表示侧边栏，广告位的小区域

  + ‘<main></main>’ 表示也页面主体区域，一般出现一次

  + <abbr> :简写的文字   <time>：用于放置时间

  + <sub>:下标  h<sub>2</sub>0       <sup>:上标  5<sup>2</sup>

  + <del> :  划除  <del>200</del>  <ins>： <ins>180</ins>

  + <code>:表示 该区域放置代码，也仅仅只是表示这个语义，其他没有任何功能了

  + <progress>:进度条 标签  <strong>:着重强调  文字变粗  <em>:文字倾斜 <mark>:文字高亮

  + <cite>:用于注明出处，引用地址等时候使用,大段文字的引用可以用 <blockquote>包裹

  + <‘address’>：用于展示地址，url等

    ​    

## form 表单中的小知识：

1.  <input/>： 支持  pattern【设置输入限制，比如最多几位字符，字母还是数字等等】和 oninvalid=“ func('输入字符不符合规定)” 【设置输入不对的提示语】
2. <input type="file"  accept:''>:accept可以设置允许上传的文件类型！！！！
3. html5中  表单中提供了一种类似于select 的标签  <datalist id='data'><option></option></datalist>  只是需要把这个id-data，通过 list="data"  绑定到 哪个表单元素上， 然后点击哪个表单元素就可以看到有下拉框以供选择！！！
4. ‘<dl><dt></dt><dd></dd></dl>’:描述性列表，其中dt为文字描述，dd为每一项
5. 播放器： 尽量使用第三方扩展： videojs,阿里云播放器等


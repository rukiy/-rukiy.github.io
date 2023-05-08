"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[263],{4649:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-8d6bc65c","path":"/posts/2021-12-07-%E6%90%AD%E5%BB%BAv2ray.html","title":"搭建 v2ray (docker)","lang":"zh-CN","frontmatter":{"layout":"Post","title":"搭建 v2ray (docker)","subtitle":"v2ray nginx ws tls docker","author":"Rukiy","date":"2021-12-07T00:00:00.000Z","useHeaderImage":true,"headerImage":"/img/in-post/2021-12-07/header.webp","headerMask":"rgba(40, 57, 101, .4)","catalog":true,"giscus":false,"tags":["v2ray","nginx","docker"]},"excerpt":"<p>使用docker部署v2ray和nginx,并配置ws协议,开启tls</p>\\n","headers":[{"level":2,"title":"说明","slug":"说明","children":[{"level":3,"title":"必要条件","slug":"必要条件","children":[]},{"level":3,"title":"创建目录","slug":"创建目录","children":[]},{"level":3,"title":"v2ray配置","slug":"v2ray配置","children":[]},{"level":3,"title":"nginx配置","slug":"nginx配置","children":[]},{"level":3,"title":"启动v2ray","slug":"启动v2ray","children":[]},{"level":3,"title":"启动nginx","slug":"启动nginx","children":[]},{"level":3,"title":"额外工作","slug":"额外工作","children":[]}]}],"git":{"updatedTime":1683530127000},"readingTime":{"minutes":2,"words":330},"filePathRelative":"posts/2021-12-07-搭建v2ray.md"}')},9626:(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});var s=a(6252);const i=[(0,s.uE)('<p>使用docker部署v2ray和nginx,并配置ws协议,开启tls</p><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><h3 id="必要条件" tabindex="-1"><a class="header-anchor" href="#必要条件" aria-hidden="true">#</a> 必要条件</h3><ol><li>docker</li><li>域名一枚</li><li>证书(证书.crt,证书.key)</li></ol><h3 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/v2ray\n<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/nginx/html\n<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/nginx/conf\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v2ray配置" tabindex="-1"><a class="header-anchor" href="#v2ray配置" aria-hidden="true">#</a> v2ray配置</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tee</span> /home/v2ray/config.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;\n{\n    &quot;log&quot;: {\n        &quot;access&quot;: &quot;/var/log/v2ray/access.log&quot;,\n        &quot;error&quot;: &quot;/var/log/v2ray/error.log&quot;,\n        &quot;loglevel&quot;: &quot;warning&quot;\n    },\n    &quot;inbounds&quot;: [\n        {\n            &quot;port&quot;: 20872,\n            &quot;protocol&quot;: &quot;vmess&quot;,\n            &quot;settings&quot;: {\n                &quot;clients&quot;: [\n                    {\n                        &quot;id&quot;: &quot;5d94d1bc-749b-7915-2ae8-5d30c8b6cd09&quot;,\n                        &quot;level&quot;: 1,\n                        &quot;alterId&quot;: 64\n                    }\n                ]\n            },\n            &quot;streamSettings&quot;: {\n                &quot;network&quot;: &quot;ws&quot;,\n                &quot;wsSettings&quot;: {\n                    &quot;path&quot;: &quot;/v2ray&quot;\n                }\n            }\n        }\n    ],\n    &quot;outbounds&quot;: [\n        {\n            &quot;protocol&quot;: &quot;freedom&quot;,\n            &quot;settings&quot;: {}\n        }\n    ]\n}\nEOF</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> nginx配置</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tee</span> /home/nginx/conf/default.conf <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;\nserver {\n\n    listen       80;\n    listen  [::]:80;\n    \n    listen 443 ssl http2 default_server;\n    server_name {域名};\n    root /usr/share/nginx/html;\n    \n    ssl_certificate &quot;/etc/nginx/conf.d/{证书}.crt&quot;;\n    ssl_certificate_key &quot;/etc/nginx/conf.d/{证书}.key&quot;;\n    ssl_session_cache shared:SSL:1m;\n    ssl_session_timeout 10m;\n    ssl_ciphers HIGH:!aNULL:!MD5;\n    ssl_prefer_server_ciphers on;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n    \n    location /koc {\n      proxy_redirect off;\n      proxy_pass http://v2ray:20872/v2ray;\n      proxy_http_version 1.1;\n      proxy_set_header Upgrade $http_upgrade;\n      proxy_set_header Connection &quot;upgrade&quot;;\n      proxy_set_header Host $http_host;\n    }\n}\nEOF</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动v2ray" tabindex="-1"><a class="header-anchor" href="#启动v2ray" aria-hidden="true">#</a> 启动v2ray</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> v2ray <span class="token parameter variable">-v</span> /home/v2ray:/etc/v2ray <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime:ro v2ray/official v2ray <span class="token parameter variable">-config</span><span class="token operator">=</span>/etc/v2ray/config.json\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动nginx" tabindex="-1"><a class="header-anchor" href="#启动nginx" aria-hidden="true">#</a> 启动nginx</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">--link</span> v2ray <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime:ro <span class="token parameter variable">-v</span> /home/nginx/html:/usr/share/nginx/html:ro <span class="token parameter variable">-v</span> /home/nginx/conf/default.conf:/etc/nginx/conf.d/default.conf:ro <span class="token parameter variable">-d</span> nginx\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="额外工作" tabindex="-1"><a class="header-anchor" href="#额外工作" aria-hidden="true">#</a> 额外工作</h3><ol><li>开放端口 <code>80</code> 和<code>443</code></li></ol>',16)],l={},r=(0,a(3744).Z)(l,[["render",function(e,n){return(0,s.wg)(),(0,s.iD)("div",null,i)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}}}]);
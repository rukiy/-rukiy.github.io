"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[451],{2146:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-694ad5be","path":"/posts/2023-05-08-arm%E7%89%88%E6%9C%AC%E7%BE%A4%E6%99%96%E5%AE%89%E8%A3%85docker.html","title":"arm版本群晖安装docker","lang":"zh-CN","frontmatter":{"layout":"Post","title":"arm版本群晖安装docker","subtitle":"非套件安装","author":"Rukiy","date":"2023-05-08T00:00:00.000Z","useHeaderImage":true,"headerImage":"/img/in-post/2023-05-08/header.webp","headerMask":"rgba(40, 57, 101, .4)","catalog":true,"giscus":false,"tags":["docker","群晖"]},"excerpt":"<p>arm版本群晖安装Docker,非套件.</p>\\n","headers":[{"level":2,"title":"安装","slug":"安装","children":[{"level":3,"title":"安装目录","slug":"安装目录","children":[]},{"level":3,"title":"下载安装docker","slug":"下载安装docker","children":[]},{"level":3,"title":"docker控制脚本","slug":"docker控制脚本","children":[]},{"level":3,"title":"脚本执行权限","slug":"脚本执行权限","children":[]}]},{"level":2,"title":"使用方法","slug":"使用方法","children":[]},{"level":2,"title":"卸载","slug":"卸载","children":[]}],"git":{"updatedTime":1683530127000},"readingTime":{"minutes":4,"words":628},"filePathRelative":"posts/2023-05-08-arm版本群晖安装docker.md"}')},8893:(n,s,e)=>{e.r(s),e.d(s,{default:()=>t});var a=e(6252);const i=[(0,a.uE)('<p>arm版本群晖安装Docker,非套件.</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="安装目录" tabindex="-1"><a class="header-anchor" href="#安装目录" aria-hidden="true">#</a> 安装目录</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 命令存放目录</span>\n<span class="token assign-left variable">BIN_PATH</span><span class="token operator">=</span><span class="token string">&#39;/usr/sbin&#39;</span>\n<span class="token assign-left variable">DATA_ROOT</span><span class="token operator">=</span><span class="token string">&#39;/volume1/docker&#39;</span>\n\n<span class="token comment"># 准备目录</span>\n<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker\n<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /var/lib/docker\n<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$DATA_ROOT</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载安装docker" tabindex="-1"><a class="header-anchor" href="#下载安装docker" aria-hidden="true">#</a> 下载安装docker</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># docker 版本</span>\n<span class="token assign-left variable">DOCKER_VER</span><span class="token operator">=</span><span class="token string">&#39;20.10.9&#39;</span>\n\n<span class="token comment"># 下载镜像地址</span>\n<span class="token comment"># DOCKER_MIRROR=&#39;https://download.docker.com&#39;</span>\n<span class="token assign-left variable">DOCKER_MIRROR</span><span class="token operator">=</span><span class="token string">&#39;https://mirrors.163.com/docker-ce&#39;</span>\n<span class="token assign-left variable">GITHUB_MIRROR</span><span class="token operator">=</span><span class="token string">&#39;https://cors.isteed.cc&#39;</span>\n\n<span class="token comment"># 安装docker</span>\n<span class="token function">curl</span> <span class="token parameter variable">-fLo</span> docker.tgz <span class="token string">&quot;<span class="token variable">$DOCKER_MIRROR</span>/linux/static/stable/<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>/docker-<span class="token variable">${DOCKER_VER}</span>.tgz&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> xvf docker.tgz <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> +x <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> docker/* <span class="token variable">$BIN_PATH</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token function">docker</span> docker.tgz\n\n<span class="token comment"># 安装docker-compose</span>\n<span class="token function">curl</span> <span class="token parameter variable">-fLo</span> <span class="token variable">$BIN_PATH</span>/docker-compose <span class="token string">&quot;<span class="token variable">$GITHUB_MIRROR</span>/https://github.com/docker/compose/releases/latest/download/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x <span class="token variable">$BIN_PATH</span>/docker-compose\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker控制脚本" tabindex="-1"><a class="header-anchor" href="#docker控制脚本" aria-hidden="true">#</a> docker控制脚本</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">EOF\n{\n  &quot;storage-driver&quot;: &quot;vfs&quot;,\n  &quot;data-root&quot;: &quot;<span class="token variable">$DATA_ROOT</span>&quot;,\n  &quot;experimental&quot;: true,\n  &quot;registry-mirrors&quot;: [\n    &quot;https://docker.mirrors.ustc.edu.cn&quot;,\n    &quot;https://registry.docker-cn.com&quot;\n  ]\n}\nEOF</span>\n\n<span class="token function">tee</span> <span class="token variable">$BIN_PATH</span>/docker.sh <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;\n#!/bin/sh\nset -e\n\nif [ &quot;$(id -u)&quot; != 0 ]; then\n\techo &gt;&amp;2 &quot;error: must be root to invoke $0&quot;\n\texit 1\nfi\n\nPIDFILE=&#39;/var/run/docker.pid&#39;\npid() {\n\tif [ -s &quot;$PIDFILE&quot; ]; then\n\t\tlocal pid\n\t\tpid=&quot;$(cat &quot;$PIDFILE&quot;)&quot;\n\t\tif ps &quot;$pid&quot; &gt; /dev/null 2&gt;&amp;1; then\n\t\t\techo &quot;$pid&quot;\n\t\t\treturn 0\n\t\tfi\n\tfi\n\treturn 1\n}\n\nstart() {\n\tif pid=&quot;$(pid)&quot;; then\n\t\techo &gt;&amp;2 &quot;error: Docker daemon is already running ($pid)&quot;\n\t\texit 1\n\tfi\n\n\tlocal KER_MOD=&quot;aufs macvlan ip_tables iptable_filter iptable_nat ip_conntrack ipt_state&quot;\n\n\tfor mod in $KER_MOD; do\n\t\tcheckmod=`lsmod | grep -i ${mod} | wc -l`\n\t\t\tif [[ $checkmod -eq 0 ]]; then\n\t\t\t\tmodprobe ${mod}\n\t\t\tfi\n\tdone\n\tsysctl -w net.ipv4.ip_forward=1\n\tsysctl -w net.ipv6.conf.all.forwarding=1\n\n\tEXTRA_ARGS=&quot;-H tcp://0.0.0.0:2375&quot;\n\n\tmkdir -p /var/lib/docker/log\n\n\techo &quot;Starting dockerd&quot;\n\tdockerd -H unix:// $EXTRA_ARGS --pidfile &quot;$PIDFILE&quot; &gt;&gt; /var/lib/docker/log/docker.log 2&gt;&amp;1 &amp;\n}\n\nstop() {\n\tif pid=&quot;$(pid)&quot;; then\n\t\techo &quot;Stopping dockerd ($pid)&quot;\n\t\tkill &quot;$pid&quot;\n\n\t\ti=30\n\t\twhile pid &gt; /dev/null; do\n\t\t\tsleep 1\n\t\t\ti=$(expr $i - 1)\n\t\t\tif [ &quot;$i&quot; -le 0 ]; then\n\t\t\t\techo &gt;&amp;2 &quot;error: failed to stop Docker daemon&quot;\n\t\t\t\texit 1\n\t\t\tfi\n\t\tdone\n\tfi\n\tif ! pid=&quot;$(pid)&quot;; then\n\t\tfor mod in $KER_MOD; do\n\t\t   checkmod=`lsmod | grep -i ${mod} | wc -l`\n\t\t   if [[ $checkmod -ge 1 ]]; then\n\t\t\t   modprobe -r ${mod}\n\t\t   fi\n\t\tdone\n\tfi\n}\n\nrestart() {\n\tstop\n\tstart\n}\n\nreload() {\n\tif ! pid=&quot;$(pid)&quot;; then\n\t\techo &gt;&amp;2 &quot;error: Docker daemon is not running&quot;\n\t\texit 1\n\tfi\n\tkill -s HUP &quot;$pid&quot;\n}\n\nstatus() {\n\tif pid &gt; /dev/null; then\n\t\techo &quot;Docker daemon is running&quot;\n\t\texit 0\n\telse\n\t\techo &quot;Docker daemon is not running&quot;\n\t\texit 1\n\tfi\n}\n\ncase &quot;$1&quot; in\n\tstart|stop|restart|reload|status)\n\t\t&quot;$1&quot;\n\t\t;;\n\n\t*)\n\t\techo &quot;Usage $0 {start|stop|restart|reload|status}&quot;\n\t\texit 1\n\t\t;;\nesac\nEOF</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="脚本执行权限" tabindex="-1"><a class="header-anchor" href="#脚本执行权限" aria-hidden="true">#</a> 脚本执行权限</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x <span class="token variable">$BIN_PATH</span>/docker.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 启动</span>\ndocker.sh start\n<span class="token comment"># 停止</span>\ndocker.sh stop\n<span class="token comment"># 重启</span>\ndocker.sh restart\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可在计划任务中设置启动执行 <code>docker.sh start</code></p><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> /usr/local/bin/ctr\n<span class="token function">rm</span> /usr/local/bin/containerd-shim-runc-v2\n<span class="token function">rm</span> /usr/local/bin/containerd\n<span class="token function">rm</span> /usr/local/bin/containerd-shim\n<span class="token function">rm</span> /usr/local/bin/dockerd\n<span class="token function">rm</span> /usr/local/bin/runc\n<span class="token function">rm</span> /usr/local/bin/docker-proxy\n<span class="token function">rm</span> /usr/local/bin/docker\n<span class="token function">rm</span> /usr/local/bin/docker-init\n<span class="token function">rm</span> /usr/local/bin/docker-compose\n<span class="token function">rm</span> /usr/local/bin/docker.sh\n<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',15)],l={},t=(0,e(3744).Z)(l,[["render",function(n,s){return(0,a.wg)(),(0,a.iD)("div",null,i)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}}}]);
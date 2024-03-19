(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{308:function(t,e,a){t.exports=a.p+"assets/img/image-20230718165341632.042a8dfd.png"},309:function(t,e,a){t.exports=a.p+"assets/img/image-20230509140241470.37846507.png"},310:function(t,e,a){t.exports=a.p+"assets/img/image-20230509141501634.d241b83b.png"},360:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Build OpenJDK for macOS on Apple Silicon.")]),t._v(" "),e("h2",{attrs:{id:"为什么编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么编译"}},[t._v("#")]),t._v(" 为什么编译")]),t._v(" "),e("p",[t._v("之前听"),e("a",{attrs:{href:"https://github.com/blindpirate",target:"_blank",rel:"noopener noreferrer"}},[t._v("blindpirate"),e("OutboundLink")],1),t._v(" 大佬说过, 为了解决某个fastjson的bug编译了一下jdk让其报出更详细的异常信息.")]),t._v(" "),e("p",[t._v("最近在读<深入理解java虚拟机(第三版 周志明)>, 第一章就是使用ubuntu 18 编译个openjdk12, 以供接下来学习使用. 想着不如就凑此机会用macos编译个jdk吧, 便开始了此次旅程.")]),t._v(" "),e("p",[t._v("网络上没找到好的build openjdk的教程, 遂在此记录一下, 供朋友们少走弯路")]),t._v(" "),e("p",[t._v("我的电脑配置:")]),t._v(" "),e("ul",[e("li",[t._v("型号: 2020款 13寸 macbookPro M1")]),t._v(" "),e("li",[t._v("OS: Macos 12.6.4")])]),t._v(" "),e("h2",{attrs:{id:"编译过程及使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译过程及使用"}},[t._v("#")]),t._v(" 编译过程及使用")]),t._v(" "),e("p",[t._v("该"),e("a",{attrs:{href:"https://gist.github.com/dgroomes/3af073b71c2c34581a155af9daa86564",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),e("OutboundLink")],1),t._v("提供了主要的实操思路,感谢前辈!")]),t._v(" "),e("p",[t._v("openJDK仓库中有一个相应版本的"),e("a",{attrs:{href:"https://github.com/openjdk/jdk/blob/jdk-17%2B2/doc/building.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("build文档"),e("OutboundLink")],1),t._v("，介绍了build 的详细信息")]),t._v(" "),e("p",[t._v("最重要的是这篇"),e("a",{attrs:{href:"https://wiki.openjdk.org/display/Build/Supported+Build+Platforms",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1),t._v(" 官方的build platforms wiki, 早看到他我能省一天的时间,也不至于走各种弯路. 进入链接后页面往下滑找到17&18部分, 可以获得的信息是官方使用系统版本是"),e("code",[t._v("11.6.1")]),t._v(", Xcode版本是"),e("code",[t._v("13.1")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("官方文档的意义是:用指定的OS版本和Xcode版本一定可以成功")]),t._v(" "),e("p",[t._v("你可以继续翻看该页面, 可以发现是从jdk17才支持 apple sillicon 的")]),t._v(" "),e("p",[t._v("我就走了弯路, 用了非指定xcode, build了17以下的版本, 想看弯路的请直接看文章下半部分")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(308),alt:"image-20230718165341632"}})]),t._v(" "),e("p",[e("strong",[t._v("环境准备")])]),t._v(" "),e("ul",[e("li",[t._v("OS: 与官方指定的最好,但现在还在用着11.X的系统的人不多了吧. 我的12.6.4编译成功啦,请放心使用.")]),t._v(" "),e("li",[t._v("Xcode: AppStore只能安装最新版本的, 就算下载到历史版本也只能让电脑存在一个Xcode且安装特别慢. 在此我推荐"),e("a",{attrs:{href:"https://www.xcodes.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Xcodes"),e("OutboundLink")],1),t._v(", 操作简单 安装快 可让同时存在多版本Xcode")]),t._v(" "),e("li",[t._v("JDK17: 想编译X版本的jdk, 本地需要已安装X-1版本号的jdk. 我知道对某些朋友来说这不是常识,所以在此着重写出来")])]),t._v(" "),e("h3",{attrs:{id:"去terminal中开始吧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去terminal中开始吧"}},[t._v("#")]),t._v(" "),e("strong",[t._v("去Terminal中开始吧")])]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载jdk源码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/openjdk/jdk.git\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" jdk\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到jdk18分支, 子版本可以认为是随便选的")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout jdk-18+32\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从此分支上切出来一个新分支, 以备如果编译失败可以重来")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" switch "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" david-jdk-18\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下方过程中会用到autoconf这个安装包, 提前安装")]),t._v("\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" autoconf\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自动配置, 根据当前电脑生成相应的配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" configure\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (Optional) If you had previously cloned the code and executed a build you will want to first clean the project. Execute make clean.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果需要的话, 请clean")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("可选"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" clean\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始编译! Wait for a long time")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 成功后当前文件夹下会生成的build文件夹, build/macos/images/jdk下,再往下就是jdk包那一大套东西啦")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" images\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证是否成功, 就是调用一下java -version 命令")]),t._v("\nbuild/macosx-x86_64-server-release/images/jdk/bin/java "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-version")]),t._v("\n")])])]),e("p",[e("strong",[t._v("在idea中如何使用")])]),t._v(" "),e("p",[t._v("指定项目的sdk为"),e("code",[t._v("build/macosx-x86_64-server-release/images/jdk")]),t._v("路径即可")]),t._v(" "),e("p",[e("img",{attrs:{src:a(309),alt:"image-20230509140241470"}})]),t._v(" "),e("h2",{attrs:{id:"如果不是指定环境会怎么样"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果不是指定环境会怎么样"}},[t._v("#")]),t._v(" 如果不是指定环境会怎么样")]),t._v(" "),e("p",[t._v("没人教,没找到合适的教程, 就愣着头干, 装了弯路, 真羡慕看到此文章的你")]),t._v(" "),e("p",[t._v("遇到的错误很多,但当时只记录了几个, 希望能帮助到有其他需求的你")]),t._v(" "),e("p",[e("strong",[t._v("编译工具不用官方指定版本")])]),t._v(" "),e("p",[t._v("我用Xcode14.0版本弄了一天，试了jdk-17分支、jdk-18别的分支，都报错啦")]),t._v(" "),e("p",[e("strong",[t._v("电脑上也有多个Xcode版本的话")])]),t._v(" "),e("p",[t._v("解决方法:提供一个有效的 SDK 路径")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" configure\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 报错信息如下, 这个错误提示是由于 configure 脚本无法找到 Xcode")]),t._v("\n configure: error: No xcodebuild tool and no system framework headers found, use --with-sysroot or --with-sdk-name to provide a path to a valid SDK\n \n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --with-sysroot 参数接受一个Xcode的路径")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我系统中安装的是Xcode-14.0.1.app，也可能是别的版本13.1.0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" configure --with-sysroot"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/Applications/Xcode-14.0.1.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk\n")])])]),e("p",[e("strong",[t._v("编译不支持的Apple sillicon的jdk版本")])]),t._v(" "),e("p",[t._v("会编译失败,但请不要去解决, 因为解决完这一个还有后面一堆问题要解决,不要问我是怎么知道的")]),t._v(" "),e("p",[t._v("在此记录一个"),e("a",{attrs:{href:"https://github.com/openjdk/jdk/pull/5180/files?diff=unified&w=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("pr"),e("OutboundLink")],1),t._v(", 给jdk修bug,编译过程中的错误，其实就是加了个空格")]),t._v(" "),e("blockquote",[e("p",[e("img",{attrs:{src:a(310),alt:"image-20230509141501634"}})])])])}),[],!1,null,null,null);e.default=n.exports}}]);
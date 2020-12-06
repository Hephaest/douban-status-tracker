<p align="center">
  <img width="400" alt="Douban Status in chinese" src="https://user-images.githubusercontent.com/37981444/101278762-94f7cf80-3772-11eb-9c7e-79130319788f.png">
  <h2 align="center">豆瓣状态跟踪板</h2>
  <p align="center">更新豆瓣状态相关的置顶的 Gist</p>
</p>

--- 

> 📌✨ 更多像这样的 Pinned Gist 项目请访问: https://github.com/matchai/awesome-pinned-gists

简体中文 | [English](README.md)

## Table of Contents
* [前人之作](#前人之作)
* [安装指南](#安装指南)
  * [准备工作](#准备工作)
  * [项目启动工作](#项目启动工作)
* [安装](#安装)
* [开源协议](#开源协议)

## 前人之作

这个仓库的代码基于 [douban-box](https://github.com/CodeDaraW/douban-box). 尤其感谢原作者 [CodeDaraW](https://github.com/CodeDaraW) 的开源贡献.

## 安装指南

### 准备工作

1. 创建一个公开的 [GitHub Gist](https://gist.github.com/)。
2. 创建一个 [personal access token](https://github.com/settings/tokens/new)，勾选 `gist` 并复制 token 值。
3. 登录或创建一个 [Douban](https://www.douban.com/) 账号。
4. 打开网页上的开发者控制台，查看 cookies，查到关键词为 **dbcl2** 所对应的值并复制。
<img width="600" align="center" src="https://user-images.githubusercontent.com/37981444/101277019-2d3b8780-3766-11eb-83c7-81b4a1071f45.png">
5. 点击豆瓣个人主页，并复制 URL 上的 ID 号。

### 项目启动工作

1. Fork 这个仓库
2. 点击 **Settings > Secrets**
3. 添加以下环境变量:

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0lax"><b>GIST_ID</b></td>
    <td class="tg-0lax">复制 URL 上的 ID 号: <br> https://gist.github.com/Hephaest/<b>fb33918377b0e2c2d6ffaad64d11bccb</b></td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>GH_TOKEN</b></td>
    <td class="tg-0lax">上述生成的 GitHub token</td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>DOUBAN_ID</b></td>
    <td class="tg-0lax">复制 URL 上的 ID 号: <br> https://www.douban.com/people/<b>12345</b></td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>DOUBAN_COOKIE</b></td>
    <td class="tg-0lax">上述复制的 <b>dbcl2</b> 对应的值</td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>LANG(Optional)</b></td>
    <td class="tg-0lax">偏好语言，默认是<b>中文</b>.</td>
  </tr>
</tbody>
</table>

## 安装

你可以通过 npm 下载安装:

``` sh
$ npm i -g douban-status-tracker
```

## 开源协议
[MIT License](https://github.com/Hephaest/douban-status-tracker/blob/master/LICENSE)
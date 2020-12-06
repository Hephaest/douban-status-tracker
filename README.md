<p align="center">
  <img width="400" alt="Douban Status in English" src="https://user-images.githubusercontent.com/37981444/101275947-a636e100-375e-11eb-9ce8-5affbda6e228.png">
  <h2 align="center">Douban Status Tracker</h2>
  <p align="center">Update a pinned gist to contain Douban stats</p>
</p>

--- 

> 📌✨ For more pinned-gist projects like this one, check out: https://github.com/matchai/awesome-pinned-gists

English | [简体中文](README_CN.md)

## Table of Contents
* [Previous Work](#previous-work)
* [Setup](#setup)
  * [Prep work](#prep-work)
  * [Project setup](#project-setup)
* [Installing](#installing)
* [License](#license)

## Previous Work

This repo is based off [douban-box](https://github.com/CodeDaraW/douban-box). Special thanks to [CodeDaraW](https://github.com/CodeDaraW).

## Setup

### Prep work

1. Create a new public [GitHub Gist](https://gist.github.com/).
2. Create a [personal access token](https://github.com/settings/tokens/new) with the `gist` scope and copy it.
3. Login or sign up a [Douban](https://www.douban.com/) account.
4. Open your developer console and copy the value corresponding to the name of **dbcl2**.
<img width="600" align="center" src="https://user-images.githubusercontent.com/37981444/101277019-2d3b8780-3766-11eb-83c7-81b4a1071f45.png">
5. Get your Douban ID by clicking your profile page. Copy the ID in the URL.

### Project setup

1. Fork this repo
2. Go to the repo **Settings > Secrets**
3. Add the following environment variables:

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<tbody>
  <tr>
    <td class="tg-0lax"><b>GIST_ID</b></td>
    <td class="tg-0lax">The ID portion from your gist url: <br> https://gist.github.com/Hephaest/<b>fb33918377b0e2c2d6ffaad64d11bccb</b></td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>GH_TOKEN</b></td>
    <td class="tg-0lax">The GitHub token generated above.</td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>DOUBAN_ID</b></td>
    <td class="tg-0lax">The ID portion from your Douban url: <br> https://www.douban.com/people/<b>12345</b></td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>DOUBAN_COOKIE</b></td>
    <td class="tg-0lax">The copied value corresponding to the name of <b>dbcl2</b> from developer console.</td>
  </tr>
  <tr>
    <td class="tg-0lax"><b>LANG(Optional)</b></td>
    <td class="tg-0lax">The preferred language, default is <b>Chinese</b>.</td>
  </tr>
</tbody>
</table>

## Installing

You can install this package by using npm:

``` sh
$ npm i -g douban-status-tracker
```

## License
[MIT License](https://github.com/Hephaest/douban-status-tracker/blob/master/LICENSE)
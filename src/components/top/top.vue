<template>
  <section class="guide_item">
    <svg class="icon_style">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('msite') !== -1? '#msiteActive' : '#msite'"></use>
    </svg>
    <span>外卖</span>
  </section>
  <section @click = "gotoAddress({path: `/search/${geohash}`})" class="guide_item">
    <svg class="icon_style">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('search') !== -1? '#findActive' : '#find'"></use>
    </svg>
    <span>搜索</span>
  </section>
  <section @click = "gotoAddress('/order')" class="guide_item">
    <svg class="icon_style">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('order') !== -1? '#orderActive' : '#order'"></use>
    </svg>
    <span>订单</span>
  </section>
  <section @click = "gotoAddress('/profile')" class="guide_item">
    <svg class="icon_style">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="$route.path.indexOf('profile') !== -1? '#profileActive' : '#profile'"></use>
    </svg>
    <span>我的</span>
  </section>
</template>

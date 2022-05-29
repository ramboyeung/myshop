<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #131518;
  margin-bottom: 50px;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  font-size: 100%;
}
ul,
li {
  list-style: none;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
html {
  color: #000;
  overflow-y: scroll;
  overflow: -moz-scrollbars;
}
body,
button,
input,
select,
textarea {
  font-size: 12px;
  font-family: "PingFang SC", Arial, "Microsoft YaHei", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
i,
em {
  font-style: normal;
}
small {
  font-size: 12px;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
button,
label {
  cursor: pointer;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
img {
  -ms-interpolation-mode: bicubic;
  border: 0;
}
textarea {
  resize: vertical;
}
.clearfix:after {
  display: block;
  content: "";
  height: 0;
  visibility: hidden;
  clear: both;
  line-height: 0;
  font-size: 0;
}
.clearfix {
  zoom: 1;
}

@import "./assets/font/iconfont.css";
</style>

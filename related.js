var homeUrl3 = &quot;<data:blog.homepageUrl/>&quot;;
var maxNumberOfPostsPerLabel = 7;
var maxNumberOfLabels = 10;
maxNumberOfPostsPerLabel = 50;
maxNumberOfLabels = 7;
function listEntries10(json) {
var ul = document.createElement(&#39;ul&#39;);
var maxPosts = (json.feed.entry.length &lt;= maxNumberOfPostsPerLabel) ?
json.feed.entry.length : maxNumberOfPostsPerLabel;
for (var i = 0; i &lt; maxPosts; i++) {
var entry = json.feed.entry[i];
var alturl;
for (var k = 0; k &lt; entry.link.length; k++) {
if (entry.link[k].rel == &#39;alternate&#39;) {
alturl = entry.link[k].href;
break;
}
}
var li = document.createElement(&#39;li&#39;);
var a = document.createElement(&#39;a&#39;);
a.href = alturl;
if(a.href!=location.href) {
var txt = document.createTextNode(entry.title.$t);
a.appendChild(txt);
li.appendChild(a);
ul.appendChild(li);
}
}
for (var l = 0; l &lt; json.feed.link.length; l++) {
if (json.feed.link[l].rel == &#39;alternate&#39;) {
var raw = json.feed.link[l].href;
var label = raw.substr(homeUrl3.length+13);
var k;
for (k=0; k&lt;20; k++) label = label.replace(&quot;%20&quot;, &quot; &quot;);
var txt = document.createTextNode(label);
var h = document.createElement(&#39;b&#39;);
h.appendChild(txt);
var div1 = document.createElement(&#39;div&#39;);
div1.appendChild(h);
div1.appendChild(ul);
document.getElementById(&#39;hompimpa&#39;).appendChild(div1);
}
}
}
function search10(query, label) {
var script = document.createElement(&#39;script&#39;);
script.setAttribute(&#39;src&#39;, query + &#39;feeds/posts/default/-/&#39;
+ label +
&#39;?alt=json-in-script&amp;callback=listEntries10&#39;);
script.setAttribute(&#39;type&#39;, &#39;text/javascript&#39;);
document.documentElement.firstChild.appendChild(script);
}
var labelArray = new Array();
var numLabel = 0;
<b:loop values='data:posts' var='post'>
<b:loop values='data:post.labels' var='label'>
textLabel = &quot;<data:label.name/>&quot;;
var test = 0;
for (var i = 0; i &lt; labelArray.length; i++)
if (labelArray[i] == textLabel) test = 1;
if (test == 0) {
labelArray.push(textLabel);
var maxLabels = (labelArray.length &lt;= maxNumberOfLabels) ?
labelArray.length : maxNumberOfLabels;
if (numLabel &lt; maxLabels) {
search10(homeUrl3, textLabel);
numLabel++;
}
}
</b:loop>
</b:loop>
var server='/api.php?url=';var static_server='/static';function jswarnclear(){document.getElementById("jscrwarn").innerHTML='';document.getElementById("jscrwarn2").innerHTML='';}
function Get(yourUrl){var Httpreq=new XMLHttpRequest();Httpreq.open("GET",yourUrl,false);Httpreq.send(null);return Httpreq.responseText;}
function print_magnet(ih,name){return '<a href="magnet:?xt=urn:btih:'+ih+'&dn='+encodeURIComponent(name)+print_trackers()+'"><img src="'+static_server+'/images/icon-magnet.gif" /></a>';}
function print_download(ih,name){return '<a href="magnet:?xt=urn:btih:'+ih+'&dn='+encodeURIComponent(name)+print_trackers()+'"><img src="'+static_server+'/images/icon-magnet.gif" /> Get This Torrent</a>';}
function print_trackers(){let tr='&tr='+encodeURIComponent('udp://tracker.coppersurfer.tk:6969/announce');tr+='&tr='+encodeURIComponent('udp://tracker.openbittorrent.com:6969/announce');tr+='&tr='+encodeURIComponent('udp://tracker.opentrackr.org:1337');tr+='&tr='+encodeURIComponent('udp://tracker.leechers-paradise.org:6969/announce');tr+='&tr='+encodeURIComponent('udp://tracker.dler.org:6969/announce');tr+='&tr='+encodeURIComponent('udp://opentracker.i2p.rocks:6969/announce');tr+='&tr='+encodeURIComponent('udp://47.ip-51-68-199.eu:6969/announce');return tr;}
function print_status(status){if(status=='trusted')return '&nbsp;<img src="'+static_server+'/images/trusted.png" alt="Trusted"/>';if(status=='vip')return '&nbsp;<img src="'+static_server+'/images/vip.gif" alt="VIP"/>';if(status=='helper')return '&nbsp;<img src="'+static_server+'/images/helper.png" alt="Helper"/>';if(status=='moderator')return '&nbsp;<img src="'+static_server+'/images/moderator.gif" alt="Moderator"/>';if(status=='supermod')return '&nbsp;<img src="'+static_server+'/images/supermod.png" alt="Super Mod"/>';if(status=='admin')return '&nbsp;<img src="'+static_server+'/images/admin.gif" alt="Admin"/>';return '&nbsp;';}
function print_top100_title(cat){var cc=cat.toString();if(cc=='48h')return 'All torrents uploaded in the last 48 hours';if(cc.substring(0,4)=='48h_'){return print_category(cc.substring(4),'top100:')+' uploaded in the 48 hours';}
if((Number(cc.substring(0,3))>99)&&(Number(cc.substring(0,3))<700)){return print_category(cc.substring(0,3),'top100:');}
return 'All torrents';}
function print_category(cat,lnk){if(typeof lnk==="undefined")lnk='category:';var main,cc=cat.toString();if(cat==0)return '';if(cc[0]==1)main='Audio';if(cc[0]==2)main='Video';if(cc[0]==3)main='Applications';if(cc[0]==4)main='Games';if(cc[0]==5)main='Porn';if(cc[0]==6)main='Other';var maintxt='<a href="/search.php?q='+lnk+cc[0]+'00">'+main+'</a> > <a href="/search.php?q='+lnk+cat+'">';if(cat==101)return maintxt+'Music'+'</a>';if(cat==102)return maintxt+'Audio Books'+'</a>';if(cat==103)return maintxt+'Sound clips'+'</a>';if(cat==104)return maintxt+'FLAC'+'</a>';if(cat==199)return maintxt+'Other'+'</a>';if(cat==201)return maintxt+'Movies'+'</a>';if(cat==202)return maintxt+'Movies DVDR'+'</a>';if(cat==203)return maintxt+'Music videos'+'</a>';if(cat==204)return maintxt+'Movie Clips'+'</a>';if(cat==205)return maintxt+'TV-Shows'+'</a>';if(cat==206)return maintxt+'Handheld'+'</a>';if(cat==207)return maintxt+'HD Movies'+'</a>';if(cat==208)return maintxt+'HD TV-Shows'+'</a>';if(cat==209)return maintxt+'3D'+'</a>';if(cat==299)return maintxt+'Other'+'</a>';if(cat==301)return maintxt+'Windows'+'</a>';if(cat==302)return maintxt+'Mac/Apple'+'</a>';if(cat==303)return maintxt+'UNIX'+'</a>';if(cat==304)return maintxt+'Handheld'+'</a>';if(cat==305)return maintxt+'IOS(iPad/iPhone)'+'</a>';if(cat==306)return maintxt+'Android'+'</a>';if(cat==399)return maintxt+'Other OS'+'</a>';if(cat==401)return maintxt+'PC'+'</a>';if(cat==402)return maintxt+'Mac/Apple'+'</a>';if(cat==403)return maintxt+'PSx'+'</a>';if(cat==404)return maintxt+'XBOX360'+'</a>';if(cat==405)return maintxt+'Wii'+'</a>';if(cat==406)return maintxt+'Handheld'+'</a>';if(cat==407)return maintxt+'IOS(iPad/iPhone)'+'</a>';if(cat==408)return maintxt+'Android'+'</a>';if(cat==499)return maintxt+'Other OS'+'</a>';if(cat==501)return maintxt+'Movies'+'</a>';if(cat==502)return maintxt+'Movies DVDR'+'</a>';if(cat==503)return maintxt+'Pictures'+'</a>';if(cat==504)return maintxt+'Games'+'</a>';if(cat==505)return maintxt+'HD-Movies'+'</a>';if(cat==506)return maintxt+'Movie Clips'+'</a>';if(cat==599)return maintxt+'Other'+'</a>';if(cat==601)return maintxt+'E-books'+'</a>';if(cat==602)return maintxt+'Comics'+'</a>';if(cat==603)return maintxt+'Pictures'+'</a>';if(cat==604)return maintxt+'Covers'+'</a>';if(cat==605)return maintxt+'Physibles'+'</a>';if(cat==699)return maintxt+'Other'+'</a>';return main;}
function print_size(size,f){var e='';if(f){e='&nbsp;('+size+' Bytes)';}
if(size>=1125899906842624)return round_to_precision(size/1125899906842624,0.01)+'&nbsp;PiB'+e;if(size>=1099511627776)return round_to_precision(size/1099511627776,0.01)+'&nbsp;TiB'+e;if(size>=1073741824)return round_to_precision(size/1073741824,0.01)+'&nbsp;GiB'+e;if(size>=1048576)return round_to_precision(size/1048576,0.01)+'&nbsp;MiB'+e;if(size>=1024)return round_to_precision(size/1024,0.01)+'&nbsp;KiB'+e;return size+'&nbsp;B';}
function round_to_precision(x,precision){var y=+x+(precision===undefined?0.5:precision/2);var sz=y-(y%(precision===undefined?1:+precision))+'';if(sz.indexOf('.')==-1)return sz;else return sz.substring(0,sz.indexOf('.')+3);}
function print_date(date){var dateObj=new Date(date*1000);var month=dateObj.getUTCMonth()+1;var day=dateObj.getUTCDate();var year=dateObj.getUTCFullYear();var m=dateObj.getUTCMonth()+1;var mm;if(m<10)mm='0'+m
else mm=m;var d=dateObj.getUTCDate();var dd;if(d<10)dd='0'+d
else dd=d;return dateObj.getUTCFullYear()+'-'+mm+'-'+dd;}
function getParameterByName(name,url){if(!url)url=window.location.href;name=name.replace(/[\[\]]/g,'\\$&');var regex=new RegExp('[?&]'+name+'(=([^&#]*)|&|#|$)'),results=regex.exec(url);if(!results)return null;if(!results[2])return '';return decodeURIComponent(results[2].replace(/\+/g,' '));}
function print_username(user){if(user=="Anonymous")return "Anonymous";var u;u=encodeURIComponent(user);return '<a href="/search.php?q=user:'+u+'">'+user+'</a>';}
function make_details(){var json_obj=JSON.parse(Get(server+'/t.php?id='+encodeURIComponent(getParameterByName('id'))));var elements=json_obj;document.getElementById("tlt").innerHTML=elements['name'];document.getElementById("name").innerHTML=elements['name'];document.getElementById("cat").innerHTML=print_category(elements['category']);document.getElementById("size").innerHTML=print_size(elements['size'],1);document.getElementById("user").innerHTML=print_username(elements['username'])+'&nbsp;'+print_status(elements['status']);document.getElementById("ih").innerHTML=elements['info_hash'];document.getElementById("s").innerHTML=elements['seeders'];document.getElementById("l").innerHTML=elements['leechers'];document.getElementById("d").innerHTML=print_download(elements['info_hash'],elements['name']);document.getElementById("d2").innerHTML=print_download(elements['info_hash'],elements['name']);document.getElementById("uld").innerHTML=print_date(elements['added']);document.getElementById("descr").innerHTML=elements['descr'].replace(/(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a target='_blank' rel='nofollow' href='$1'>$1</a>");document.getElementById("nfiles").innerHTML=elements['num_files'];}
function make_filelist(){var json_obj=JSON.parse(Get(server+'/f.php?id='+encodeURIComponent(getParameterByName('id'))));var elements=json_obj;var i=0;for(element in elements){if(i==1){document.write('\n<li class="alt">');i=0;}else{document.write('\n<li>');i=1;}
document.write('<span class="file-name">'+elements[element]['name'][0]+'</span><span class="file-size">'+print_size(elements[element]['size'][0],0)+'</span></li>\n');}}
function make_search(){var cats='',lnk='category:';if(getParameterByName('cat'))cats=cats+getParameterByName('cat');if(getParameterByName('audio'))cats=cats+',100';if(getParameterByName('video'))cats=cats+',200';if(getParameterByName('apps'))cats=cats+',300';if(getParameterByName('games'))cats=cats+',400';if(getParameterByName('porn'))cats=cats+',500';if(getParameterByName('other'))cats=cats+',600';if(cats[0]==',')cats=cats.substring(1);var qu=getParameterByName('q');if(qu.substring(0,13)=='top100:recent'){document.getElementById("tlt").innerHTML='Recent torrents';if(qu.substring(0,13)=='top100:recent'){var json_obj=JSON.parse(Get(server+'/precompiled/data_top100_recent.json'));}
if(qu.substring(0,14)=='top100:recent:'){var cpage=Number(get_q_part(qu,2));if(cpage==0){var json_obj=JSON.parse(Get(server+'/precompiled/data_top100_recent.json'));}else{var json_obj=JSON.parse(Get(server+'/precompiled/data_top100_recent_'+cpage+'.json'));}}}else if(qu.substring(0,7)=='top100:'){var json_obj=JSON.parse(Get(server+'/precompiled/data_top100_'+qu.substring(7)+'.json'));document.getElementById("tlt").innerHTML='Top 100: '+print_top100_title(qu.substring(7));lnk='top100:';}else if(qu.substring(0,9)=='category:'){var json_obj=JSON.parse(Get(server+'/q.php?q='+encodeURIComponent(qu)));document.getElementById("tlt").innerHTML='Browse '+print_category(qu.substring(9));}else if(qu.substring(0,5)=='user:'){var json_obj=JSON.parse(Get(server+'/q.php?q='+encodeURIComponent(qu)));document.getElementById("tlt").innerHTML='User: '+htmlEntities(qu.substring(5));}else{var json_obj=JSON.parse(Get(server+'/q.php?q='+encodeURIComponent(qu)+'&cat='+cats));document.getElementById("tlt").innerHTML='Results for: '+htmlEntities(qu);}
var i=0;var elements=json_obj;for(element in elements){if(i==1){document.write('\n<li class="list-entry alt" id="st">\n');i=0;}else{document.write('\n<li class="list-entry" id="st">\n');i=1;}
document.write('<span class="list-item item-type">'+print_category(elements[element]['category'],lnk)+'</span>');document.write('<span class="list-item item-name item-title"><a href="/description.php?id='+elements[element]['id']+'">'+elements[element]['name']+'</a></span>');document.write('<span class="list-item item-uploaded">'+print_date(elements[element]['added'])+'</span>');document.write('<span class="item-icons">'+print_magnet(elements[element]['info_hash'],elements[element]['name'])+print_status(elements[element]['status'])+'</span>');document.write('<span class="list-item item-size">'+print_size(elements[element]['size'],0)+'<input type="hidden" name="size" value="'+elements[element]['size']+'"/></span>');document.write('<span class="list-item item-seed">'+elements[element]['seeders']+'</span>');document.write('<span class="list-item item-leech">'+elements[element]['leechers']+'&nbsp;</span>');document.write('<span class="list-item item-user">'+print_username(elements[element]['username'])+'</span>\n</li>\n');}
document.write('</ol>\n');if(qu.substring(0,5)=='user:'){document.write('<center>\n');if(get_q_part(qu,1))print_pageselector(get_q_part(qu,1),Number(get_q_part(qu,2)),'/search.php?q=user:'+htmlEntities(get_q_part(qu,1)));document.write('</center>\n');}
if(qu.substring(0,13)=='top100:recent'){document.write('<center>\n');print_pageselector('recent',Number(get_q_part(qu,2)),'/search.php?q=top100:recent');document.write('</center>\n');}
document.write('</section>\n');}
function get_q_part(stra,part){if(part==2){if(stra.split(':').length==2)return 0;var pg=stra.split(':')[stra.split(':').length-1];if(isNaN(pg))return 0;if(pg=='')return 0;return Number(pg);}
return stra.split(':')[part];}
function setAll(){document.forms['q'].elements['audio'].checked=false;document.forms['q'].elements['video'].checked=false;document.forms['q'].elements['apps'].checked=false;document.forms['q'].elements['games'].checked=false;document.forms['q'].elements['porn'].checked=false;document.forms['q'].elements['other'].checked=false;}
function rmAll(){document.forms['q'].elements['all'].checked=false;}
var sort_o=new Array(10);sort_o[1]=1;sort_o[2]=1;sort_o[3]=0;sort_o[5]=0;sort_o[6]=0;sort_o[7]=0;sort_o[8]=1;function sortlist(sr){if(sort_o[sr]==1){tinysort.defaults.order='asc';sort_o[sr]=0;}else{tinysort.defaults.order='desc';sort_o[sr]=1;}
if(sr==5){tinysort('li#st',{selector:'input',attr:'value'});return;}
tinysort('li#st','span:nth-child('+sr+')');}
function htmlEntities(str){return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function print_footer(){document.write('<footer class="row flow-root flow-column align-center">\n','<nav>\n','<div>\n','<a href="http://piratebayztemzmv.onion" title="tor address">TOR</a> |\n','<a href="https://pirates-forum.org/" title="discussion forum" target="_blank">Forum</a> |\n','<a href="https://www.azirevpn.net/landing" target="_NEW"><b>VPN</b></a> |\n','<a href="https://tmp.ninja" target="_NEW"><b>FileHosting</b></a>\n','</div>\n','</nav>\n','<p style="overflow-wrap: break-word;">\n','<a href="https://bitcoin.org" target="_NEW">BTC</a>: <b>3EoJMDs79b3ztkYvj2E1D98eHnZyCSQKso</b>\n','<br /><a href="https://bitcoin.org" target="_NEW">BTC (Bech32)</a>: <b>bc1q9x30z7rz52c97jwc2j79w76y7l3ny54nlvd4ew</b>\n','<br /><a href="https://litecoin.org" target="_NEW">LTC</a>: <b>LS78aoGtfuGCZ777x3Hmr6tcoW3WaYynx9</b>\n','<br /><a href="https://getmonero.org" target="_NEW">XMR</a>: <b>46E5ekYrZd5UCcmNuYEX24FRjWVMgZ1ob79cRViyfvLFZjfyMhPDvbuCe54FqLQvVCgRKP4UUMMW5fy3ZhVQhD1JLLufBtu</b>\n','</p>\n','</footer>\n');}
function print_header1(){document.write('<section class="col-left" id="logo"><a href="/index.php"><img src="'+static_server+'/images/tpbsmall_notext.jpg" alt="The Pirate Bay"></a></section>\n','<section class="col-center">\n','<nav>\n','<a href="/index.php" title="Search Torrents"><strong>Search&nbsp;Torrents</strong></a> |\n','<a href="/browse.php" title="Browse Torrents">Browse&nbsp;Torrents</a> |\n','<a href="/search.php?q=top100:recent" title="Recent Torrent">Recent&nbsp;Torrents</a> |\n','<a href="/top.php" title="Top 100">Top&nbsp;100</a>\n','</nav>\n','<form action="/search.php">\n');}
function print_header2(){document.write('<input value="Pirate Search" type="submit">\n','<select name="cat" id="cat">\n','<option value="0">All</option>\n','<optgroup label="Audio">\n','<option value="101">Music</option>\n','<option value="102">Audio books</option>\n','<option value="103">Sound clips</option>\n','<option value="104">FLAC</option>\n','<option value="199">Other</option>\n','</optgroup>\n','<optgroup label="Video">\n','<option value="201">Movies</option>\n','<option value="202">Movies DVDR</option>\n','<option value="203">Music videos</option>\n','<option value="204">Movie clips</option>\n','<option value="205">TV shows</option>\n','<option value="206">Handheld</option>\n','<option value="207">HD - Movies</option>\n','<option value="208">HD - TV shows</option>\n','<option value="209">3D</option>\n','<option value="299">Other</option>\n','</optgroup>\n','<optgroup label="Applications">\n','<option value="301">Windows</option>\n','<option value="302">Mac</option>\n','<option value="303">UNIX</option>\n','<option value="304">Handheld</option>\n','<option value="305">IOS (iPad/iPhone)</option>\n','<option value="306">Android</option>\n','<option value="399">Other OS</option>\n','</optgroup>\n','<optgroup label="Games">\n','<option value="401">PC</option>\n','<option value="402">Mac</option>\n','<option value="403">PSx</option>\n','<option value="404">XBOX360</option>\n','<option value="405">Wii</option>\n','<option value="406">Handheld</option>\n','<option value="407">IOS (iPad/iPhone)</option>\n','<option value="408">Android</option>\n','<option value="499">Other</option>\n','</optgroup>\n','<optgroup label="Porn">\n','<option value="501">Movies</option>\n','<option value="502">Movies DVDR</option>\n','<option value="503">Pictures</option>\n','<option value="504">Games</option>\n','<option value="505">HD - Movies</option>\n','<option value="506">Movie clips</option>\n','<option value="599">Other</option>\n','</optgroup>\n','<optgroup label="Other">\n','<option value="601">E-books</option>\n','<option value="602">Comics</option>\n','<option value="603">Pictures</option>\n','<option value="604">Covers</option>\n','<option value="605">Physibles</option>\n','<option value="699">Other</option>\n','</optgroup>\n','</select>\n','</form>\n','</section>\n');}
function mark_selected(){var scate=document.getElementById('cat');if(scate){var ct=getParameterByName('cat');if((Number(ct)>99)&&(Number(ct)<700)){scate.value=ct;}else{scate.value=0;}}}
function print_search(){document.write('<section class="col-center">\n','<input type="text" id="flist" onkeyup="filter_list()" placeholder="Filter names.." size=40>','<ol id="torrents" class="view-single">\n','<li class="list-header">\n','<span class="list-item list-header item-type"><label onclick="sortlist(1);" title="Order by Category">Category</label></span>\n','<span class="list-item list-header item-name"><label onclick="sortlist(2);"  title="Order by Name">Name</label></span>\n','<span class="list-item list-header item-uploaded"><label onclick="sortlist(3);" title="Order by Date Uploaded">Uploaded</label></span>\n','<span class="list-item list-header item-icons">&nbsp;</span>\n','<span class="list-item list-header item-size"><label onclick="sortlist(5);" title="Order by Size">Size</label></span>\n','<span class="list-item list-header item-seed"><label onclick="sortlist(6);" title="Order by Seeders">SE</label></span>\n','<span class="list-item list-header item-leech"><label onclick="sortlist(7);" title="Order by Leechers">LE</label></span>\n','<span class="list-item list-header item-user"><label onclick="sortlist(8);" title="Order by ULed by">ULed by</label></span>\n','</li>\n');if(typeof make_search!=="undefined")make_search();}
function print_browse(){document.write('<section class="col-center">\n','<dl class="row">\n','<div class="category_list">\n','<div>\n','<dt><a href="/search.php?q=category:100" title="Audio">Audio</a></dt>\n','<dd>\n','<a href="/search.php?q=category:101" title="Music">Music</a>\n','<a href="/search.php?q=category:102" title="Audio books">Audio books</a>\n','<a href="/search.php?q=category:103" title="Sound clips">Sound clips</a>\n','<a href="/search.php?q=category:103" title="FLAC">FLAC</a>\n','<a href="/search.php?q=category:199" title="Other">Other</a>\n','</dd>\n','</div>\n','<div>\n','<dt><a href="/search.php?q=category:200" title="Video">Video</a></dt>\n','<dd>\n','<a href="/search.php?q=category:201" title="Movies">Movies</a>\n','<a href="/search.php?q=category:202" title="Movies DVDR">Movies DVDR</a>\n','<a href="/search.php?q=category:203" title="Music videos">Music videos</a>\n','<a href="/search.php?q=category:204" title="Movie clips">Movie clips</a>\n','<a href="/search.php?q=category:205" title="TV shows">TV shows</a>\n','<a href="/search.php?q=category:206" title="Handheld">Handheld</a>\n','<a href="/search.php?q=category:207" title="HD - Movies">HD - Movies</a>\n','<a href="/search.php?q=category:208" title="HD - TV shows">HD - TV shows</a>\n','<a href="/search.php?q=category:209" title="3D">3D</a>\n','<a href="/search.php?q=category:299" title="Other">Other</a>\n','</dd>\n','</div>\n','<div>\n','<dt><a href="/search.php?q=category:300" title="Applications">Applications</a></dt>\n','<dd>\n','<a href="/search.php?q=category:301" title="Windows">Windows</a>\n','<a href="/search.php?q=category:302" title="Mac">Mac</a>\n','<a href="/search.php?q=category:303" title="UNIX">UNIX</a>\n','<a href="/search.php?q=category:304" title="Handheld">Handheld</a>\n','<a href="/search.php?q=category:305" title="IOS (iPad/iPhone)">IOS (iPad/iPhone)</a>\n','<a href="/search.php?q=category:306" title="Android">Android</a>\n','<a href="/search.php?q=category:399" title="Other OS">Other OS</a>\n','</dd>\n','</div>\n','</div>\n','<div class="category_list">\n','<div>\n','<dt><a href="/search.php?q=category:400" title="Games">Games</a></dt>\n','<dd>\n','<a href="/search.php?q=category:401" title="PC">PC</a>\n','<a href="/search.php?q=category:402" title="Mac">Mac</a>\n','<a href="/search.php?q=category:403" title="PSx">PSx</a>\n','<a href="/search.php?q=category:404" title="XBOX360">XBOX360</a>\n','<a href="/search.php?q=category:405" title="Wii">Wii</a>\n','<a href="/search.php?q=category:406" title="Handheld">Handheld</a>\n','<a href="/search.php?q=category:407" title="IOS (iPad/iPhone)">IOS (iPad/iPhone)</a>\n','<a href="/search.php?q=category:408" title="Android">Android</a>\n','<a href="/search.php?q=category:499" title="Other">Other</a>\n','</dd>\n','</div>\n','<div>\n','<dt><a href="/search.php?q=category:500" title="Porn">Porn</a></dt>\n','<dd>\n','<a href="/search.php?q=category:501" title="Movies">Movies</a>,\n','<a href="/search.php?q=category:502" title="Movies DVDR">Movies DVDR</a>\n','<a href="/search.php?q=category:503" title="Pictures">Pictures</a>\n','<a href="/search.php?q=category:504" title="Games">Games</a>\n','<a href="/search.php?q=category:505" title="HD - Movies">HD - Movies</a>\n','<a href="/search.php?q=category:506" title="Movie clips">Movie clips</a>\n','<a href="/search.php?q=category:599" title="Other">Other</a>\n','</dd>\n','</div>\n','<div>\n','<dt><a href="/search.php?q=category:600" title="Other">Other</a></dt>\n','<dd>\n','<a href="/search.php?q=category:601" title="E-books">E-books</a>\n','<a href="/search.php?q=category:602" title="Comics">Comics</a>\n','<a href="/search.php?q=category:603" title="Pictures">Pictures</a>\n','<a href="/search.php?q=category:604" title="Covers">Covers</a>\n','<span><a href="/search.php?q=category:605" title="Physibles">Physibles</a><a href=""><b>(?!)</b></a></span>\n','<a href="/search.php?q=category:699" title="Other">Other</a>\n','</dd>\n','</div>\n','</div>\n','</dl>\n','</section>\n');}
function print_top(){document.write('<section class="col-center">\n','<dl class="row">\n','<div class="category_list">\n','<b><a href="/search.php?q=top100:all">Total Top100</a></b> (<a href="/search.php?q=top100:48h">48h</a>)\n','</div>\n','</dl>\n','<dl class="row">\n','<div class="category_list">\n','<div>\n','<dt><b><a href="/search.php?q=top100:100" title="Audio">Audio</a></b> (<a href="/search.php?q=top100:48h_100">48h</a>)</dt>\n','<dd>\n','<a href="/search.php?q=top100:101" title="Music">Music</a> (<a href="/search.php?q=top100:48h_101">48h</a>)\n','<a href="/search.php?q=top100:102" title="Audio books">Audio books</a> (<a href="/search.php?q=top100:48h_102">48h</a>)\n','<a href="/search.php?q=top100:103" title="Sound clips">Sound clips</a> (<a href="/search.php?q=top100:48h_103">48h</a>)<br />\n','<a href="/search.php?q=top100:103" title="FLAC">FLAC</a> (<a href="/search.php?q=top100:48h_104">48h</a>)\n','<a href="/search.php?q=top100:199" title="Other">Other</a> (<a href="/search.php?q=top100:48h_199">48h</a>)\n','</dd>\n','</div>\n','<div>\n','<dt><b><a href="/search.php?q=top100:200" title="Video">Video</a></b> (<a href="/search.php?q=top100:48h_200">48h</a>)</dt>\n','<dd>\n','<a href="/search.php?q=top100:201" title="Movies">Movies</a> (<a href="/search.php?q=top100:48h_201">48h</a>)\n','<a href="/search.php?q=top100:202" title="Movies DVDR">Movies DVDR</a> (<a href="/search.php?q=top100:48h_202">48h</a>)\n','<a href="/search.php?q=top100:203" title="Music videos">Music videos</a> (<a href="/search.php?q=top100:48h_203">48h</a>)<br />\n','<a href="/search.php?q=top100:204" title="Movie clips">Movie clips</a> (<a href="/search.php?q=top100:48h_204">48h</a>)\n','<a href="/search.php?q=top100:205" title="TV shows">TV shows</a> (<a href="/search.php?q=top100:48h_205">48h</a>)\n','<a href="/search.php?q=top100:206" title="Handheld">Handheld</a> (<a href="/search.php?q=top100:48h_206">48h</a>)\n','<a href="/search.php?q=top100:207" title="HD - Movies">HD - Movies</a> (<a href="/search.php?q=top100:48h_207">48h</a>)<br />\n','<a href="/search.php?q=top100:208" title="HD - TV shows">HD - TV shows</a> (<a href="/search.php?q=top100:48h_208">48h</a>)\n','<a href="/search.php?q=top100:209" title="3D">3D</a> (<a href="/search.php?q=top100:48h_209">48h</a>)\n','<a href="/search.php?q=top100:299" title="Other">Other</a> (<a href="/search.php?q=top100:48h_299">48h</a>)\n','</dd>\n','</div>\n','<div>\n','<dt><b><a href="/search.php?q=top100:300" title="Applications">Applications</a></b> (<a href="/search.php?q=top100:48h_300">48h</a>)</dt>\n','<dd>\n','<a href="/search.php?q=top100:301" title="Windows">Windows</a> (<a href="/search.php?q=top100:48h_301">48h</a>)\n','<a href="/search.php?q=top100:302" title="Mac">Mac</a> (<a href="/search.php?q=top100:48h_302">48h</a>)\n','<a href="/search.php?q=top100:303" title="UNIX">UNIX</a> (<a href="/search.php?q=top100:48h_303">48h</a>)\n','<a href="/search.php?q=top100:304" title="Handheld">Handheld</a> (<a href="/search.php?q=top100:48h_304">48h</a>)<br />\n','<a href="/search.php?q=top100:305" title="IOS (iPad/iPhone)">IOS (iPad/iPhone)</a> (<a href="/search.php?q=top100:48h_305">48h</a>)\n','<a href="/search.php?q=top100:306" title="Android">Android</a> (<a href="/search.php?q=top100:48h_306">48h</a>)\n','<a href="/search.php?q=top100:399" title="Other OS">Other OS</a> (<a href="/search.php?q=top100:48h_399">48h</a>)\n','</dd>\n','</div>\n','</div>\n','<div class="category_list">\n','<div>\n','<dt><b><a href="/search.php?q=top100:400" title="Games">Games</a></b> (<a href="/search.php?q=top100:48h_400">48h</a>)</dt>\n','<dd>\n','<a href="/search.php?q=top100:401" title="PC">PC</a> (<a href="/search.php?q=top100:48h_401">48h</a>)\n','<a href="/search.php?q=top100:402" title="Mac">Mac</a> (<a href="/search.php?q=top100:48h_402">48h</a>)\n','<a href="/search.php?q=top100:403" title="PSx">PSx</a> (<a href="/search.php?q=top100:48h_403">48h</a>)\n','<a href="/search.php?q=top100:404" title="XBOX360">XBOX360</a> (<a href="/search.php?q=top100:48h_404">48h</a>)\n','<a href="/search.php?q=top100:405" title="Wii">Wii</a> (<a href="/search.php?q=top100:48h_405">48h</a>)<br />\n','<a href="/search.php?q=top100:406" title="Handheld">Handheld</a> (<a href="/search.php?q=top100:48h_406">48h</a>)\n','<a href="/search.php?q=top100:407" title="IOS (iPad/iPhone)">IOS (iPad/iPhone)</a> (<a href="/search.php?q=top100:48h_407">48h</a>)\n','<a href="/search.php?q=top100:408" title="Android">Android</a> (<a href="/search.php?q=top100:48h_408">48h</a>)\n','<a href="/search.php?q=top100:499" title="Other">Other</a> (<a href="/search.php?q=top100:48h_499">48h</a>)\n','</dd>\n','</div>\n','<div>\n','<dt><b><a href="/search.php?q=top100:500" title="Porn">Porn</a></b> (<a href="/search.php?q=top100:48h_500">48h</a>)</dt>\n','<dd>\n','<a href="/search.php?q=top100:501" title="Movies">Movies</a> (<a href="/search.php?q=top100:48h_501">48h</a>)\n','<a href="/search.php?q=top100:502" title="Movies DVDR">Movies DVDR</a> (<a href="/search.php?q=top100:48h_502">48h</a>)\n','<a href="/search.php?q=top100:503" title="Pictures">Pictures</a> (<a href="/search.php?q=top100:48h_503">48h</a>)\n','<a href="/search.php?q=top100:504" title="Games">Games</a> (<a href="/search.php?q=top100:48h_504">48h</a>)\n','<a href="/search.php?q=top100:505" title="HD - Movies">HD - Movies</a> (<a href="/search.php?q=top100:48h_505">48h</a>)\n','<a href="/search.php?q=top100:506" title="Movie clips">Movie clips</a> (<a href="/search.php?q=top100:48h_506">48h</a>)\n','<a href="/search.php?q=top100:599" title="Other">Other</a> (<a href="/search.php?q=top100:48h_599">48h</a>)\n','</dd>\n','</div>\n','<div>\n','<dt><b><a href="/search.php?q=top100:600" title="Other">Other</a></b> (<a href="/search.php?q=top100:48h_600">48h</a>)</dt>\n','<dd>\n','<a href="/search.php?q=top100:601" title="E-books">E-books</a> (<a href="/search.php?q=top100:48h_601">48h</a>)\n','<a href="/search.php?q=top100:602" title="Comics">Comics</a> (<a href="/search.php?q=top100:48h_602">48h</a>)\n','<a href="/search.php?q=top100:603" title="Pictures">Pictures</a> (<a href="/search.php?q=top100:48h_603">48h</a>)<br />\n','<a href="/search.php?q=top100:604" title="Covers">Covers</a> (<a href="/search.php?q=top100:48h_604">48h</a>)\n','<span><a href="/search.php?q=top100:605" title="Physibles">Physibles</a></a></span> (<a href="/search.php?q=top100:48h_605">48h</a>)\n','<a href="/search.php?q=top100:699" title="Other">Other</a> (<a href="/search.php?q=top100:48h_699">48h</a>)\n','</dd>\n','</div>\n','</div>\n','</dl>\n','</section>\n');}
function print_selector_number(i,curpage,linkto){let before,after;if(i==curpage){before='<b>';after='</b>';}else{before='<a href="'+linkto+':'+i+'">';after='</a>';}
document.write(before,i+1,after,' \n');}
function print_pageselector(username,curpage,linkto){var json_obj=JSON.parse(Get(server+'/q.php?q=pcnt:'+username));var elements=json_obj;var pages=Number(elements)-1;var before,after,o,i,strt,stp;if(pages<2)return '';if(pages<30){for(i=0;i<pages;i++){print_selector_number(i,curpage,linkto);}}else{if(curpage-10>5){strt=curpage-10;if(strt>pages-25)strt=pages-25;print_selector_number(0,curpage,linkto);print_selector_number(1,curpage,linkto);print_selector_number(2,curpage,linkto);document.write('... ');}else{strt=0;}
if(pages-curpage-10>5){stp=curpage+11;if(stp<27)stp=26;if(stp>pages)stp=pages;}else{if(strt==0){stp=16;}else{stp=pages;}}
for(i=strt;i<stp;i++){print_selector_number(i,curpage,linkto);}
if(pages-curpage-10>5){document.write('... ');print_selector_number(pages-2,curpage,linkto);print_selector_number(pages-1,curpage,linkto);print_selector_number(pages,curpage,linkto);}}
document.write('<br />\n');}
function filter_list(){var input,filter,ul,li,a,i,txtValue;input=document.getElementById('flist');filter=input.value.toUpperCase();li=document.getElementsByClassName('list-entry');for(i=0;i<li.length;i++){a=li[i].getElementsByTagName('span')[1];txtValue=a.textContent||a.innerText;if(txtValue.toUpperCase().indexOf(filter)>-1){li[i].style.display='';}else{li[i].style.display='none';}}}

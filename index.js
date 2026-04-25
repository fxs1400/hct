hi();
function hi(){
document.body.innerHTML = document.body.innerHTML.replace(/\[t\](.*?)\[\/t\]/gi, '<p>$1</p>');
document.body.innerHTML = document.body.innerHTML.replace(/\[s\](.*?)\[\/s\]/gi, '<u>$1</u>');
document.body.innerHTML = document.body.innerHTML.replace(/\[center\](.*?)\[\/center\]/gi, '<center>$1</center>');
document.body.innerHTML = document.body.innerHTML.replace(/\[right\](.*?)\[\/right\]/gi, '<p align="right">$1</p>');
document.body.innerHTML = document.body.innerHTML.replace(/\[left\](.*?)\[\/left\]/gi, '<p align="left">$1</p>');
document.body.innerHTML = document.body.innerHTML.replace(/\[b\](.*?)\[\/b\]/gi, '<b>$1</b>');
document.body.innerHTML = document.body.innerHTML.replace(/\[i\](.*?)\[\/i\]/gi, '<i>$1</i>');
document.body.innerHTML = document.body.innerHTML.replace(/\[url\](.*?)\[\/url\]/gi, '<a href="$1">$1</a>');
document.body.innerHTML = document.body.innerHTML.replace(/\[color=(.*?)\](.*?)\[\/color\]/gi, '<span style="color: $1;">$2</span>');
document.body.innerHTML = document.body.innerHTML.replace(/\[img\](.*?)\[\/img\]/gi, '<img src="$1"/>');
document.body.innerHTML = document.body.innerHTML.replace(/\[ts1\](.*?)\[\/ts1\]/gi, '<h1>$1</h1>');
document.body.innerHTML = document.body.innerHTML.replace(/\[ts2\](.*?)\[\/ts2\]/gi, '<h2>$1</h2>');
document.body.innerHTML = document.body.innerHTML.replace(/\[ts3\](.*?)\[\/ts3\]/gi, '<h3>$1</h3>');
document.body.innerHTML = document.body.innerHTML.replace(/\[ts4\](.*?)\[\/ts4\]/gi, '<h4>$1</h4>');
document.body.innerHTML = document.body.innerHTML.replace(/\[ts5\](.*?)\[\/ts5\]/gi, '<h5>$1</h5>');
document.body.innerHTML = document.body.innerHTML.replace(/\[ts6\](.*?)\[\/ts6\]/gi, '<h6>$1</h6>');
document.body.innerHTML = document.body.innerHTML.replace(/\[atri-hct-game]/gi, `<iframe src="https://scratch.mit.edu/projects/1287269106/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`);
hi();
}

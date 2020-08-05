var myElement = document.getElementsByClassName('persistentPanel');
//moveLeft();
moveRight();
function moveLeft()
{
myElement[0].addEventListener('DOMSubtreeModified', function() {
var divToRotate = null;
if(this.children[0])
divToRotate = this.children[0];
if(divToRotate)
divToRotate = divToRotate.children[0];
if(divToRotate)
divToRotate = divToRotate.children[0];
if(!divToRotate) return;
divToRotate.style.transform = 'rotate(-70deg)';
divToRotate.style.bottom = '230px';
divToRotate.style.left = '-1250px';
divToRotate.style.width = '50%';
divToRotate.style.height = '40%';
}, false);
}

function moveRight()
{
myElement[0].addEventListener('DOMSubtreeModified', function() {
var divToRotate = null;
if(this.children[0])
divToRotate = this.children[0];
if(divToRotate)
divToRotate = divToRotate.children[0];
if(divToRotate)
divToRotate = divToRotate.children[0];
if(!divToRotate) return;
divToRotate.style.transform = 'rotate(70deg)';
divToRotate.style.bottom = '250px';
divToRotate.style.left = '900px';
divToRotate.style.width = '50%';
divToRotate.style.height = '40%';
}, false);
}

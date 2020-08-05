MOVE_LEFT = false;
var target = document.querySelector('.atvwebplayersdk-player-container')
var observer = new MutationObserver(function(mutations) {
	  var myElement = document.getElementsByClassName('fbhsa9');


function moveRight()
{
var divToRotate = null;
if(myElement && myElement.length > 0 && myElement[0].children && myElement[0].children[0])
	divToRotate = myElement[0].children[0];
if(!divToRotate) return;
divToRotate.style.transform = 'rotate(70deg)';
divToRotate.style.position = 'relative';
divToRotate.style.bottom = '250px';
divToRotate.style.left = '440px';
divToRotate.style.width = '50%';
divToRotate.style.height = '70%';
}

function moveLeft()
{
var divToRotate = null;
if(myElement && myElement.length > 0 && myElement[0].children && myElement[0].children[0])
	divToRotate = myElement[0].children[0];
if(!divToRotate) return;
divToRotate.style.transform = 'rotate(-70deg)';
divToRotate.style.position = 'relative';
divToRotate.style.bottom = '230px';
divToRotate.style.left = '-500px';
divToRotate.style.width = '50%';
divToRotate.style.height = '70%';
}

	if(MOVE_LEFT == true) {
		moveLeft();
	} else {
		moveRight();
	}
});
var config = { attributes: true, childList: true, characterData: true, subtree: true  };
observer.observe(target, config);
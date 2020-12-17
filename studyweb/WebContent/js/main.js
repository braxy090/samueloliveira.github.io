/*price range*/

if ($.fn.slider) {
    $('#sl2').slider();
}

var RGBChange = function () {
    $('#RGB').css('background', 'rgb(' + r.getValue() + ',' + g.getValue() + ',' + b.getValue() + ')')
};

/*scroll to top*/

$(document).ready(function () {
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            scrollDistance: 300, // Distance from top/bottom before showing element (px)
            scrollFrom: 'top', // 'top' or 'bottom'
            scrollSpeed: 300, // Speed back to top (ms)
            easingType: 'linear', // Scroll to top easing (see http://easings.net/)
            animation: 'fade', // Fade, slide, none
            animationSpeed: 200, // Animation in speed (ms)
            scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
            //scrollTarget: false, // Set a custom target element for scrolling to the top
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
            scrollTitle: false, // Set a custom <a> title if required.
            scrollImg: false, // Set true to use image
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647 // Z-Index for the overlay
        });
    });
});

let botaoForm = document. getElementById('login');
function conferirFormulario(){
	let form1 = logar.Nome.value;
	let form2 = logar.Email.value;
	
	if(form1 === ""){
		alert('preencha o campo Nome');
		logar.Nome.focus();
		return false;
	}
	if(form2 === ""){
		alert('preencha o campo Email');
		logar.Email.focus();
		return false;
	}
}	
 botaoForm.onclick = function(){
	conferirFormulario();
}
let botaoCadastro = document. getElementById('inscrever');
function conferirFormulario(){
	let form1 = cadastrar.Nome.value;
	let form2 = cadastrar.Email.value;
	let form3 = cadastrar.Senha.value;
	
	if(form1 === ""){
		alert('preencha o campo Nome');
		cadastrar.Nome.focus();
		return false;
	}
	if(form2 === ""){
		alert('preencha o campo Email');
		cadastrar.Email.focus();
		return false;
	}
	if(form3 === ""){
		alert('preencha o campo Senha');
		cadastrar.Senha.focus();
		return false;
	}
}	
 botaoCadastro.onclick = function(){
	conferirFormulario();
}



var answerBtnElm = document.getElementsByClassName('answerBtn');
var prePhotoName;

//画像の差し替えを行う
function changeImg(){
	var who = Math.floor(Math.random() * 3);
	var name;
	//写真の数
	var photos = 5;
	//どの写真を選ぶか
	var whichPhoto = 1 + Math.floor(Math.random() * photos);

	switch(who){
		case 0:
			name = 'karen';
			break;
		case 1:
			name = 'jessica';
			break;
		case 2:
			name = 'angy';
			break;
		default:
			break;
	}

	var currentPhotoName = name + whichPhoto;

	//画像名が前と同じならやり直し
	while(prePhotoName === currentPhotoName){
		who = Math.floor(Math.random() * 3);
		whichPhoto = 1 + Math.floor(Math.random() * photos);

		switch(who){
			case 0:
				name = 'karen';
				break;
			case 1:
				name = 'jessica';
				break;
			case 2:
				name = 'angy';
				break;
			default:
				break;
		}

		currentPhotoName = name + whichPhoto;
	}

	//画像の名前を保存
	prePhotoName = currentPhotoName;

	//画像を差し替え
	document.getElementsByClassName('quizImg')[0].src = '/images/' + currentPhotoName + '.jpg';

	return name;
}

var myAnswer;
var correctAnswer = changeImg();

var nextBtn = document.getElementsByClassName('nextBtn')[0];
var currentQuestionNum = 1;

var correctCnt = 0;
nextBtn.style.disabled = true;

nextBtn.style.opacity = '0';

document.getElementsByClassName('score')[0].innerHTML = 'Score:' + correctCnt + '/' + currentQuestionNum;

nextBtn.addEventListener('click',function(){
	correctAnswer = changeImg();
	
	//init button name
	document.getElementsByClassName('karenBtn')[0].innerHTML = 'Karen';
	document.getElementsByClassName('jessicaBtn')[0].innerHTML = 'Jessica';
	document.getElementsByClassName('angyBtn')[0].innerHTML = 'Angelica';

	currentQuestionNum++;
	document.getElementsByClassName('score')[0].innerHTML = 'Score:' + correctCnt + '/' + currentQuestionNum;
	document.getElementsByClassName('questionNum')[0].innerHTML = 'Q.' + currentQuestionNum;
	
	//you can use button
	answerBtnElm[0].disabled = false;
	answerBtnElm[1].disabled = false;
	answerBtnElm[2].disabled = false;

	//hide next button
	nextBtn.disabled = true;
	nextBtn.style.opacity = '0';
},false);



function answerBtnAction(){
	var myAnswerUpperCase;
	if(this.innerHTML === 'Karen'){
		myAnswer = 'karen';
		myAnswerUpperCase = 'Karen';
	}else if(this.innerHTML === 'Jessica'){
		myAnswer = 'jessica';
		myAnswerUpperCase = 'Jessica';
	}else if(this.innerHTML === 'Angelica'){
		myAnswer = 'angy';
		myAnswerUpperCase = 'Angelica';
	}

	//var myEle = document.getElementsByClassName(myAnswer + 'Answer')[0];
	var myEle = document.getElementsByClassName(myAnswer + 'Btn')[0];

	if(myAnswer === correctAnswer){
		myEle.innerHTML = myAnswerUpperCase + '○';
		correctCnt++;
		document.getElementsByClassName('score')[0].innerHTML = 'Score:' + correctCnt + '/' + currentQuestionNum;
	}else{
		myAnswer = myAnswer.charAt(0).toUpperCase() + myAnswer.slice(1);
		myEle.innerHTML = myAnswerUpperCase + '×';

		var correctEle = document.getElementsByClassName(correctAnswer + 'Btn')[0];
		correctAnswer = correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
		correctEle.innerHTML = correctAnswer + '○';
	}

	//disabled
	answerBtnElm[0].disabled = true;
	answerBtnElm[1].disabled = true;
	answerBtnElm[2].disabled = true;

	//display next button
	nextBtn.disabled = false;
	nextBtn.style.opacity = '1.0';
}

for(var i = 0;i < answerBtnElm.length;i++){
	answerBtnElm[i].addEventListener('click',answerBtnAction,false);
}

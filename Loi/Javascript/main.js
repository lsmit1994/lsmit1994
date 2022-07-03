alert('Welcome to Quiz Ninja!');

const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);

// View Object
const view = {
score: document.querySelector('#score strong'),
question: document.getElementById('question'),
result: document.getElementById('result'),
info: document.getElementById('info'),
render(target,content,attributes) {
for(const key in attributes) {
target.setAttribute(key, attributes[key]);
}
target.innerHTML = content;
}
};
   
ask();{
    const question = `What is ${this.question.name}'s real
    name?`;
    view.render(view.question,question);
    const response = prompt(question);
    this.check(response);
}
check(response);{
    const answer = this.question.realName;
    if(response === answer){
    view.render(view.result,'Correct!',{'class':'correct'});
    alert('Correct!');
    this.score++;
    view.render(view.score,this.score);
    } else {
    view.render(view.result,`Wrong! The correct answer was
    ${answer}`,{'class':'wrong'});
    alert(`Wrong! The correct answer was ${answer}`);
    }
}
gameOver();{
    view.render(view.info,`Game Over, you scored ${this.score}
    point${this.score !== 1 ? 's' : ''}`);
    
}


document.getElementById('start'),

view.start.addEventListener('click', () => game.start(quiz), false);

show(element);{element.style.display = 'block';} hide(element);{element.style.display = 'none';}

game.start(view.hide(view.start)) 

game.gameOver(view.show(view.start))








const container=document.getElementsByClassName('container')[0];
const signup=document.getElementById('sign-up');
const signin=document.getElementById('sign-in');

signup.onclick=function (){
    // console.log("点击了");
    container.classList.add('active');
}
signin.onclick=function (){
    // console.log("点击了");
    container.classList.remove('active');
}

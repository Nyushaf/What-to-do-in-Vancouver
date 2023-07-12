const image = document.querySelector(".image");
const question = document.querySelector(".question");
const btnOne = document.querySelector("#btn-one");
const btnTwo = document.querySelector("#btn-two");
const btnThree = document.querySelector("#btn-three");
const btnFour = document.querySelector("#btn-four");
btnTwo.addEventListener("click", sunnyDay);
btnThree.addEventListener("click", rainyDay);
function sunnyDay () {
    image.setAttribute("src", "https://images.unsplash.com/photo-1531322766258-3dd20ea42753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    question.textContent = "What kind of relaxation do you prefer?";
    btnTwo.textContent = "Active";
    btnThree.textContent = "Entertainment";
    btnTwo.addEventListener("click", active);
    btnThree.addEventListener("click", entertainment);

}
function active() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    question.textContent = "Which of these do you want now?";
    btnTwo.textContent = "Hiking";
    btnThree.textContent = "Kayaking";
    btnOne.style.display = "block";
    btnFour.style.display = "block";
    btnOne.addEventListener("click", biking);
    btnTwo.addEventListener("click", hiking);
    btnThree.addEventListener("click", kayaking);
    btnFour.addEventListener("click", skiing);
}
function biking() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-bike").style.display = "block";
}
function hiking() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-hikes").style.display = "block";
}
function kayaking() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-kayaking").style.display = "block";
}
function skiing() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-skiing").style.display = "block";
}
function entertainment() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    question.textContent = "What would you prefer?";
    btnTwo.textContent = "Inside";
    btnThree.textContent = "Outside";
    btnTwo.addEventListener("click", inside);
    btnThree.addEventListener("click", outside);
}
function inside() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    question.textContent = "What would you choose now?";
    btnOne.style.display = "block";
    btnFour.style.display = "none";
    btnOne.textContent = "Cinema";
    btnTwo.textContent = "Restaurant";
    btnThree.textContent = "Museum";
    btnTwo.addEventListener("click", restaurant);
    btnOne.addEventListener("click", cinema);
    btnThree.addEventListener("click", museum);

}
function restaurant() {
    document.querySelector(".question-container").style.display = "block";
    document.querySelector(".ansver-hikes").style.display = "none";
    image.setAttribute("src", "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    question.textContent = "A restaurant with live music?";
    btnTwo.textContent = "YES";
    btnThree.textContent = "NO";
    btnOne.style.display = "none";
    btnTwo.addEventListener("click", restaurantWithMusic);
    btnThree.addEventListener("click", restaurantWithoutMusic);
}
function restaurantWithMusic() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-restaurant-music").style.display = "block";
}
function restaurantWithoutMusic() {
    document.querySelector(".ansver-kayaking").style.display = "none";
    document.querySelector(".ansver-museum").style.display = "none";
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-restuarant").style.display = "block";
    document.querySelector(".ansver-parks").style.display = "none";
    document.querySelector(".ansver-movie").style.display = "none";
}
function cinema() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-bike").style.display = "none";
    document.querySelector(".ansver-cinema").style.display = "block";
}
function museum() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-kayaking").style.display = "none";
    document.querySelector(".ansver-parks").style.display = "none";
    document.querySelector(".ansver-museum").style.display = "block";
    document.querySelector(".ansver-concerts").style.display = "none";
    document.querySelector(".ansver-cinema").style.display = "none";
}
function outside() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-parks").style.display = "block";
}
function rainyDay() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    question.textContent = "Do you want to stay at home?";
    btnTwo.textContent = "Yeah";
    btnThree.textContent = "Nope";
    btnTwo.addEventListener("click", atHome);
    btnThree.addEventListener("click", goInside);
}
function atHome() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    question.textContent = "Are you alone?";
    btnTwo.textContent = "Yes";
    btnThree.textContent = "No";
    btnTwo.addEventListener("click", homeAlone);
    btnThree.addEventListener("click", notAlone);
}
function homeAlone() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80");
    question.textContent = "Do you want to invite friends?";
    btnOne.style.display = "none";
    btnFour.style.display = "none";
    btnTwo.textContent = "Sure";
    btnThree.textContent = "Nope";
    btnTwo.addEventListener("click", withFriends);
    btnThree.addEventListener("click", withoutFriends);
}
function withFriends() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    question.textContent = "What do you want to do?";
    document.querySelector(".question-container").style.display = "block";
    document.querySelector(".ansver-hikes").style.display = "none";
    document.querySelector(".ansver-parks").style.display = "none";
    btnTwo.textContent = "Board games";
    btnThree.textContent = "Movies";
    btnTwo.addEventListener("click", boardGames);
    btnThree.addEventListener("click", movies);
}
function boardGames(){
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-boardGame").style.display = "block";
    document.querySelector(".ansver-romantic-dinner").style.display = "none";
    document.querySelector(".ansver-museum").style.display = "none";
}
function movies(){
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-movie").style.display = "block";
    document.querySelector(".ansver-kayaking").style.display = "none";
    document.querySelector(".ansver-concerts").style.display = "none";
}
function withoutFriends() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-movie").style.display = "block";
    document.querySelector(".ansver-kayaking").style.display = "none";
}
function notAlone() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1670349081674-90d0e76a20ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    question.textContent = "Are you with your lover?";
    btnTwo.textContent = "Yeah";
    btnThree.textContent = "Nope";
    btnTwo.addEventListener("click", withLover);
    btnThree.addEventListener("click", withFriends);
}
function withLover() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-romantic-dinner").style.display = "block";
    document.querySelector(".ansver-cinema").style.display = "none";
}
function goInside() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80");
    question.textContent = "Do you want to go to the cinema?";
    btnTwo.textContent = "Sure";
    btnThree.textContent = "No";
    btnTwo.addEventListener("click", cinema);
    btnThree.addEventListener("click", notACinema);
}
function notACinema() {
    image.setAttribute("src", "https://images.unsplash.com/photo-1528337669797-c4fda00b610c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
    question.textContent = "Which do you prefer, a museum or a concert?";
    btnTwo.textContent = "Museum";
    btnThree.textContent = "Concert";
    btnTwo.addEventListener("click", museum);
    btnThree.addEventListener("click", concert);
}
function concert() {
    document.querySelector(".question-container").style.display = "none";
    document.querySelector(".ansver-concerts").style.display = "block";
}

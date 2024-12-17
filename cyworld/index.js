const menuHome = () => {
  document.getElementById("contentFrame").setAttribute("src", "home.html");
  document.getElementById("menuHome").style =
    "color:black;background-color:white";
  document.getElementById("menuBook").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menusave").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuJukebox").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuChatroom").style =
    "color:white;background-color:#298eb5";
};
const menuBook = () => {
  document.getElementById("contentFrame").setAttribute("src", "Book.html");
  document.getElementById("menuBook").style =
    "color:black;background-color:white";
  document.getElementById("menuHome").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menusave").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuJukebox").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuChatroom").style =
    "color:white;background-color:#298eb5";
};
const menusave = () => {
  document.getElementById("contentFrame").setAttribute("src", "save.html");
  document.getElementById("menuHome").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuBook").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menusave").style =
    "color:black;background-color:white";
  document.getElementById("menuJukebox").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuChatroom").style =
    "color:white;background-color:#298eb5";
};
const menuJukebox = () => {
  document.getElementById("contentFrame").setAttribute("src", "Jukebox.html");
  document.getElementById("menuHome").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuBook").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menusave").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuJukebox").style =
    "color:black;background-color:white";
  document.getElementById("menuChatroom").style =
    "color:white;background-color:#298eb5";
};
const menuChatroom = () => {
  document.getElementById("contentFrame").setAttribute("src", "Chatroom.html");
  document.getElementById("menuHome").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuBook").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menusave").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuJukebox").style =
    "color:white;background-color:#298eb5";
  document.getElementById("menuChatroom").style =
    "color:black;background-color:white";
};

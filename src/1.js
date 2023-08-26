document.getElementById("top-hov").addEventListener("mouseover", (event) => {
  // console.log("top-tab" )
});

document.getElementById("left-hov").addEventListener("mouseover", (event) => {
  // console.log("left-tab");
  document.getElementById("browse").style.marginLeft = "25vw"
});

document.getElementById("right-hov").addEventListener("mouseover", (event) => {
  // console.log("right-tab");
   document.getElementById("browse").style.marginRight = "5vh"
  });

document.getElementById("browse").addEventListener("mouseover", (event) => {
  // console.log("browser");
   document.getElementById("browse").style.marginLeft = "12px"
   document.getElementById("browse").style.marginRight = "12px"
  });

// const main_win = ```
// <div id="bro">
// <img src="logo.png" alt="">
// <div><input type="text"> <button id="travel" >Travel</button></div>
// </div>
// ```
// const web_win = ```
// <webview src="http://www.google.com/" style="width:100%; height:50vh"></webview>
// ```

document.getElementById("travel").addEventListener("click", () => {
  console.log("searching")
  let browser = document.getElementById("browse")
  let web_win = document.createElement("webview")
  web_win.setAttribute("src", "https://www.google.com/search?q="+document.getElementById("search-box").value)
  web_win.style.width = "100%"
  web_win.style.height = "100%"
  browser.innerHTML = ""
  browser.appendChild(web_win)
})
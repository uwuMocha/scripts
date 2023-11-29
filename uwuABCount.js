// ==UserScript==
// @name        uwuAB Count
// @version     0.4
// @updateURL   https://raw.githubusercontent.com/uwuMocha/scripts/main/uwuABCount.js
// @match       https://animebytes.tv/forums.php?*action=viewthread&threadid=556*
// ==/UserScript==
//TODO:
//force scroll to bottom after image load
//maybe change so it scrolls to last post on page instead of the bottom of the page
//detect if I was prev post and disable submitting reply if so
//detect if I may have submitted a number at the same time as someone else and need to edit
function main() {
//GOTO LAST PAGE
  var element = document.querySelector("a.next-prev.last");
  if (element) {
    element.click();
    return;
  }
//Count posts on last page
  var posts = document.getElementsByClassName('post_block');
//Get page number
  var pageNum = document.querySelector("span.page-link.nolink").textContent.trim();
//Calculate number to post
  var postCount = 25 * (parseInt(pageNum) - 1) + posts.length + 1;
// Make CMD + ENTER listener
  document.body.addEventListener('keydown', (event) => {
    if(event.key === "Enter" && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) {
        document.getElementById("quickpostform").submit();
    }
});
//scroll to bottom and autofill
  window.onload = window.scrollTo(0, document.body.scrollHeight);
  document.getElementById("quickpost").value = postCount;
  document.getElementById("quickpost").focus();
}
main();

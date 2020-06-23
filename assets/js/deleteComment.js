import axios from "axios";

const deleteBtns = document.querySelectorAll(".jsDeleteComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const deleteComment = (clickedBtn) => {
    const clickedNode = clickedBtn.parentNode.parentNode;
    commentList.removeChild(clickedNode);
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + -1;
}

const requestDelete = async (event) => {
    const clickedBtn = event.target;
    const videoId = window.location.href.split("/videos/")[1];
    const commentId = clickedBtn.outerHTML.split("_id:")[1].substr(1, 24);
    const response = await axios({
        url: `/api/${videoId}/deleteComment`,
        method: "POST",
        data: {
            videoId,
            commentId
        }
    });
    console.log(response.status);
    if (response.status === 200) {
        deleteComment(clickedBtn);
    }
}

function init() {
    for (let i = 0; i < deleteBtns.length; i += 1) {
        deleteBtns[i].addEventListener("click", requestDelete);
    }
}

if (deleteBtns) {
    init();
}
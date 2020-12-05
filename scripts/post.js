function EditToSaveToggle(){
    var template_save = '<p id="BlogAuthor">Srishti Gupta</p>' +
        '<button id="SaveBtn" class="EditSaveButton" onclick="SaveToEditToggle()">Save ' +
        '<i class="fa fa-save"></i>' +
        '</button>';

    document.getElementsByClassName("PostAuthor")[0].innerHTML = template_save;
    var BlogHeading = document.getElementById("BlogHeading");
    var BlogBody = document.getElementById("BlogBody");
    BlogHeading.contentEditable = "true";
    BlogBody.contentEditable = "true";
    BlogBody.focus();
    BlogHeading.focus();
    BlogHeading.style.border = "solid";
    BlogBody.style.border = "solid";
    BlogHeading.style.borderColor = "pink";
    BlogBody.style.borderColor = "pink";


}

function SaveToEditToggle(){
    var template_edit = '<p id="BlogAuthor">Srishti Gupta</p>' +
        '<button id="EditBtn" class="EditSaveButton" onclick="EditToSaveToggle()">Edit ' +
        '<i class="fa fa-edit"></i>' +
        '</button>';

    document.getElementsByClassName("PostAuthor")[0].innerHTML = template_edit;
    var BlogHeading = document.getElementById("BlogHeading");
    var BlogBody = document.getElementById("BlogBody");
    BlogHeading.contentEditable = "false";
    BlogBody.contentEditable = "false";
    BlogHeading.style.border = "none";
    BlogBody.style.border = "none";
}

var numberOfClicks=0;
function LikeClicked(){
    console.log(numberOfClicks)
    document.getElementById("likeBlog").innerHTML = '<i style="font-size: 14px;font-weight: bolder;" class="fa fa-thumbs-up" aria-hidden="true"></i> Liked';
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people like this!";
        }
    }
}
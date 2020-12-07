var posts = [
    {
        id: 1,
        postOwner: "Srishti Gupta",
        postHeading: "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
        postContent: "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different."
    },
    {
        id: 2,
        postOwner: "Colby Fayock",
        postHeading: "What is linting and how can it save you time?",
        postContent: "One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have."
    },
    {
        id: 3,
        postOwner: "Yazeed Bzadough",
        postHeading: "How to Get More Views on Your Tech Blog",
        postContent: "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry."
    },
    {
        id: 4,
        postOwner: "Cedd Burge",
        postHeading: "How to write easily describable code",
        postContent: "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code."
    },
    {
        id: 5,
        postOwner: "Srishti Gupta",
        postHeading: "Everything you should know about ‘module’ & ‘require’ in Node.js",
        postContent: "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz."
    }
]

function displayAllPosts() {
    var PostGrid = document.getElementById("PostListGrid");
    PostGrid.innerHTML = "";
    posts.forEach(function (value, index) {
        var template = '<div class="col mb-4">' +
            '<div class="card">' +
            '<div class="card-header">' +
            '<p>' + value.postOwner + '</p>' +
            '</div>' +
            '<div class="card-body">' +
            '<div class="card-title"> ' +
            '<p>' + value.postHeading + '</p>' +
            '<span class="post-trash" id="post-trash' + index + '" onclick="OpenModal(' + index + ')">' +
            '<i class="fa fa-trash" aria-hidden="true" data-target="#TrashModal' + index + '"></i>' +
            '</span>' +
            '</div>' +
            '<p class="card-text">' + value.postContent + '</p>' +
            '<span class="PostMore" onclick="navigateToPost()">' +
            '<i class="fa fa-ellipsis-h float-right"></i>' +
            '</span>' +
            '</div>' +
            '<div class="trash-modal" id = "TrashModal' + index + '">' +
            '<div class="trash-modal-content">' +
            '<p>Are you sure you want to delete this post?</p>' +
            '<div class="trash-buttons-container">' +
            '<button class="trash-modal-button-yes" onclick="DeletePost(' + index + ',' + value.id + ')">Yes</button>' +
            '<button class="trash-modal-button-no" id="trash-modal-button-no' + index + '" onclick="CloseModal(' + index + ')">No</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        PostGrid.innerHTML += template;
    })
}

displayAllPosts()

function OpenModal(index) {
    var modal = document.getElementById("TrashModal" + index);
    modal.style.display = "block";
}

function CloseModal(index) {
    var modal = document.getElementById("TrashModal" + index);
    modal.style.display = "none";
}

function DeletePost(index, id) {
    var modal = document.getElementsByClassName("trash-modal")[index];
    modal.style.display = "none";
    posts.splice(index, 1);
    displayAllPosts()
    // trashFunctions(posts.length)
}

function navigateToPost() {
    location.href = "../html/post.html";
}



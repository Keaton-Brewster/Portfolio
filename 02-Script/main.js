$(document).ready(function () {
    const mainPage = $("[name='main-page']"), //THINK ABOUT CHANGING THESE FROM ID'S TO NAMES SO THAT MULTIPLE CAN BE SELECTED, FOR MEDIA QUERI
        aboutmePage = $("[name='about_me-page']"),
        myworkPage = $("[name='my_work-page']"),
        contactPage = $("[name='contact_me-page']"),
        pages = [mainPage, aboutmePage, myworkPage, contactPage];


    $("body").fadeIn(4000).removeClass("hide");

    $("body").on("click", "button", function (event) {
        event.preventDefault();

        //NEED TO WRITE IN A CSS QUERY TO CHANGE CLASSES AND SHIT SO THAT OTHER SCRIPT STILL WORKS 
        // WHEN THE PAGE IS RESPONSIVELY CHANGED.

        // MAYBE NOT, IT LOOKS LIKE I JUST NEEDED TO USE .hasClass()

        // start by setting up the function that changes 'pages' (everything will still be built on one page, because I like that more.)
        targetName = "[name='" + $(this).attr("name") + "-page']";

        for (let i = 0; i < pages.length; i++) {
            if (!pages[i].hasClass('hide')) {
                pages[i].fadeOut("slow").addClass("hide");
            }
        }
        console.log(targetName)
        $(targetName).fadeIn(1500).removeClass("hide");
    });

});

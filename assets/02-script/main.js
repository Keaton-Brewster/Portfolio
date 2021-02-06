$(document).ready(function () {
  const mainPage = $("[name='main-page']"), //THINK ABOUT CHANGING THESE FROM ID'S TO NAMES SO THAT MULTIPLE CAN BE SELECTED, FOR MEDIA QUERI
    aboutMePage = $("[name='about_me-page']"),
    myWorkPage = $("[name='my_work-page']"),
    contactPage = $("[name='contact_me-page']"),
    pages = [mainPage, aboutMePage, myWorkPage, contactPage];

  let showMenu = false;

  $("body").fadeIn(3000).removeClass("hide");

  $("body").on("click", "button", function (event) {
    event.preventDefault();

    //NEED TO WRITE IN A CSS QUERY TO CHANGE CLASSES AND SHIT SO THAT OTHER SCRIPT STILL WORKS
    // WHEN THE PAGE IS RESPONSIVELY CHANGED.

    // MAYBE NOT, IT LOOKS LIKE I JUST NEEDED TO USE .hasClass()

    // start by setting up the function that changes 'pages' (everything will still be built on one page, because I like that more.)
    targetName = "[name='" + $(this).attr("name") + "-page']";

    // Nothing will happen if you click the button for the 'page' you are already on.
    if (!$(targetName).hasClass("hide")) {
      return;
    }

    for (let i = 0; i < pages.length; i++) {
      if (!pages[i].hasClass("hide")) {
        pages[i].fadeOut(0).addClass("hide");
      }
    }
    $(".menu-btn").removeClass("close");
    showMenu = false;
    $(targetName).fadeIn(1500).removeClass("hide");
  });

  // NEED TO CHANGE THIS AROUND A LITTLE BIT. THE CSS AND HTML SEEM GOOD, BUT ON PAGE LOAD, IT DOES NOT QUITE WORK RIGHT.

  // Set the initial state of the menu button

  function toggleMenu() {
    if (!showMenu && $("#navbarDropdown").attr("aria-expanded", "false")) {
      $(".menu-btn").addClass("close");
      // Reset the menu state
      showMenu = true;
    } else {
      $(".menu-btn").removeClass("close");
      // Reset the menu state
      showMenu = false;
    }
  }

  $(".menu-btn").on("click", toggleMenu);

  $(document).on("click", function (event) {
    click = event.target;

    if (!$(event.target).hasClass("menu-btn") && showMenu === true) {
      toggleMenu();
    }
  });
});

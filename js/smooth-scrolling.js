$(docunt).ready(function(){

// Click on the a tag with a class="scroll-to"
$('.scroll-to').click(function() {

    // Find the href attribute of the a tag we just clicked
    var href = $(this).attr("href");

    // based on the link, find the section
    // e.g. if we click on <a href="#company">
    // section is $("#company")

    // Once we know the section we can calculate the distance (the offset) from the top
    var section = $(href).offset().top;

    // Animate the page to a particular point (the one we just calculated above)
    $("body, html").animate({ scrollTop: section }, 1000);

    // stop the default behaviour of jumping to the section
    return false;
});
}); // end of doc ready

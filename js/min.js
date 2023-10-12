$(document).ready(function () {
  $(".nav_menu").click(function () {
    $(".navbar").toggleClass("navbar_mob");
  });

  /*********** Google form ***********/
  $("#ss-form").submit(function (e) {
    $("#ss-form")[0].reset();
    e.preventDefault();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdC97FvuSDsijxYxEXBIgbUnappLqK46XJL2bsPqr44tEEgRA/formResponse",
      data: $(this).serialize(),
      type: "POST",
      dataType: "xml",
      success: function (data) {
        console.log("Submission successful");
      },
      error: function (xhr, status, error) {
        console.log("Submission failed: " + error);
      },
    });
  });
});

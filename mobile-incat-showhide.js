document.getElementById("show-more").addEventListener("click", expand);
document.getElementById("show-less").addEventListener("click", collapse);

function expand() {
	$(".incategory-description").removeClass("collapsed");
    	$(".incategory-description").addClass("expanded");
    	$(".incategory-description").css("max-height", "2000px");
    	$("#show-more").removeClass("show");
    	$("#show-more").addClass("hide");
    	$("#show-less").removeClass("hide");
    	$("#show-less").addClass("show")
    	$("#controls").removeClass("fade");
}

function collapse() {
	$(".incategory-description").removeClass("expanded");
    	$(".incategory-description").addClass("collapsed");
    	$(".incategory-description").css("max-height", "180px");
    	$("#show-more").removeClass("hide");
    	$("#show-more").addClass("show");
    	$("#show-less").addClass("hide");
    	$("#show-less").removeClass("show");
    	$("#controls").addClass("fade");
}
		
function checkHeight() {
	var incatDesc = $(".incategory-description");
	if (incatDesc.height() > 100) {
		$("#show-more").removeClass("show");
		$("#show-more").addClass("hide");
		$(".controls").removeClass("hide");
		$(".controls").addClass("show");
	}
}
checkHeight();


$(document).ready(function(){
	navigate.init();
});

var lastPageIndex = 0;
function sendMessage()
{
    var email = $("#userName").val();
    var msg = $("#contactMsg").val();
    var name = $("#userName").val();
    var phone = $("#userPhone").val();
    var company = $("#userCompany").val();
    var errorMsg = "";
    if(msg.length == 0)
    {
        errorMsg += "Please enter a message.\n";
    }
    if(name.length == 0)
    {
        errorMsg += "Please enter your name.\n";
    }
    if(errorMsg.length > 0)
    {
        alert("Missing required values to send your message.\n\n"+errorMsg);
        return;
    }
    
    window.location.href = "mailto:info@digitans.com?subject=Message to Digitans (from your Website). &body=" + msg + "\n\n" + name + "\n" + email + "\n" + phone + "\n" + company;
};


// Closure function for navigation
var navigate = (function(){
	var _this;
    var tm = 850;
	return {
		links:null,
		pages:null,
		init:function(){
			// Initializing the menu items and pages
			_this = this;
			_this.links = $(".menuLinks");
			_this.pages = $(".divParentCls");
			_this.viewWrkBtn = $('#viewWorkBtn');
			_this.gtInTchBtn = $('#getInTouchBtn');
			_this.pages.eq(0).show();
			this.setBehaviour();
		},
		// Load the respective pages on click of Menu Items
		setBehaviour: function(){
			_this.links.click(function(){
				var linkIndex = $(".menuLinks").index(this);
                if(lastPageIndex == linkIndex)
                {
                    return;
                }
                lastPageIndex = linkIndex;
				$(".menuLinks a").removeClass('menuSelectCls');
				$(".menuLinks a").eq(linkIndex).addClass('menuSelectCls');
                _this.pages.eq(linkIndex).hide();
                _this.pages.hide();
				_this.pages.eq(linkIndex).fadeIn(tm);
				
				
			});
			// Load "Brazil" page on click of "BRAZIL" button on Home Page
			_this.viewWrkBtn.click(function(){
                lastPageIndex = linkIndex = 4;
				$(".menuLinks a").eq(linkIndex).addClass('menuSelectCls');
				_this.pages.fadeOut();
				_this.pages.eq(linkIndex).fadeIn(tm);
			});
			// Load "Contact" page on click of "Get In Touch" button on Home Page
			_this.gtInTchBtn.click(function(){
                lastPageIndex = linkIndex = 1;
				$(".menuLinks a").eq(linkIndex).addClass('menuSelectCls');
				_this.pages.fadeOut();
				_this.pages.eq(linkIndex).fadeIn(tm);
			});
			
		}
		
	}
})();
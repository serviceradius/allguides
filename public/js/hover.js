//TWC 30+ Channels 
$('#twc_30').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_30_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });

//TWC 70+ Channels
 $('#twc_70').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_70_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });
    
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


//TWC Variety Tier
 $('#twc_vt').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_vt_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//TWC Choice Tier
 $('#twc_ct').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_ct_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//TWC Espanol Tier
 $('#twc_esp').popover({
        html: true,
        trigger: 'click',
        placement: 'auto',
        content: function () {
            return $('#twc_esp_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//TWC HD Channels
 $('#twc_hdc').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_hdc_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });



//TWC Premium Channels
 $('#twc_prem').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_prem_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


//TWC Movie Pass 
 $('#twc_mp').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_mp_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });

//TWC Sports Pass 
 $('#twc_sports').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_sports_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });

//TWC HD Pass 
 $('#twc_hdp').popover({
        html: true,
        trigger: 'manual',
        placement: 'auto',
        content: function () {
            return $('#twc_hdp_content').html();
        }
    }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(this).siblings(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide")
            }
        }, 100);
    });


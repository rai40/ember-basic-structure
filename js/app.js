var Roller = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

Roller.Router.map(function () {
    this.resource("roll");
    this.resource("about");
});    
Roller.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo("about");
    }
});

var search_rs = new Array();
//Roller route
Roller.RollRoute = Ember.Route.extend({
    activate: function() {
        $(document).attr('title', 'Roll');
    },
    model: function () {
        /*$.get( 'http://spiderhub.ellietrac.com/api/v1/search?q=ave', function( data ) {
          search_rs = data;
        });*/
        //loading======================
        $("#loading").html('Loading...');
        $.ajax({
         url:    'http://spiderhub.ellietrac.com/api/v1/search?q=ave',
         success: function(data) {
                    //alert(data);
                    search_rs = data;
                  },
         async:   false
        });
        //stop loading==================
        $("#loading").html('DONE');
        return {
            search : search_rs,
            title: "Rails is omakase",
            name : "ehtisham",
            jarray: ["jarray1","jarrray2"]
        };
    },

    setupController: function(controller, model) {
        controller.set("content", model);
    }
});
//About route
Roller.AboutRoute = Ember.Route.extend({

    activate: function() {
        $(document).attr('title', 'About');
    },
    model: function () {
        /*$.get( 'http://spiderhub.ellietrac.com/api/v1/search?q=ave', function( data ) {
          search_rs = data;
        });*/
        $.ajax({
         url:    'http://spiderhub.ellietrac.com/api/v1/search?q=ca',
         success: function(data) {
                    //alert(data);
                    search_rs = data;
                  },
         async:   false
        });
        return {
            search : search_rs,
            title: "Rails is omakase",
            name : "ehtisham",
            jarray: ["a","b"]
        };
    },

    setupController: function(controller, model) {
        //place content that is not ajax request
        controller.set("content", model);
    }
});




//Roll controller
Roller.RollController = Ember.ObjectController.extend({
    soundVolume: 1,
    test:'test sentence'
});
Roller.RollView = Ember.View.extend({
  click: function(evt) {
    alert(this);
  }
});
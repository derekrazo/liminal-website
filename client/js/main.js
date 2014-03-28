Meteor.startup(function(){
	Router.addRoute('/', 'homeTemplate');
	Router.addRoute('/home', 'homeTemplate');
	Router.addRoute('/about', 'aboutTemplate');
	Router.addRoute('/events', 'eventsTemplate');
	Router.addRoute('/who', 'whoTemplate');
	Router.addRoute('/what', 'whatTemplate');
	Router.addRoute('/contact', 'contactTemplate');
	Router.run();
});

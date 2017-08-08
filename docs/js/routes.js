/* ****************************************************** */
/*
/* Routes aplication config.
/* 
/* Utilizado diretiva uiRouter do AngularJs.     
/*   
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/index');

  $stateProvider
    .state('index', {
      url: "/index",
      views: {
        'Home': { templateUrl: '../templates/home.html', controller: 'homeCtrl'},
        'Plans': { templateUrl: '../templates/plans.html', controller: 'plansCtrl'},
        'Contact': { templateUrl: '../templates/contact.html', controller: 'contactCtrl'},
        'Footer':{ templateUrl: '../templates/footer.html'}
      }
    })    
    .state('faq', {
      url: "/faq",
      views: {
        'Faq': { templateUrl: '../templates/faq.html',controller: 'faqCtrl'},
        'Contact': { templateUrl: '../templates/contact.html',controller: 'contactCtrl'},
        'Footer':{ templateUrl: '../templates/footer.html'}
      }
    }) 
});
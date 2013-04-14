(function(){
  FoodTruck.application.handleFilters = handleFilters = function(e) {
  	$(e.target).closest('li').find('i').toggleClass('icon-ok');
  }
    $('ul.selection-list').on('click','li',handleFilters);
}());
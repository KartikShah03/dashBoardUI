(function() {
  'use strict';

  angular.module('Dashboard.theme.components')
      .provider('baSidebarService', baSidebarServiceProvider);

  /** @ngInject */
  function baSidebarServiceProvider() {
    var staticMenuItems = [];
    var menuList = [] ;

    this.addStaticItem = function() {
      staticMenuItems.push.apply(staticMenuItems, arguments);
    };

    /** @ngInject */
    this.$get = function($state,$http, layoutSizes) {
      return new _factory();

      function _factory() {
        var isCollapsed = shouldMenuBeCollapsed();

        function getMenuItems (states) {
          // var states = [];
          // $http.get('http://demo0495135.mockable.io/menuitems').
          //   success(function(data) {
          //   states = data;
          //  });
         //var states = defineMenuItemStates();
            //if(states.length > 0){
          var menuItems = states.filter(function(item) {
            return item.level == 0;
        });

          menuItems.forEach(function(item) {
            var children = states.filter(function(child) {
              return child.level == 1 && child.name.indexOf(item.name) === 0;
            });
            item.subMenu = children.length ? children : null;
          });

          return menuItems.concat(staticMenuItems);
        //}
      };

        this.shouldMenuBeCollapsed = shouldMenuBeCollapsed;
        this.canSidebarBeHidden = canSidebarBeHidden;

        function setMenuCollapsed (isCollapsed) {
          isCollapsed = isCollapsed;
        };

        function isMenuCollapsed() {
          return isCollapsed;
        };

        function toggleMenuCollapsed () {
          isCollapsed = !isCollapsed;
        };

        function getAllStateRefsRecursive (item) {
          var result = [];
          _iterateSubItems(item);
          return result;

          function _iterateSubItems(currentItem) {
            currentItem.subMenu && currentItem.subMenu.forEach(function(subItem) {
              subItem.stateRef && result.push(subItem.stateRef);
              _iterateSubItems(subItem);
            });
          }
        };

        function defineMenuItemStates() {
          return $state.get()
              .filter(function(s) {
                return s.sidebarMeta;
              })
              .map(function(s) {
                var meta = s.sidebarMeta;
                return {
                  name: s.name,
                  title: s.title,
                  level: (s.name.match(/\./g) || []).length,
                  order: meta.order,
                  icon: meta.icon,
                  stateRef: s.name,
                };
              })
              .sort(function(a, b) {
                return (a.level - b.level) * 100 + a.order - b.order;
              });
        }

        function shouldMenuBeCollapsed() {
          return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
        }

        function canSidebarBeHidden() {
          return window.innerWidth <= layoutSizes.resWidthHideSidebar;
        }

        function setMenuList(menuListItems){
          menuList = menuListItems;
        }

        function getMenuList(){
          return menuList;
        }

        return {
          getMenuList: getMenuList,
          setMenuList: setMenuList,
          getMenuItems: getMenuItems,
          getAllStateRefsRecursive: getAllStateRefsRecursive,
          isMenuCollapsed: isMenuCollapsed,
          canSidebarBeHidden: canSidebarBeHidden,
          toggleMenuCollapsed: toggleMenuCollapsed,
          shouldMenuBeCollapsed: shouldMenuBeCollapsed,
          setMenuCollapsed: setMenuCollapsed
      };

      }

    };

  }
})();

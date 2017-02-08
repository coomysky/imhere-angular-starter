import angular from 'angular';

class ApiMockDao {

  /*@ngInject*/
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  login(data) {
    return this.$http.post('/api/users/login', data);
  }

  register(data) {
    return this.$http.post('/api/users', data);
  }
}

export default angular
  .module('common.services.dao.ApiMockDao', [])
  .service('apiMockDao', ApiMockDao);

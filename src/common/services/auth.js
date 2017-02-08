import angular from 'angular';

class AuthService {

  /*@ngInject*/
  constructor($q, $http, $cookieStore, ApiService) {
    this.$q = $q;
    this.$http = $http;
    this.$cookieStore = $cookieStore;
    this.apiService = ApiService;
  }

  login(email, password) {
    let data = { email, password };

    return this.apiService.login(data).then(
      (value) => {
        this.$cookieStore.put('current_user', value.data.user);
        this.$cookieStore.put('auth_token', value.data.token);

        return value;
      }
    );
  }

  autoLogin(token) {
    this.$cookieStore.put('auth_token', token);

    return this.getCurrentUser().then(
      (user) => {
        this.$cookieStore.put('current_user', user);

        return user;
      }
    );
  }

  getCurrentUser() {
    return this.apiService.getCurrentUser().then(response => response.data);
  }

  logout() {
    this.$cookieStore.put('current_user', '');
    this.$cookieStore.put('auth_token', '');
    return true;
  }

  register({ email, password, firstName, lastName }) {
    let data = { email, password, first_name: firstName, last_name: lastName };
    return this.apiService.register(data);
  }
}

export default angular
  .module('auth', [])
  .service('authService', AuthService);

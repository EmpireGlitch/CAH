export class logoutService{
  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }
}

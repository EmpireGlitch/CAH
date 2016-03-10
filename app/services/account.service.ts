export class accountService{
  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }
  public profile = JSON.parse(localStorage.getItem('profile'));
}

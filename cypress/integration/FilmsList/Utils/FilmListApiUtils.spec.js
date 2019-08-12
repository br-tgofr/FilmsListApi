class FilmListApiUtils{
    apiFilmsList
  
    validateApiFilmesListUrl(){
      this.apiFilmsList = cy.request('http://swapi.co/api/films/')
    }
    validateApiFilmesListStatus(){
      this.apiFilmsList.its('status').should('be.eql', 200)
    }  
}

export default FilmListApiUtils;
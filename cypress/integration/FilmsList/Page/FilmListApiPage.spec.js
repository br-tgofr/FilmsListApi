class FilmListApiPage{

      validateApiFilmesListFields(){
        cy.request('http://swapi.co/api/films/').then((response) => {
            expect(response.body).to.have.property('results', 'title', 'Attack of the Clones')
          })
      }
    }
    export default FilmListApiPage;
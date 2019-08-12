import FilmListApiPage from '../Page/FilmListApiPage.spec'
import FilmListApiUtils from '../Utils/FilmListApiUtils.spec'

describe('Filmes', () => {
  it('Lista', () => {
    const utils = new FilmListApiUtils()
    const films = new FilmListApiPage()
    utils.validateApiFilmesListUrl()
    utils.validateApiFilmesListStatus()
    films.validateApiFilmesListFields()
  });
});
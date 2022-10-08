
<form class="formControl" id="FormLogin">

            <div class="formData">
              <label for="userName">Prénom</label>
              <input class="text-control" type="text" name="userName" id='userName'>
              </br>
              <span id='error'></span>
            </div>

            <div class="formData">
              <label for="lastName">Nom</label>
              <input class="text-control" type="text" name="lastName" id='lastName'>
              </br>
              <span id='error'></span>
            </div>

            <div class="formData">
              <label for="mail">Email</label>
              <input class="text-control" type="email" name="mail" id='mail'>
              </br>
              <span id='error'></span>
            </div>

            <div class="form-control ">
              <label for="date">Date de naissance</label>
              <input class="text-control" type="date" name="date" id='date' max="2023-01-01">
              </br>
              <span id='error'></span>

            </div>

            <div class="form-control ">
              <label for="numberT">Combien de tournois ?</label>
              <input class="text-control" type="number" name="numberT" id='numberT' value="0">
              </br>
              <span id='error'></span>
            </div>
            <div class="formData">
            <p class="text-label">A quel tournoi souhaitez-vous participer cette année ?</p>

       

              <div>
                <input class="checkbox-input" type="radio" id="Tournoi01" name="Tournoi" value="New York" checked/>
                <label class="checkbox-label" for="Tournoi01">
                  <span class="checkbox-icon"></span>
                  New York</label>
              </div>

              <div>
                <input class="checkbox-input" type="radio" id="Tournoi02" name="Tournoi" value="San francisco" />
                <label class="checkbox-label" for="Tournoi02">
                  <span class="checkbox-icon"></span>
                  San francisco</label>
              </div>

              <div>
                <input class="checkbox-input" type="radio" id="Tournoi03" name="Tournoi" value="Seattle" />
                <label class="checkbox-label" for="Tournoi03">
                  <span class="checkbox-icon"></span>
                  Seattle</label>
              </div>

              <div>
                <input class="checkbox-input" type="radio" id="Tournoi04" name="Tournoi" value="Chicago" />
                <label class="checkbox-label" for="Tournoi04">
                  <span class="checkbox-icon"></span>
                  Chicago</label>
              </div>

              <div>
                <input class="checkbox-input" type="radio" id="Tournoi05" name="Tournoi" value="Boston" />
                <label class="checkbox-label" for="Tournoi05">
                  <span class="checkbox-icon"></span>
                  Boston</label>
              </div>

              <div>
                <input class="checkbox-input" type="radio" id="Tournoi06" name="Tournoi" value="Portland" />
                <label class="checkbox-label" for="Tournoi06">
                  <span class="checkbox-icon"></span>
                  Portland</label>
              </div>
            </div>

            <div>
              <input class="checkbox-input" type="checkbox" id="condition" checked>
              <label class="checkbox2-label" for="condition">
                <div class="checkbox-icon" id='test'></div>
                J'ai lu et accepté les conditions d'utilisation.
              </label>
              <span id='error'></span>
            </div>

            <div>
              <input class="checkbox-input" type="checkbox" id="event">
              <label class="checkbox2-label" for="event">
                <div class="checkbox-icon"></div>
                Je souhaite être prévenu des prochains évènements.
              </label>
              <span id='error'></span>
            </div>


            <button class="btn-submit button" type="submit">Valider</button>
          </form>
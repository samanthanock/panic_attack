// scene1 - outside of house
    // TODO
        // if game has rolled over from previous round, user should not have to type in player name but simply hit enter to start next day
        // this should query DB to pull saved data

const alphabet = {A:'A',B:'B',C:'C',D:'D',E:'E',F:'F',G:'G',H:'H',I:'I',J:'J',K:'K',L:'L',M:'M',N:'N',O:'O',P:'P',Q:'Q',R:'R',S:'S',T:'T',U:'U',V:'V',W:'W',X:'X',Y:'Y',Z:'Z'}

Crafty.scene('welcome', function() {
    Crafty.background('white url(assets/loading.png) no-repeat center center')
    /* greetings */
    Crafty.e('2D, DOM, Text, Mouse')
    .attr({ x: 230, y: 180 })
    .text('Hello! ')
    .textFont({ size: '40px', weight: 'bold' })

    /* store username */
    let username = ''
    Crafty.e('2D, DOM, Text, Mouse')
    .attr({ x: 230, y: 220 })
    .text(username)
    .textFont({ size: '40px', weight: 'bold' })
    .bind('KeyDown', function(e) {
        if (e.key == Crafty.keys.ENTER) {
            Crafty.enterScene('bedroom')
            timer()
            checkUser(username)
        }
        // TODO
            // let user backspace or clear name before enter
            // tell user how to log in (i.e., press enter)
        for (let letter in alphabet) {
            if (e.key == Crafty.keys[letter]) {
                this.text(alphabet[letter])
                username += this.text(alphabet[letter])._text
                this.text(username)
            }
        }
    })
})

function loadWelcome(scene, duration) {
    Crafty.e('2D, DOM, Tween, Color')
    .attr({ alpha: 0.0, x: 0, y: 0, w: 800, h: 600 })
    .color('#000000')
    .tween({ alpha: 1.0 }, duration)
    .bind('TweenEnd', function() {
        Crafty.scene(scene);
        Crafty.e('2D, DOM, Tween, Color')
        .attr({ alpha: 1.0, x: 0, y: 0, w: 800, h: 600 })
        .color('#000000')
        .tween({ alpha: 0.0 }, duration);
    });
}

loadWelcome('welcome', 0);

/* check whether the user exists in the DB already. If yes, grab the data from DB; if not, use the default template to start */
function checkUser(username) {
    axios.get('/data', {
            gameData: {
             name: username
         }
    })
    .then(function (response) {
        let db = response.data
        for (let user in db) {
            if (db[user].gameData.name === username) {
                db[user].gameData.primaryMetrics.stress = 0 /* have to reset for now otherwise the game will be over right away on the second day because the stress level was too high the day before */
                console.log('this is existing user data', db[user].gameData) /* some data for the existing user still has issues. ie. days_plays not render properly after the first day also how to reset some of the value*/
                startingScore(db[user].gameData)
                }
            if (db[user].gameData.name !== username) {
                playerMetrics.name = username
                startingScore(playerMetrics)
            }
        }
    })
    .catch(function (error) {
        console.log(error)
    })
}
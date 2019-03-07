
// universal variable that persists throughout gameplay until browser is refreshed
const playerMetrics = {
        daysPlayed : 0, // increment up at end of day
        metrics: {
            stress: 0, // affected directly actions (up and down, sometimes with same action); indirectly by all
            energy: 0, // affected directly by time and eating; indirectly by playTime, sleepTime, physicalTime
            timeIn: 0,
            downTime: 0,
            focusTime: 0,
            playTime: 0,
            connectingTime: 0,
            sleepTime: 0,
            physicalTime: 0
        }
    } // save to DB at end of game

startingScore(playerMetrics) // calculate player metrics at start of game
setTimeout(timeScoreChanger, 30000, playerMetrics.metrics)

function startingScore(metrics){
  let baseScore;
  if (metrics.daysPlayed === 0) { // TODO else if algorithms
    baseScore = 6
  }
  for (let metric in metrics.metrics) {
    metrics.metrics[metric] = baseScore
  }
  return metrics
}

function timeScoreChanger(metrics){
  // should not run if game is paused
  const timeScoreLoss = -1
  for (let metric in metrics) {
    if (metric !== 'stress' &&  metric !== 'downTime') {
      metrics[metric] += timeScoreLoss
    }
  }
  console.log('Time Score Changer: \n', metrics)
  if (document.getElementById("timer").innerHTML > 0) {
    setTimeout(timeScoreChanger, 30000, metrics) // run every 30s while game in play
  }
  return metrics
}


// methods needed:
  // calculateStressAndEnergy
    // to be run after every metrics change
    // if any platter metric falls below 1, stress goes up every 10s
    // if any platter metric rises, stress should drop
  // disable available actions if energy too low
  // only some actions should affect stress directly?

/* Metrics:
    - primary:
      - stress
      - energy
    - background:
      - time in
      - down time
      - connecting time
        focusTime: 0,
        playTime: 0,
        connectingTime: 1,
        sleepTime: 0,
        physicalTime: 0

Day 1
  - all metrics = 6

- need little helper functions that affect the score dynamically throughout the game

1. time
2. actions
3. inaction
4. wildcard
5. interrelationship bw metrics

// what metric is being effected?

TIME:
unless the player is engaged in a thing, all metrics decrease (except stress, which goes up or down based on the status of the other metrics)
*/
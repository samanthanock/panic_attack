function handleOption(selectedOption) {
  // find option's effects
    const scoreEffect = selectedOption.scoreEffect
    // update score based on option
    if (scoreEffect) {
        for (effect in scoreEffect.platter) {
            playerMetrics.platter[effect] += scoreEffect.platter[effect]
        }
        for (effect in scoreEffect.primaryMetrics) {
            playerMetrics.primaryMetrics[effect] += scoreEffect.primaryMetrics[effect]
        }
        loseTime()
        calculateStress(playerMetrics)
    }
    // find world event's effects
    const playerMove = selectedOption.playerMove
    if (playerMove) {
        // TODO - send player to selected scene
        console.log(`Player moved ${playerMove}! (You just can't tell yet.)`)
        loseTime()
    }
    // find new skill
    const newSkill = selectedOption.newSkill
    // display call info
    if (newSkill) {
        setTimeout(takeCall, 200, newSkill)
        // moved from gainNewSkill in prompts under therapist call
        playerMetrics.previousDays.newSkill = true
        document.getElementById('new-skill').innerText = '"SHIFT" - body check' // TODO - prettify
    }
}
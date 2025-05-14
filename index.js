function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    let object = gameObject()
    let homePlayers = object.home.players
    let awayPlayers = object.away.players

    if(Object.keys(homePlayers).includes(playerName)) {
        return homePlayers[playerName].points
    } else {
        return awayPlayers[playerName].points
    }
}

function shoeSize(playerName) {
    let object = gameObject()
    let homePlayers = object.home.players
    let awayPlayers = object.away.players

    if(Object.keys(homePlayers).includes(playerName)) {
        return homePlayers[playerName].shoe
    } else {
        return awayPlayers[playerName].shoe
    }
}

function teamColors(teamName) {
    let object = gameObject()
    if (object.home.teamName === teamName){
        return object.home.colors
    } else {
        return object.away.colors
    }
}

function teamNames() {
    const teamNamesArray = []
    let object = gameObject()
    teamNamesArray.push(object.home.teamName)
    teamNamesArray.push(object.away.teamName)

    return teamNamesArray
}

function playerNumbers(teamName) {
    let object = gameObject()
    let homePlayers = object.home.players
    let awayPlayers = object.away.players
    const jerseyNums = []
    if(object.home.teamName === teamName) {
        for (const key in homePlayers){
            jerseyNums.push(homePlayers[key]['number'])
        }
    } else {
        for (const key in awayPlayers){
            jerseyNums.push(awayPlayers[key]['number'])
        }
    }
    return jerseyNums
}

function playerStats(playerName) {
    let object = gameObject()
    let homePlayers = object.home.players
    let awayPlayers = object.away.players

    if(Object.keys(homePlayers).includes(playerName)) {
        return homePlayers[playerName]
    } else {
        return awayPlayers[playerName]
    }
}

function bigShoeRebounds() {
    let object = gameObject()
    let homePlayers = object.home.players
    let awayPlayers = object.away.players
    
    
    let shoeArray = []

    for (const key in homePlayers){
        shoeArray.push(homePlayers[key]['shoe'])
    }

    for (const key in awayPlayers){
        shoeArray.push(awayPlayers[key]['shoe'])
    }

    let maxShoeSize = Math.max(...shoeArray)

    for (const key in homePlayers){
        if(homePlayers[key].shoe === maxShoeSize){
            return homePlayers[key].rebounds
        } else {
            continue
        }
    }

    for (const key in homePlayers){
        if(awayPlayers[key].shoe === maxShoeSize){
            return awayPlayers[key].rebounds
        } else {
            continue
        }
    }
    // maybe there is a more efficient way to do this with less loops, but it works so I will leave it be for now
}

console.log(numPointsScored("Jeff Adrien"))
console.log(numPointsScored('Mason Plumlee'))

console.log(teamColors("Charlotte Hornets"))

console.log(teamNames())

console.log(playerStats("Ben Gordon"))

console.log(shoeSize("Brook Lopez"))
console.log(shoeSize("DeSagna Diop"))

console.log(playerNumbers("Brooklyn Nets"))

console.log(bigShoeRebounds())


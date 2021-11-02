function dungeonestDark(array) {

    let splittedArray = array.shift().split('|');
    let health = 100;
    let coins = 0;
    let counterRooms = 0;


    for (let i = 0; i < splittedArray.length; i++) {

        let token = splittedArray[i];
        let currentRoom = token.split(' ');
        let command = currentRoom[0];
        let value = Number(currentRoom[1]);

        counterRooms++;

        if (command === "potion") {

            if (health + value > 100) {

                value = 100 - health;
                health = 100;
            } else {
                health += value;
            }
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {

            coins += value;
            console.log(`You found ${value} coins.`);
        } else {
            let monster = command;
            health -= value;
            if (health <= 0) {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${counterRooms}`);
                return;
            }
            console.log(`You slayed ${monster}.`);



        }

    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

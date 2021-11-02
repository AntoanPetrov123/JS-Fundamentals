function spiceMustFlow(yield){

    let totalMined = 0;
    let daysInMining = 0;

    for (let source of yield.map(Number)) {
        while (source >= 100) {
            totalMined += source - 26;
            daysInMining++;
            source -= 10;
        }
    }

    totalMined -= 26;
    console.log(daysInMining);
    console.log(daysInMining === 0 ? 0 : totalMined);
        
   }

spiceMustFlow(111);
function enter(pi) {
    if (pi.getMonsterCount(pi.getMap()) == 0) {
	pi.warp(925100400,0); //next
    } else {
	pi.playerMessage(5, "The portal is not opened yet.");
    }
}
import { chest } from "@package/dev/latvian/mods/kubejs/gui";
import { $Collection } from "@package/java/util";
import { $BlockPos } from "@package/net/minecraft/core";

ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('excessive_utilities:division_sigil')
        .itemInputs("minecraft:beacon")
        .entityInputs("minecraft:iron_golem")
        .itemOutputs("excessive_utilities:division_sigil[!excessive_utilities:remaining_uses]")
        .blockPattern(pattern =>
            pattern
                .name(Text.of('Pheudo-Inversion Sigil').darkRed())
                .tooltip(["Chests need to contain items from these tags to start the ritual:", "- North: #children_of_fire", "- South: #gifts_of_earth", "- West: #spices_of_air", "- East: #descendants_of_water", "You can search for them using EMI"])
                .block([-4, 0, -4], "minecraft:redstone_wire")
                .block([-3, 0, -4], "minecraft:tripwire")
                .block([-2, 0, -4],"minecraft:tripwire")
                .block([-1, 0, -4], "minecraft:tripwire")
                .block([0, 0, -4], "minecraft:tripwire")
                .block([1, 0, -4], "minecraft:tripwire")
                .block([2, 0, -4], "minecraft:tripwire")
                .block([3, 0, -4], "minecraft:tripwire")
                .block([4, 0, -4], "minecraft:tripwire")
                .block([-4, 0, -3], "minecraft:redstone_wire")
                .block([-3, 0, -3], "minecraft:tripwire")
                .block([-2, 0, -3], "minecraft:redstone_wire")
                .block([-1, 0, -3], "minecraft:redstone_wire")
                .block([0, 0, -3], "minecraft:redstone_wire")
                .block([1, 0, -3], "minecraft:redstone_wire")
                .block([2, 0, -3], "minecraft:redstone_wire")
                .block([3, 0, -3], "minecraft:redstone_wire")
                .block([4, 0, -3], "minecraft:redstone_wire")
                .block([-4, 0, -2], "minecraft:redstone_wire")
                .block([-3, 0, -2], "minecraft:tripwire")
                .block([-2, 0, -2], "minecraft:redstone_wire")
                .block([-1, 0, -2], "minecraft:tripwire")
                .block([0, 0, -2], "minecraft:tripwire")
                .block([1, 0, -2], "minecraft:tripwire")
                .block([2, 0, -2], "minecraft:tripwire")
                .block([3, 0, -2], "minecraft:tripwire")
                .block([4, 0, -2], "minecraft:redstone_wire")
                .block([-4, 0, -1], "minecraft:redstone_wire")
                .block([-3, 0, -1], "minecraft:tripwire")
                .block([-2, 0, -1], "minecraft:redstone_wire")
                .block([-1, 0, -1], "minecraft:tripwire")
                .block([0, 0, -1], "minecraft:redstone_wire")
                .block([1, 0, -1], "minecraft:redstone_wire")
                .block([2, 0, -1], "minecraft:redstone_wire")
                .block([3, 0, -1], "minecraft:tripwire")
                .block([4, 0, -1], "minecraft:redstone_wire")
                .block([-4, 0, 0], "minecraft:redstone_wire")
                .block([-3, 0, 0], "minecraft:tripwire")
                .block([-2, 0, 0], "minecraft:redstone_wire")
                .block([-1, 0, 0], "minecraft:tripwire")
                .block([1, 0, 0], "minecraft:tripwire")
                .block([2, 0, 0], "minecraft:redstone_wire")
                .block([3, 0, 0], "minecraft:tripwire")
                .block([4, 0, 0], "minecraft:redstone_wire")
                .block([-4, 0, 1], "minecraft:redstone_wire")
                .block([-3, 0, 1], "minecraft:tripwire")
                .block([-2, 0, 1], "minecraft:redstone_wire")
                .block([-1, 0, 1], "minecraft:redstone_wire")
                .block([0, 0, 1], "minecraft:redstone_wire")
                .block([1, 0, 1], "minecraft:tripwire")
                .block([2, 0, 1], "minecraft:redstone_wire")
                .block([3, 0, 1], "minecraft:tripwire")
                .block([4, 0, 1], "minecraft:redstone_wire")
                .block([-4, 0, 2], "minecraft:redstone_wire")
                .block([-3, 0, 2], "minecraft:tripwire")
                .block([-2, 0, 2], "minecraft:tripwire")
                .block([-1, 0, 2], "minecraft:tripwire")
                .block([0, 0, 2], "minecraft:tripwire")
                .block([1, 0, 2], "minecraft:tripwire")
                .block([2, 0, 2], "minecraft:redstone_wire")
                .block([3, 0, 2], "minecraft:tripwire")
                .block([4, 0, 2], "minecraft:redstone_wire")
                .block([-4, 0, 3], "minecraft:redstone_wire")
                .block([-3, 0, 3], "minecraft:redstone_wire")
                .block([-2, 0, 3], "minecraft:redstone_wire")
                .block([-1, 0, 3], "minecraft:redstone_wire")
                .block([0, 0, 3], "minecraft:redstone_wire")
                .block([1, 0, 3], "minecraft:redstone_wire")
                .block([2, 0, 3], "minecraft:redstone_wire")
                .block([3, 0, 3], "minecraft:tripwire")
                .block([4, 0, 3], "minecraft:redstone_wire")
                .block([-4, 0, 4], "minecraft:tripwire")
                .block([-3, 0, 4], "minecraft:tripwire")
                .block([-2, 0, 4], "minecraft:tripwire")
                .block([-1, 0, 4], "minecraft:tripwire")
                .block([0, 0, 4], "minecraft:tripwire")
                .block([1, 0, 4], "minecraft:tripwire")
                .block([2, 0, 4], "minecraft:tripwire")
                .block([3, 0, 4], "minecraft:tripwire")
                .block([4, 0, 4], "minecraft:redstone_wire")
                .queryableBlock([0, 0, -5], "minecraft:chest", "itemsS")
                .queryableBlock([-5, 0, 0], "minecraft:chest", "itemsE")
                .queryableBlock([5, 0, 0], "minecraft:chest", "itemsW")
                .queryableBlock([0, 0, 5], "minecraft:chest", "itemsN")
        )
        .conditions(c =>
            c
                .dimension("minecraft:the_end")
                .facing(Direction.NORTH)
        )
        .id("kubejs:pheudo_inversion_sigil_ritual")
})
SummoningRituals.start(event => { 

    const level = event.getLevel()
    let queriedNorth = event.queryBlockPattern("itemsN")
    let queriedSouth = event.queryBlockPattern("itemsS")
    let queriedWest = event.queryBlockPattern("itemsW")
    let queriedEast = event.queryBlockPattern("itemsE")

    if (event.getRecipeInfo().recipeId.toString() !== "kubejs:pheudo_inversion_sigil_ritual" || queriedNorth === null || queriedSouth === null || queriedWest === null || queriedEast === null) {
        return;
    }

    checkQueriedTag(queriedNorth, "North")
    checkQueriedTag(queriedSouth, "South")
    checkQueriedTag(queriedWest, "West")
    checkQueriedTag(queriedEast, "East")

    /**
     * Checks the queried block pattern for the ritual to see if it contains a valid chest with at least 12 items from the required tag for that position.
     * @param {$Collection<$BlockPos>} queriedTag 
     * @param {String} direction 
     */
    function checkQueriedTag(queriedTag, direction) {
        let ritualPos = event.getPos(), 
            pos = queriedTag.iterator().next(),
            chestPos = ritualPos.subtract(pos),
            block = level.getBlock(chestPos),
            blockID = block.getId(),
            count = 0,
            tag = "",
            tagName = ""

        // Check if block is valid and is a chest
        if (!block || !blockID || !blockID.includes("chest")) {
            if (event.player !== null) {
               event.player.tell(Text.of("No valid chest found at " + chestPos + " in the " + direction + " position for the ritual!").red())
            }
            event.cancel()
            return
        }

        switch (direction) {
            case "North": tag = 'excessive_utilities:children_of_fire'; tagName = "#children_of_fire"; break;
            case "South": tag = 'excessive_utilities:gifts_of_earth'; tagName = "#gifts_of_earth"; break;
            case "West": tag = 'excessive_utilities:spices_of_air'; tagName = "#spices_of_air"; break;
            case "East": tag = 'excessive_utilities:descendants_of_water'; tagName = "#descendants_of_water"; break;
        }

        let inventory = block.getInventory ? block.getInventory() : null
        if (inventory && inventory.getAllItems) {
            let items = inventory.getAllItems()
            items.forEach(item => {
                if (item.hasTag(tag)) {
                    count += 1
                }
            })
        }

        if (count < 12) {
            let remaining = 12 - count
                event.player.tell(Text.of("You need to add " + remaining + " more item(s) from " + tagName + " to the " + direction + " chest to start the ritual!").red())
            event.cancel()
            return
        }
    }
});
SummoningRituals.complete(event => {
    const level = event.getLevel()
    let queriedNorth = event.queryBlockPattern("itemsN")
    let queriedSouth = event.queryBlockPattern("itemsS")
    let queriedWest = event.queryBlockPattern("itemsW")
    let queriedEast = event.queryBlockPattern("itemsE")

    if (event.getRecipeInfo().recipeId.toString() !== "kubejs:pheudo_inversion_sigil_ritual") {
        return;
    }

    clearChest(queriedNorth)
    clearChest(queriedSouth)
    clearChest(queriedWest)
    clearChest(queriedEast)

    /**
     * Clears the contents of a chest block in the ritual.
     * @param {$Collection<$BlockPos>} queriedTag 
     */
    function clearChest(queriedTag) {
        let ritualPos = event.getPos(),
            pos = queriedTag.iterator().next(),
            chestPos = ritualPos.subtract(pos),
            block = level.getBlock(chestPos)
        
        if (block.getId().includes("chest")) { 
            block.set("minecraft:air")
            block.spawnLightning()
        }
    }
})
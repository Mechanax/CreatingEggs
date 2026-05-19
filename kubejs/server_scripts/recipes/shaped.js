ServerEvents.recipes(event => {
    event.shaped('summoningrituals:altar', [
        "GWG",
        "CBC",
        "ETE"
    ], {
        "E": 'excessive_utilities:evil_infused_iron_ingot', 
        "G": 'excessive_utilities:golden_edged_glass',
        "C": 'minecraft:candle',
        "T": 'handcrafted:dark_oak_table',
        "B": 'biomeswevegone:blue_enchanted_crafting_table',
        "W": 'minecraft:wither_skeleton_skull'
    })
})